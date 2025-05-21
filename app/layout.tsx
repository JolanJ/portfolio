import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jolan Jarry-Nohair | Portfolio",
  description:
    "Programmeur-analyste rigoureux avec une solide expérience en résolution de problèmes et en analyse de données, je souhaite réorienter ma carrière vers un poste en service à la clientèle. Reconnu pour ma capacité à vulgariser l'information technique, mon écoute active et mon approche orientée vers les solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
