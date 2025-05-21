"use client"

import type React from "react"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-emerald-100 opacity-30 blur-3xl"></div>
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-purple-100 opacity-30 blur-3xl"></div>

      <div className="container relative mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          <span className="relative inline-block">
            Me Contacter
            <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-purple-400 to-emerald-400"></span>
          </span>
        </h2>

        <div ref={ref} className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div
            className={`transition-all duration-700 ${
              inView ? "translate-x-0 opacity-100" : "translate-x-[-40px] opacity-0"
            }`}
          >
            <h3 className="mb-6 text-xl font-semibold text-gray-900 md:text-2xl">Informations de Contact</h3>

            <div className="space-y-6">
              <Card
                className={`transition-all duration-700 ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href="mailto:jolan.jarry@hotmail.com"
                      className="font-medium text-gray-900 hover:text-emerald-600 hover:underline"
                    >
                      jolan.jarry@hotmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`transition-all duration-700 delay-100 ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-400">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <a
                      href="tel:4385186319"
                      className="font-medium text-gray-900 hover:text-purple-600 hover:underline"
                    >
                      438 518 6319
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`transition-all duration-700 delay-200 ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-purple-500">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Localisation</p>
                    <p className="font-medium text-gray-900">Brownsburg-Chatham, QC</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              inView ? "translate-x-0 opacity-100 delay-300" : "translate-x-40 opacity-0"
            }`}
          >
            <h3 className="mb-6 text-xl font-semibold text-gray-900 md:text-2xl">Envoyez-moi un message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] w-full border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-purple-600 transition-all duration-300 hover:from-emerald-700 hover:to-purple-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Envoyer
                  </span>
                )}
              </Button>

              {isSubmitted && (
                <div className="mt-4 rounded-md bg-emerald-50 p-4 text-emerald-800">
                  Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
