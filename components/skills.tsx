"use client"

import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Utiliser useState pour gérer les valeurs de progression
  const [progressValues, setProgressValues] = useState({
    "Suite Office": 0,
    "Base de donnée": 0,
    Excel: 0,
    CRM: 0,
    CMS: 0,
  })

  // Définir les valeurs finales (modifiables ici)
  const technicalSkills = [
    { name: "Suite Office", level: 90 },
    { name: "Base de donnée", level: 85 },
    { name: "Excel", level: 75 }, // Modifié de 95 à 75
    { name: "CRM", level: 80 },
    { name: "CMS", level: 85 },
  ]

  // Mettre à jour les valeurs de progression lorsque la section est visible
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const newValues = {}
        technicalSkills.forEach((skill) => {
          newValues[skill.name] = skill.level
        })
        setProgressValues(newValues)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [inView])

  const professionalSkills = [
    "Esprit critique",
    "Prise de décision",
    "Leadership",
    "Autonomie",
    "Adaptabilité",
    "Communication",
    "Esprit d'équipe",
  ]

  return (
    <section id="compétences" className="relative overflow-hidden py-20">
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-100 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-emerald-100 opacity-30 blur-3xl"></div>

      <div className="container relative mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          <span className="relative inline-block">
            Compétences
            <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-purple-400 to-emerald-400"></span>
          </span>
        </h2>

        <div ref={ref} className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <Card
            className={`shadow-md transition-all duration-700 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-500 text-white">
              <CardTitle className="text-xl font-bold md:text-2xl">Compétences Techniques</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 pt-4">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${
                      inView ? `animate-fadeIn delay-${index * 100}` : "opacity-0"
                    }`}
                  >
                    <div className="mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </div>
                    <Progress
                      value={progressValues[skill.name]}
                      className="h-2 bg-gray-200 transition-all duration-1000 ease-out"
                      indicatorClassName="bg-gradient-to-r from-purple-500 to-emerald-500"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card
            className={`shadow-md transition-all duration-700 ${
              inView ? "translate-y-0 opacity-100 delay-300" : "translate-y-10 opacity-0"
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
              <CardTitle className="text-xl font-bold md:text-2xl">Compétences Professionnelles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 pt-4">
                {professionalSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    className={`text-base transition-all duration-500 ${
                      inView
                        ? `animate-fadeIn delay-${index * 100} bg-gradient-to-r from-purple-100 to-emerald-100 text-gray-800 hover:from-purple-200 hover:to-emerald-200`
                        : "opacity-0"
                    }`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
