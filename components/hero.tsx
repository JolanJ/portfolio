"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToExperience = () => {
    const element = document.getElementById("expérience")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="à propos"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/30 to-white py-20 md:py-32"
    >
      {/* Animated background elements */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-50/50 blur-3xl"></div>
      <div className="absolute left-1/2 top-1/4 h-32 w-32 -translate-x-1/2 rounded-full bg-slate-50/60 blur-2xl"></div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className={`mb-6 text-4xl font-bold tracking-tight text-slate-700 transition-all duration-1000 md:text-6xl ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent">
              Jolan Jarry-Nohair
            </span>
          </h1>
          <p
            className={`mx-auto mb-10 max-w-2xl text-slate-500 transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Programmeur-analyste rigoureux avec une solide expérience en résolution de problèmes et en analyse de
            données, je souhaite réorienter ma carrière vers un poste en service à la clientèle. Reconnu pour ma
            capacité à vulgariser l'information technique, mon écoute active et mon approche orientée vers les
            solutions.
          </p>
          <div
            className={`flex flex-col items-center justify-center space-y-4 transition-all duration-1000 delay-500 sm:flex-row sm:space-x-4 sm:space-y-0 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Button
              onClick={scrollToExperience}
              className="group flex items-center gap-2 bg-slate-500 text-white transition-all duration-300 hover:bg-slate-400"
            >
              Voir mon parcours
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button variant="outline" asChild className="border-slate-200 text-slate-500 hover:bg-blue-50/50">
              <a href="mailto:jolan.jarry@hotmail.com">Me contacter</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
