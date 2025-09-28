import type React from "react"
import "@/app/globals.css"
import ClickSpark from "@/components/ClickSpark"

export const metadata = {
  title: "The Solution Tech Company",
  icons: {
    icon: "/Logomark_Indigo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="">
        <ClickSpark
          sparkColor='#003D4F'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
          {children}
          {/* </ThemeProvider> */}
        </ClickSpark>
      </body>
    </html>
  )
}
