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
  keywords: [
    "Jolan Jarry-Nohair",
    "Portfolio",
    "Développeur Web",
    "Programmeur-analyste",
    "Service clientèle",
    "WordPress",
    "JavaScript",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Jolan Jarry-Nohair" }],
  creator: "Jolan Jarry-Nohair",
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: "https://jolan-jarry-portfolio.vercel.app",
    title: "Jolan Jarry-Nohair | Portfolio Professionnel",
    description:
      "Découvrez mon parcours professionnel : de programmeur-analyste à expert en service clientèle. Spécialisé en développement web, WordPress, et solutions numériques personnalisées.",
    siteName: "Portfolio Jolan Jarry-Nohair",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Jolan+Jarry-Nohair+Portfolio",
        width: 1200,
        height: 630,
        alt: "Portfolio de Jolan Jarry-Nohair - Développeur Web et Expert en Service Clientèle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jolan Jarry-Nohair | Portfolio Professionnel",
    description:
      "Découvrez mon parcours professionnel : de programmeur-analyste à expert en service clientèle. Spécialisé en développement web et solutions numériques.",
    images: ["/placeholder.svg?height=630&width=1200&text=Jolan+Jarry-Nohair+Portfolio"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // À remplacer par votre code de vérification Google
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Métadonnées supplémentaires pour les réseaux sociaux */}
        <meta property="og:locale" content="fr_CA" />
        <meta property="og:site_name" content="Portfolio Jolan Jarry-Nohair" />
        <meta name="twitter:creator" content="@jolan_jarry" />
        <meta name="linkedin:owner" content="jolan-jarry-nohair" />

        {/* Favicon et icônes */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Données structurées JSON-LD pour le SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jolan Jarry-Nohair",
              jobTitle: "Développeur Web & Expert en Service Clientèle",
              description:
                "Programmeur-analyste rigoureux avec une solide expérience en résolution de problèmes et en analyse de données",
              url: "https://jolan-jarry-portfolio.vercel.app",
              email: "jolan.jarry@hotmail.com",
              telephone: "+1-438-518-6319",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brownsburg-Chatham",
                addressRegion: "QC",
                addressCountry: "CA",
              },
              sameAs: ["https://www.linkedin.com/in/jolan-jarry-nohair", "https://github.com"],
              knowsAbout: [
                "Développement Web",
                "WordPress",
                "JavaScript",
                "React",
                "Next.js",
                "Service Clientèle",
                "Gestion de Projet",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
