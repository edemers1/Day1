
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-extrabold leading-none">{value}</div>
    <div className="mt-1 text-sm opacity-80">{label}</div>
  </div>
)

const PillarCard = ({ title, body }: { title: string; body: string }) => (
  <div className="p-6 rounded-2xl shadow-md bg-white/5 backdrop-blur border border-white/10">
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-slate-300 leading-relaxed">{body}</p>
  </div>
)

const CtaLink = ({ children, href = "#", variant = "primary" }: { children: React.ReactNode; href?: string; variant?: "primary" | "secondary" }) => {
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
            <a href="#results" className="hover:text-[var(--brand-green)]">Results</a>
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
              Automate Sales Outreach and Build a Predictable, High-Quality Pipeline
            </h1>
            <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">
              PureXcel AI turns manual prospecting into an always-on system. We enrich leads, orchestrate multi-channel
              outreach, and book more meetings—without adding headcount.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="#contact">Get a Free Growth Plan</CtaLink>
              <CtaLink href="#pricing" variant="secondary">View Sample Models</CtaLink>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <Stat value="3×" label="Pipeline Growth" />
              <Stat value="< 90 days" label="Shorter Sales Cycle" />
              <Stat value="10+" label="Qualified Leads in 45 Days" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative rounded-3xl border border-white/10 shadow-lg p-6 bg-white/5">
              <h3 className="font-semibold text-lg">What’s Inside the Engine</h3>
              <p className="mt-2 text-sm text-slate-300">
                Prospect intelligence • Data enrichment • ICP scoring • Sequenced email & LinkedIn • Auto follow-ups • Booking & analytics
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                {["Lead Enrichment","ICP Scoring","Email Sequences","LinkedIn Touches","Auto Follow-ups","Booking & Handoffs"].map((t) => (
                  <div key={t} className="px-3 py-2 rounded-xl bg-[#05282F]/25 border border-white/10">{t}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="engine" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-extrabold">The Growth Engine</h2>
          <p className="mt-3 text-slate-300 md:text-lg">
            A proven, step-by-step system to find, engage, and convert the right prospects—consistently.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <PillarCard title="1) Strategy & ICP" body="We define your ICP and value messaging, then generate lists matched to your industry, size, and buying roles." />
            <PillarCard title="2) Data & Enrichment" body="We enrich contacts (titles, firmographics, tech stack) and score them for fit and intent." />
            <PillarCard title="3) Sequenced Outreach" body="Multi-touch email + LinkedIn, with branching logic, deliverability setup, and warm-up." />
            <PillarCard title="4) Qualification & Handoffs" body="Auto-reply classification, meeting booking, and CRM sync for a clean handoff to sales." />
            <PillarCard title="5) Measure & Improve" body="Weekly reporting on opens, replies, meetings, and influenced pipeline—continuously optimized." />
            <PillarCard title="6) Governance" body="Safe-send limits, opt-out compliance, and domain health monitoring are built in." />
          </div>
        </div>
      </section>

      <section id="results" className="py-16 md:py-24 bg-white/5 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-extrabold">Results You Can Expect</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <ul className="space-y-3 text-slate-200">
              <li>• 3× increase in qualified opportunities in 60–90 days</li>
              <li>• 30–50% faster time-to-meeting through better targeting</li>
              <li>• Consistent pipeline with transparent reporting</li>
            </ul>
            <ul className="space-y-3 text-slate-200">
              <li>• Lower CAC via automated sequences and scoring</li>
              <li>• Stronger domain health and compliance</li>
              <li>• Playbooks your team can run long-term</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-extrabold">Pricing</h2>
          <p className="mt-3 text-slate-300 md:text-lg">
            The models below are <strong>sample configurations</strong>. We’ll customize the plan, data sources, and sequences to your company and market.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="font-semibold text-lg">Starter</h3>
              <p className="mt-2 text-sm text-slate-300">1 ICP • Email only • Reporting weekly</p>
              <ul className="mt-4 text-sm space-y-2">
                <li>– Research & enrichment</li>
                <li>– Deliverability & domain warm-up</li>
                <li>– Sequenced outreach (email)</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="font-semibold text-lg">Growth</h3>
              <p className="mt-2 text-sm text-slate-300">2–3 ICPs • Email + LinkedIn • A/B tests</p>
              <ul className="mt-4 text-sm space-y-2">
                <li>– Multi-channel sequences</li>
                <li>– ICP scoring & routing</li>
                <li>– Weekly optimization</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="font-semibold text-lg">Scale</h3>
              <p className="mt-2 text-sm text-slate-300">Multiple ICPs • Advanced analytics • SLAs</p>
              <ul className="mt-4 text-sm space-y-2">
                <li>– Enrichment & intent data</li>
                <li>– Reply classification & booking</li>
                <li>– CRM sync & governance</li>
              </ul>
            </div>
          </div>
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
              <CtaLink href="#pricing" variant="secondary">View Sample Models</CtaLink>
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
