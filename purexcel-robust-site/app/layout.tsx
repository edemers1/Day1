
import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'PureXcel AI — Sales Automation & Call Intelligence',
  description: 'AI-powered sales outreach plus call analysis to improve win rates and revenue growth.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>)
}
