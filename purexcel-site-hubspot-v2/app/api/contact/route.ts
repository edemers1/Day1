
import { NextRequest, NextResponse } from 'next/server'

const HUBSPOT_BASE = 'https://api.hubapi.com'
const TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN

async function hs(path: string, init?: RequestInit) {
  if (!TOKEN) throw new Error('Missing HUBSPOT_PRIVATE_APP_TOKEN')
  const res = await fetch(`${HUBSPOT_BASE}${path}`, {
    ...init,
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
    cache: 'no-store',
  })
  const text = await res.text()
  const ok = res.ok
  let json: any = undefined
  try { json = text ? JSON.parse(text) : {} } catch {}
  if (!ok) {
    const msg = (json && (json.message || json.reason)) || text || `HTTP ${res.status}`
    const err: any = new Error(msg)
    ;(err as any).status = res.status
    ;(err as any).body = json || text
    throw err
  }
  return json
}

async function findContactByEmail(email: string) {
  const body = {
    filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: email }]}],
    properties: ['email','firstname','lastname','company','jobtitle'],
    limit: 1
  }
  const data = await hs('/crm/v3/objects/contacts/search', { method: 'POST', body: JSON.stringify(body) })
  return (data as any)?.results?.[0] || null
}

async function upsertContact(props: Record<string,string>) {
  const existing = await findContactByEmail(props.email)
  if (existing) {
    const id = (existing as any).id as string
    await hs(`/crm/v3/objects/contacts/${id}`, { method: 'PATCH', body: JSON.stringify({ properties: props }) })
    return id
  } else {
    const created = await hs('/crm/v3/objects/contacts', { method: 'POST', body: JSON.stringify({ properties: props }) })
    return (created as any).id as string
  }
}

async function createTimelineNoteEngagement(contactId: string, body: string) {
  const payload = {
    engagement: { active: true, type: 'NOTE', timestamp: Date.now() },
    associations: { contactIds: [Number(contactId)] },
    metadata: { body }
  }
  try {
    await hs('/engagements/v1/engagements', { method: 'POST', body: JSON.stringify(payload) })
    return true
  } catch (e: any) {
    if ((e as any)?.status === 403 || (e as any)?.status === 404) return false
    return false
  }
}

async function createV3NoteAndAssociate(contactId: string, body: string) {
  const note = await hs('/crm/v3/objects/notes', {
    method: 'POST',
    body: JSON.stringify({ properties: { hs_note_body: body } }),
  })
  const noteId = (note as any).id as string
  await hs(`/crm/v4/objects/notes/${noteId}/associations/contacts/${contactId}`, {
    method: 'PUT',
    body: JSON.stringify([{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }]),
  })
  return true
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json()
    const { name = '', email = '', company = '', role = '', message = '', sourceUrl: clientSource = '' } = (payload || {}) as any
    if (!email) return NextResponse.json({ ok: false, error: 'Email is required' }, { status: 400 })

    const referer = req.headers.get('referer') || ''
    const sourceUrl = clientSource || referer

    const [firstname, ...rest] = String(name).trim().split(' ')
    const lastname = rest.join(' ') || '—'

    const contactId = await upsertContact({
      email,
      firstname,
      lastname,
      company,
      jobtitle: role,
    })

    const noteBody = [
      `Website contact form submission`,
      `Source: ${sourceUrl || 'unknown'}`,
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      role ? `Role: ${role}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean).join('\\n')

    const okTimeline = await createTimelineNoteEngagement(contactId, noteBody)
    if (!okTimeline) await createV3NoteAndAssociate(contactId, noteBody)

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ ok: false, error: e?.message || 'Unknown error' }, { status: 500 })
  }
}
