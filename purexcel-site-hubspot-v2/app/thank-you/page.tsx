
export default function ThankYou() {
  return (
    <main className="min-h-screen grid place-items-center bg-[color:var(--brand-dark)] text-slate-100">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-[var(--brand-green)] grid place-items-center text-white font-bold text-xl">✓</div>
        <h1 className="mt-6 text-3xl md:text-4xl font-extrabold">Thanks — we received your message!</h1>
        <p className="mt-3 text-slate-300">We’ll review your goals and follow up with a tailored growth plan.</p>
        <a href="/" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 mt-6 text-sm md:text-base font-semibold bg-[var(--brand-green)] text-white hover:opacity-90">Back to Home</a>
      </div>
    </main>
  )
}
