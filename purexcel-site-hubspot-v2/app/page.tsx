
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const CtaButton = ({ children, href = "#", variant = "primary" }:
  { children: React.ReactNode, href?: string, variant?: "primary"|"secondary" }
) => {
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
            <CtaButton href="#contact">Get a Free Growth Plan</CtaButton>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-[color:var(--brand-blue)]/20 blur-3xl opacity-70"/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="uppercase tracking-wide text-[var(--brand-green)] font-semibold text-xs md:text-sm">Growth. Automated. Orchestrated.</p>
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
              Transform Your Sales Outreach with <span className="bg-gradient-to-r from-[var(--brand-green)] to-[var(--brand-blue)] bg-clip-text text-transparent">AI-Powered Automation</span>
            </h1>
            <div className="mt-6"><Image src="/purexcel-logo.png" width={200} height={200} alt="PureXcel AI logo" className="drop-shadow rounded-xl" /></div>
            <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">
              Turn manual prospecting into a predictable system that delivers qualified leads and shortens your sales cycle — automatically.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="#contact">Get a Free Growth Plan</CtaButton>
              <CtaButton href="#engine" variant="secondary">See How It Works</CtaButton>
            </div>
          </motion.div>
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
              } catch (err) { alert('Network error. Please try again.'); }
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
            <div className="flex items-center gap-3 mt-2">
              <button type="submit" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-semibold bg-[var(--brand-green)] text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--brand-green)]">
                {submitting ? 'Submitting…' : 'Get a Free Growth Plan'}
              </button>
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
