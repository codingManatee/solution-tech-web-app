import type React from "react"
import "@/app/globals.css"

export const metadata = {
  title: "Green Hydrogen - The Future of Clean Energy",
  description:
    "Discover the power of green hydrogen - sustainable, zero-emission fuel that powers our world without harming the planet.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="">
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
