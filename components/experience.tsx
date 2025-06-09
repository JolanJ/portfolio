"use client"
import { Calendar, Building, ArrowUpRight, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"

export default function Experience() {
  const experiences = [
    {
      title: "Président & CTO",
      company: "Luxévo Technologies",
      period: "Janv 2025 - Présent",
      achievements: [
        "Croissance accélérée : Généré 60 000 $ de contrats en un mois dans des secteurs ciblés (éducation, construction, santé mentale) grâce à des solutions numériques personnalisées.",
        "Stratégie & investissement : Conclu 2 partenariats en equity (20 %) avec des startups totalisant plus de 2 000 utilisateurs actifs, en échange d'une implication technique et stratégique.",
        "Rôle technique (CTO) : Supervision de l'architecture technique des projets, choix des technologies, et développement actif sur les applications clés (React, Firebase, etc.).",
        "Management : Recrutement, encadrement et formation de stagiaires et employés juniors, avec mise en place d'un environnement structuré (revues de code, gestion agile, mentorat).",
      ],
    },
    {
      title: "Président",
      company: "J.J.N Esthétique INC.",
      period: "Feb 2020 - Janv 2025",
      achievements: [
        "Déploiement d'une stratégie axée sur la croissance interne, ayant permis d'augmenter le chiffre d'affaires mensuel récurrent (MRR) de +45 % en 12 mois.",
        "Création de partenariats B2B avec des concessionnaires, garages et entreprises de transport, représentant plus de 40 % du MRR actuel.",
        "Encadrement et formation continue d'une équipe de techniciens spécialisés en esthétique.",
        "Mise en œuvre d'une culture d'excellence centrée sur la satisfaction client (note moyenne de 4,9/5 sur les plateformes d'avis), avec un taux de rétention client de +60 %.",
      ],
    },
    {
      title: "Développeur Web",
      company: "Nucleus Stratégie",
      period: "Jan 2024 - Juin 2024",
      achievements: [
        "Conception du site web d'Affilia Legal, cabinet montréalais membre du réseau mondial World Link for Law, présent dans 47 pays avec plus de 80 cabinets partenaires.",
        "Effectué des suivis de courriels avec les clients et participé à l'assurance qualité.",
        "Conception site web Attitude fraiche une entreprise emballant plus d'un million de salades par semaine, disponibles dans plus de 2 500 points de vente au Canada.",
      ],
    },
  ]

  return (
    <section id="expérience" className="relative overflow-hidden bg-gradient-to-b from-blue-50/20 to-white py-20">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-50/40 blur-3xl"></div>

      <div className="container relative mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-700 md:text-4xl">
          <span className="relative inline-block">
            Expérience Professionnelle
            <span className="absolute bottom-0 left-0 h-1 w-full bg-slate-200"></span>
          </span>
        </h2>

        <div className="relative mx-auto max-w-5xl">
          {/* Timeline line */}
          <div className="absolute left-[15px] top-0 h-full w-1 bg-slate-100 md:left-1/2 md:-ml-0.5"></div>

          {experiences.map((exp, index) => (
            <TimelineItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ experience, index }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const isEven = index % 2 === 0

  return (
    <div ref={ref} className={`relative mb-12 flex ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}>
      {/* Timeline dot */}
      <div className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-slate-400 shadow-md md:left-1/2 md:-ml-4">
        <CheckCircle className="h-4 w-4 text-white" />
      </div>

      {/* Content */}
      <div
        className={`ml-12 w-full transition-all duration-700 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"} ${
          inView ? "translate-y-0 opacity-100" : `${isEven ? "translate-x-10" : "translate-x-[-40px]"} opacity-0`
        }`}
      >
        <Card
          className={`overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl ${
            inView ? "animate-fadeIn" : ""
          }`}
        >
          <CardHeader className="bg-slate-500 text-white">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold md:text-2xl">{experience.title}</CardTitle>
              <div className="flex items-center text-slate-100">
                <Calendar className="mr-2 h-4 w-4" />
                <span className="text-sm">{experience.period}</span>
              </div>
            </div>
            <CardDescription className="flex items-center text-slate-100">
              <Building className="mr-2 h-4 w-4" />
              {experience.company}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {experience.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className={`flex items-start transition-all duration-700 ${
                    inView ? `animate-slideInRight delay-${i * 100}` : "opacity-0"
                  }`}
                >
                  <ArrowUpRight className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-slate-400" />
                  <span className="text-slate-600">{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
