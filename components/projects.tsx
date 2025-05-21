"use client"

import { useState, useRef, useEffect } from "react"
import { motion, type PanInfo, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

interface Project {
  id: number
  title: string
  description: string
  image: string
  url: string
  technologies: string[]
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [exitX, setExitX] = useState<number | null>(null)
  const controls = useAnimation()
  const x = useMotionValue(0)
  const scale = useTransform(x, [-200, 0, 200], [0.9, 1, 0.9])
  const rotate = useTransform(x, [-200, 0, 200], [-10, 0, 10])
  const dragConstraints = useRef(null)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects: Project[] = [
    {
      id: 1,
      title: "Affilia Legal",
      description:
        "Cabinet juridique montréalais membre du réseau mondial World Link for Law, présent dans 47 pays avec plus de 80 cabinets partenaires. Spécialisé dans le droit du commerce international pour propulser les entreprises à l'international.",
      image:
        "https://sjc.microlink.io/EiJ18y_-y04P5-1tEc-hMn_fU5NAYmjlR7QU3tp3A1BM1MfWXvFxMuOV9au-CvE0C5HgXTyTjmA45K10fkJqsg.jpeg",
      url: "https://affilia.legal/",
      technologies: ["WordPress", "JavaScript", "PHP", "WP Engine", "CSS"],
    },
    {
      id: 2,
      title: "PortableEHR",
      description:
        "Plateforme innovante de dossiers médicaux électroniques portables offrant aux patients un accès facile à leurs informations de santé. Solution complète pour les professionnels de la santé et les gestionnaires de clinique.",
      image:
        "https://sjc.microlink.io/DURnALXWFFo3pYL07pK33aAMXGtd74WmPdmCus1bUJCPcMqjztCBo7KSaRJMJBlFuikjXpo-rGNCDXmFI3dn3g.jpeg",
      url: "https://www.portableehr.com/",
      technologies: ["WordPress", "JavaScript", "PHP", "WP Engine", "CSS"],
    },
    {
      id: 3,
      title: "Attitude Fraiche",
      description:
        "Entreprise agroalimentaire emballant plus d'un million de salades par semaine, disponibles dans plus de 2 500 points de vente au Canada. Site vitrine présentant leurs produits frais et leur engagement pour la qualité.",
      image: "/placeholder.svg?height=600&width=800",
      url: "https://attitudefraiche.com/",
      technologies: ["WordPress", "JavaScript", "PHP", "WP Engine", "CSS"],
    },
    {
      id: 4,
      title: "PMP Strategy",
      description:
        "Cabinet de conseil en stratégie d'affaires offrant des services de gestion de projet, transformation organisationnelle et solutions technologiques pour les entreprises en croissance.",
      image: "/placeholder.svg?height=600&width=800",
      url: "https://pmpstrategy.com/en/",
      technologies: ["WordPress", "JavaScript", "PHP", "WP Engine", "CSS"],
    },
  ]

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      setExitX(200)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
        setExitX(null)
      }, 300)
    } else if (info.offset.x < -100) {
      setExitX(-200)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
        setExitX(null)
      }, 300)
    }
  }

  const nextProject = () => {
    setExitX(-200)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
      setExitX(null)
    }, 300)
  }

  const prevProject = () => {
    setExitX(200)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
      setExitX(null)
    }, 300)
  }

  const currentProject = projects[currentIndex]

  useEffect(() => {
    if (exitX) {
      controls.start({
        x: exitX,
        opacity: 0,
        transition: { duration: 0.3 },
      })
    } else {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.3 },
      })
    }
  }, [exitX, controls, currentIndex])

  return (
    <section id="projets" className="relative overflow-hidden py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-purple-100 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-emerald-100 opacity-30 blur-3xl"></div>

      <div className="container relative mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          <span className="relative inline-block">
            Projets Réalisés
            <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-400 to-purple-400"></span>
          </span>
        </h2>

        <div ref={ref} className="mx-auto max-w-4xl">
          <div
            className={`transition-all duration-700 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative h-[500px] w-full" ref={dragConstraints}>
              <motion.div
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={dragConstraints}
                onDragEnd={handleDragEnd}
                animate={controls}
                style={{ x, scale, rotate }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-white shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                  <img
                    src={currentProject.image || "/placeholder.svg"}
                    alt={currentProject.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">{currentProject.title}</h3>
                      <a
                        href={currentProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
                      >
                        Visiter <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="mt-2 text-white/90">{currentProject.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, index) => (
                        <span key={index} className="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Button
                onClick={prevProject}
                variant="outline"
                size="icon"
                className="rounded-full border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <span
                    key={index}
                    className={`block h-2 w-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-emerald-500" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>
              <Button
                onClick={nextProject}
                variant="outline"
                size="icon"
                className="rounded-full border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Glissez pour voir plus de projets ou utilisez les fleches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
