import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Response Checklist Engine',
  description: 'Smart incident response checklists that adapt to severity, service, and time of day with role assignments for DevOps and SRE teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="54881540-03cd-4314-8d6d-e6ed8fc3e5ea"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
