"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />

        <div className="container mx-auto flex justify-center py-8">
          <div className={`animate-bounce transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <ChevronDown className="h-8 w-8 text-emerald-400" />
          </div>
        </div>

        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
