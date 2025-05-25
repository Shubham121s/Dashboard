import './globals.css'

export const metadata = {
  title: "Dashboard Pro - Analytics Dashboard",
  description: "Modern responsive analytics dashboard with enhanced visuals",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white antialiased">{children}</body>
    </html>
  )
}
