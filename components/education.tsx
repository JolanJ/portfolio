"use client"

import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const educationItems = [
    {
      degree: "AEC informatique",
      institution: "Collège CDI",
      period: "Sep 2019 - Oct 2020",
    },
    {
      degree: "DES",
      institution: "Polyvalente Lavigne",
      period: "Sep 2019 - Oct 2020",
    },
  ]

  return (
    <section id="formation" className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50/20 py-20">
      <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-indigo-50/30 blur-3xl"></div>

      <div className="container relative mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-700 md:text-4xl">
          <span className="relative inline-block">
            Formation
            <span className="absolute bottom-0 left-0 h-1 w-full bg-slate-200"></span>
          </span>
        </h2>

        <div ref={ref} className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {educationItems.map((item, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-none shadow-md transition-all duration-700 hover:shadow-lg ${
                inView ? `translate-y-0 opacity-100 delay-${index * 200}` : "translate-y-10 opacity-0"
              }`}
            >
              <CardHeader className="flex flex-row items-center gap-4 bg-slate-400 text-white">
                <div className="rounded-full bg-white/20 p-2">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <CardTitle>{item.degree}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-2 text-lg font-medium text-slate-600">{item.institution}</p>
                <div className="flex items-center text-slate-400">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{item.period}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
