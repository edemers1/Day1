
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const KPI = ({ value, label, sub }: { value: string; label: string; sub?: string }) => (
  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
    <div className="text-3xl md:text-4xl font-extrabold leading-none">{value}</div>
    <div className="mt-1 text-sm opacity-90">{label}</div>
    {sub ? <div className="mt-1 text-xs opacity-60">{sub}</div> : null}
  </div>
)

const PillarCard = ({ title, body }: { title: string; body: string }) => (
  <div className="p-6 rounded-2xl shadow-md bg-white/5 backdrop-blur border border-white/10">
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-slate-300 leading-relaxed">{body}</p>
  </div>
)

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--brand-purple)]/20 border border-[var(--brand-purple)]/30">{children}</span>
)

const CtaLink = ({ children, href = "#", variant = "primary" }:
  { children: React.ReactNode; href?: string; variant?: "primary" | "secondary" }) => {
  const base = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2"
  const styles = variant === "primary"
    ? "bg-[var(--brand-green)] text-white hover:opacity-90 focus:ring-[var(--brand-green)]"
    : "bg-white/10 text-slate-100 hover:bg-white/20 border border-white/10 focus:ring-white/50"
  return <a className={`${base} ${styles}`} href={href}>{children}</a>
}

export default function Page() {
  const [submitting, setSubmitting] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--brand-dark)] via-[#0a0f1f] to-[var(--brand-dark)] text-slate-100">
      <header className="sticky top-0 z-30 bg-black/20 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 grid grid-cols-3 items-center">
          <nav className="hidden md:flex items-center gap-6 text-sm col-start-1 justify-self-start">
            <a href="#engine" className="hover:text-[var(--brand-green)]">Growth Engine</a>
            <a href="#ai" className="hover:text-[var(--brand-green)]">AI Platform</a>
            <a href="#analyzer" className="hover:text-[var(--brand-green)]">Sales Call Analyzer</a>
            <a href="#pricing" className="hover:text-[var(--brand-green)]">Pricing</a>
            <a href="#contact" className="hover:text-[var(--brand-green)]">Contact</a>
          </nav>
          <a href="/" aria-label="PureXcel AI home" className="flex items-center gap-3 col-start-2 justify-self-center">
            <Image src="/purexcel-logo.png" width={36} height={36} alt="PureXcel AI" className="rounded-md" />
            <span className="text-lg md:text-xl font-bold tracking-tight">
              PureXcel <span className="font-black text-[var(--brand-green)]">AI</span>
            </span>
          </a>
          <div className="flex items-center gap-3 col-start-3 justify-self-end">
            <CtaLink href="#contact">Get a Free Growth Plan</CtaLink>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-[color:var(--brand-blue)]/20 blur-3xl opacity-70"/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="uppercase tracking-wide text-[var(--brand-green)] font-semibold text-xs md:text-sm">Growth. Automated. Orchestrated.</p>
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
              AI-Powered Sales Automation + Call Intelligence
            </h1>
            <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">
              Launch a complete outbound engine and coach every rep with AI. We orchestrate multi-channel outreach,
              analyze sales calls, surface coaching moments, and convert more pipeline to revenue.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Badge>Outreach Automation</Badge>
              <Badge>Lead Scoring</Badge>
              <Badge>Call Insights</Badge>
              <Badge>Rep Coaching</Badge>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="#contact">Get a Free Growth Plan</CtaLink>
              <CtaLink href="#analyzer" variant="secondary">See Call Analyzer</CtaLink>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="grid grid-cols-2 gap-4">
              <KPI value="2.4×" label="Pipeline Growth" sub="within 90 days" />
              <KPI value="+22%" label="Revenue / Rep" sub="from better qualification" />
              <KPI value="+18 pts" label="Win Rate Lift" sub="with AI coaching" />
              <KPI value="+35%" label="Reply Rate" sub="ICP targeting & sequencing" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="engine" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-extrabold">The Growth Engine</h2>
          <p className="mt-3 text-slate-300 md:text-lg">
            A step-by-step system to find, engage, qualify, and convert the right prospects—consistently.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <PillarCard title="1) Strategy & ICP" body="Define ICP, value props, and messaging. Build high-precision lists by role, firmographics, and tech stack." />
            <PillarCard title="2) Enrichment & Scoring" body="Enrich contacts, score fit & intent, and route by persona and stage." />
            <PillarCard title="3) Sequenced Outreach" body="Email + LinkedIn with branching logic, warm-up, and safe-send limits." />
            <PillarCard title="4) AI Reply Handling" body="Auto-classify replies, extract objections, and trigger tailored follow-ups." />
            <PillarCard title="5) Meeting & Handoffs" body="Instant booking, calendar sync, and CRM hygiene by default." />
            <PillarCard title="6) Analytics & Governance" body="Health dashboards, deliverability guardrails, opt-out compliance." />
          </div>
        </div>
      </section>

      <section id="ai" className="py-16 md:py-24 bg-white/5 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-extrabold">PureXcel AI Platform</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <PillarCard title="AI Personalization" body="Dynamic snippets by ICP, persona, and stage. Context from firmographics and intent data." />
            <PillarCard title="Scoring & Routing" body="Lead/classification models prioritize the right buyers and route sequences to maximize response." />
            <PillarCard title="Compliance & Safety" body="Governed sending, unsubscribe handling, and domain health monitoring to protect deliverability." />
          </div>
        </div>
      </section>

      <section id="analyzer" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-extrabold">AI Sales Call Analyzer</h2>
          <p className="mt-3 text-slate-300 md:text-lg">
            Turn every call into coaching. We transcribe, summarize, and analyze meetings to highlight what wins deals—
            and where to improve.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <PillarCard title="Real-time Transcription & TL;DR" body="High-accuracy transcription with executive summaries and action items." />
            <PillarCard title="Objection & Sentiment Mining" body="Detect objections, competitor mentions, and sentiment swings across calls." />
            <PillarCard title="Coach Cards for Reps" body="Automatic talk-time analysis, next-best questions, and follow-up templates." />
            <PillarCard title="Playbook Matching" body="Map moments to proven talk tracks and surface examples from top reps." />
            <PillarCard title="CRM Sync" body="Push notes, key moments, and tasks to your CRM for airtight follow-through." />
            <PillarCard title="Privacy & Control" body="PII minimization, redaction, and role-based access." />
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-extrabold">Pricing</h2>
          <p className="mt-3 text-slate-300 md:text-lg">
            The plans below are <strong>sample models</strong>. We’ll customize data sources, channels, models, and integrations to your company.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="font-semibold text-lg">Starter</h3>
              <p className="mt-2 text-sm text-slate-300">Outbound automation for 1 ICP</p>
              <ul className="mt-4 text-sm space-y-2">
                <li>– Enrichment & sequencing (email)</li>
                <li>– ICP scoring</li>
                <li>– Weekly reporting</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="font-semibold text-lg">Growth</h3>
              <p className="mt-2 text-sm text-slate-300">Multi-channel + Call Analyzer</p>
              <ul className="mt-4 text-sm space-y-2">
                <li>– Email + LinkedIn sequences</li>
                <li>– AI Sales Call Analyzer</li>
                <li>– A/B tests & optimization</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="font-semibold text-lg">Scale</h3>
              <p className="mt-2 text-sm text-slate-300">Advanced models + SLAs</p>
              <ul className="mt-4 text-sm space-y-2">
                <li>– Intent data & predictive scoring</li>
                <li>– Coaching programs & QA</li>
                <li>– CRM automation & governance</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            *We’ll tailor the plan to your revenue targets, segments, and team. Ask about custom models and integrations.
          </p>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold">Let’s Build Your Intelligent Sales Engine</h2>
          <p className="mt-3 text-slate-300 md:text-lg">Tell us about your goals. We’ll tailor a plan and timeline for your team.</p>
          <form
            className="mt-8 grid gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 shadow-sm"
            onSubmit={async (e) => {
              e.preventDefault();
              if (submitting) return;
              setSubmitting(true);
              const fd = new FormData(e.currentTarget as HTMLFormElement);
              const data: Record<string, string> = Object.fromEntries(fd.entries()) as any;
              (data as any).sourceUrl = window.location.href;
              try {
                const res = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data),
                });
                const json = await res.json();
                if (json.ok) window.location.href = '/thank-you';
                else alert(json.error || 'Submission failed');
              } catch { alert('Network error. Please try again.'); }
              finally { setSubmitting(false); }
            }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input required name="name" className="mt-1 w-full rounded-xl border border-white/10 bg-transparent px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Work Email</label>
                <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-white/10 bg-transparent px-3 py-2" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Company</label>
                <input name="company" className="mt-1 w-full rounded-xl border border-white/10 bg-transparent px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Role</label>
                <input name="role" className="mt-1 w-full rounded-xl border border-white/10 bg-transparent px-3 py-2" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">What are you trying to achieve?</label>
              <textarea name="message" rows={4} className="mt-1 w-full rounded-xl border border-white/10 bg-transparent px-3 py-2" />
            </div>
            <p className="text-xs text-slate-400">By submitting, you agree to receive communications about your growth plan. We’ll never sell your data.</p>
            <div className="flex items-center gap-3 mt-2">
              <button type="submit" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-semibold bg-[var(--brand-green)] text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--brand-green)]">
                {submitting ? 'Submitting…' : 'Get a Free Growth Plan'}
              </button>
              <a href="#analyzer" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-semibold bg-white/10 hover:bg-white/20 border border-white/10">Learn About Call Analyzer</a>
            </div>
          </form>
        </div>
      </section>

      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 font-bold">
            <Image src="/purexcel-logo.png" width={28} height={28} alt="PureXcel AI" className="rounded-md" />
            <span>PureXcel <span className="text-[var(--brand-green)]">AI</span></span>
          </a>
          <div className="text-sm text-slate-400">© {new Date().getFullYear()} PureXcel AI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
