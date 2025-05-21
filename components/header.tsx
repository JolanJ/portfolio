"use client"

import { useState } from "react"
import { Menu, X, Linkedin, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    if (isMobile) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="text-xl font-bold">
          <span className="text-gray-900">Jolan Jarry-Nohair</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex">
          <nav className="mr-6">
            <ul className="flex space-x-8">
              {["À propos", "Expérience", "Compétences", "Formation", "Contact"].map((item, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-emerald-600"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-purple-600"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:jolan.jarry@hotmail.com"
              className="text-gray-600 transition-colors hover:text-emerald-600"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 bg-white shadow-lg md:hidden">
          <nav className="container mx-auto py-4">
            <ul className="flex flex-col space-y-2">
              {["À propos", "Expérience", "Compétences", "Formation", "Contact"].map((item, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="w-full justify-start text-gray-600 hover:text-gray-900"
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>

            {/* Social Media Icons for Mobile */}
            <div className="mt-4 flex justify-center space-x-6 pt-4 border-t border-gray-100">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-emerald-600"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-purple-600"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:jolan.jarry@hotmail.com"
                className="text-gray-600 transition-colors hover:text-emerald-600"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
