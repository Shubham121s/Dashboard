import './globals.css'
import React, { ReactNode } from "react"

export const metadata = {
  title: "Dashboard Pro - Analytics Dashboard",
  description: "Modern responsive analytics dashboard with enhanced visuals",
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white antialiased">{children}</body>
    </html>
  )
}
