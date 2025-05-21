import { Linkedin, Github, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gradient-to-r from-emerald-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-center text-gray-600 md:text-left">
              © {currentYear} Jolan Jarry-Nohair. Tous droits réservés.
            </p>
          </div>

          <div className="flex space-x-6">
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
      </div>
    </footer>
  )
}
