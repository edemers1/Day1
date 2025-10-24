
import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'PureXcel AI — Intelligent Sales Automation',
  description: 'Automate sales outreach and build a predictable, high-quality pipeline with PureXcel AI.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>)
}
