"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  Building2,
  Megaphone,
  Calendar,
  Home,
  Bot,
  Search,
  MessageSquare,
  Target,
  Users,
  TrendingUp,
  Database,
  Globe,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Clock,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "b2b",
      title: "B2B y empresas con fuerza de ventas",
      description: "Automatización completa del proceso de ventas con inteligencia artificial",
      icon: <Building2 className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 via-cyan-400/10 to-blue-600/20",
      accentColor: "text-blue-400",
      features: [
        "Scraper de prospectos y leads calificados: extracción automatizada de datos de empresas y potenciales clientes",
        "Contacto automático y seguimiento de clientes personalizado",
        "Creación de CRM para seguimiento y contacto automático",
        "Clasificación de leads con IA según probabilidad de conversión",
      ],
      benefits: [
        "Aumenta tus ventas en un 300%",
        "Reduce tiempo de prospección en 80%",
        "Mejora la calidad de leads en 250%",
      ],
      price: "Desde $2,500/mes",
      roi: "ROI promedio: 400% en 6 meses",
    },
    {
      id: "marketing",
      title: "Agencias de marketing y creación de contenido",
      description: "Herramientas de IA para optimizar campañas y acelerar la creación de contenido",
      icon: <Megaphone className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 via-pink-400/10 to-purple-600/20",
      accentColor: "text-purple-400",
      features: [
        "Scraper de ideas y campañas exitosas en redes sociales y Ads Library",
        "Generación automática de guiones para videos y anuncios basados en tendencias",
        "Análisis de engagement y optimización de creatividades con IA",
        "Monitoreo de tendencias y competencia en tiempo real",
      ],
      benefits: ["Reduce tiempo de creación en 80%", "Mejora engagement en 150%", "Aumenta conversiones en 200%"],
      price: "Desde $1,800/mes",
      roi: "ROI promedio: 350% en 4 meses",
    },
    {
      id: "reservas",
      title: "Negocios con atención al cliente y reservas",
      description: "Sistema completo de reservas y atención automatizada 24/7",
      icon: <Calendar className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-500/20 via-green-400/10 to-emerald-600/20",
      accentColor: "text-emerald-400",
      features: [
        "Sistema de reservas online conectado a una base de datos central",
        "Automatización de confirmaciones y recordatorios por WhatsApp/Instagram",
        "Chatbot con IA para responder preguntas, cerrar citas y realizar ventas adicionales",
        "Gestión inteligente de horarios y disponibilidad",
      ],
      benefits: ["Reduce cancelaciones en 60%", "Aumenta reservas en 180%", "Mejora satisfacción del cliente en 90%"],
      price: "Desde $1,200/mes",
      roi: "ROI promedio: 280% en 3 meses",
    },
    {
      id: "inmobiliaria",
      title: "Inmobiliarias",
      description: "Plataforma inteligente de búsqueda y gestión inmobiliaria con IA",
      icon: <Home className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/20 via-red-400/10 to-orange-600/20",
      accentColor: "text-orange-400",
      features: [
        "Página con sistema inteligente de búsqueda con IA - los clientes escriben naturalmente y la IA filtra",
        "Creación automática de publicaciones con IA optimizada para conversión",
        "Chatbot con IA que responde consultas, agenda visitas y filtra clientes según presupuesto",
        "Sistema de seguimiento automatizado de leads inmobiliarios",
      ],
      benefits: ["Acelera ventas en 220%", "Mejora calificación de leads en 300%", "Reduce tiempo de gestión en 70%"],
      price: "Desde $2,000/mes",
      roi: "ROI promedio: 450% en 8 meses",
    },
  ]

  const customSolutions = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Páginas Web",
      description: "Sitios web modernos, responsivos y optimizados para conversión",
      features: ["Diseño responsive", "SEO optimizado", "Carga ultra rápida", "Integración con IA"],
      price: "Desde $3,000",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "CRM Personalizados",
      description: "Sistemas de gestión de clientes adaptados a tu flujo de trabajo",
      features: [
        "Automatización de procesos",
        "Reportes inteligentes",
        "Integración con herramientas",
        "Dashboard personalizado",
      ],
      price: "Desde $5,000",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Dashboards Inteligentes",
      description: "Paneles de control con análisis predictivo y visualización avanzada",
      features: ["Análisis predictivo", "Visualización en tiempo real", "Alertas automáticas", "Integración de datos"],
      price: "Desde $2,500",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Automatizaciones IA",
      description: "Procesos automatizados personalizados con inteligencia artificial",
      features: ["Automatización de tareas", "Procesamiento de datos", "Integración API", "Escalabilidad automática"],
      price: "Desde $1,500",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Análisis y Diagnóstico",
      description: "Evaluamos tus procesos actuales y identificamos oportunidades de automatización",
      icon: <Search className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Diseño de Solución",
      description: "Creamos una propuesta personalizada con tecnologías de IA específicas",
      icon: <Target className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Desarrollo e Implementación",
      description: "Desarrollamos y desplegamos la solución con pruebas exhaustivas",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Optimización Continua",
      description: "Monitoreamos, optimizamos y escalamos la solución según tus necesidades",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="bg-emerald-500 text-white mb-6">Servicios Especializados</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Automatización </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                Inteligente
              </span>
              <br />
              <span className="text-white">por Sector</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12">
              Soluciones de IA diseñadas específicamente para tu industria. Automatizamos y optimizamos procesos de
              punta a punta para maximizar tu ROI.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 h-full relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  <div className="relative z-10">
                    <div className={`text-${service.accentColor.split("-")[1]}-400 mb-6`}>{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Benefits */}
                    <div className="bg-gray-900/50 rounded-xl p-4 mb-6">
                      <h4 className="text-emerald-400 font-bold text-sm mb-3 flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        Resultados Comprobados
                      </h4>
                      <div className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="text-sm text-white font-medium">
                            • {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and ROI */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-emerald-400 font-bold text-lg">{service.price}</div>
                        <div className="text-xs text-gray-400">{service.roi}</div>
                      </div>
                      <Link href="/consultation">
                        <Button
                          size="sm"
                          className="bg-emerald-500 hover:bg-emerald-600 text-white group-hover:scale-105 transition-transform"
                        >
                          Consulta Gratuita <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Development Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <Badge className="bg-blue-500 text-white mb-6">Desarrollo a Medida</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Además, hacemos desarrollo de software a medida para tu empresa
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {customSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl h-full">
                    <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{solution.description}</p>

                    <div className="space-y-2 mb-4">
                      {solution.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-emerald-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="text-emerald-400 font-bold">{solution.price}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <Badge className="bg-purple-500 text-white mb-6">Nuestro Proceso</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Cómo Trabajamos</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Un proceso probado que garantiza resultados y maximiza tu retorno de inversión
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{step.icon}</div>
                  </div>
                  <div className="text-emerald-400 font-bold text-sm mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-12 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-black mr-3" />
              <h3 className="text-3xl font-bold text-black">¿Listo para Automatizar tu Negocio?</h3>
              <Sparkles className="w-8 h-8 text-black ml-3" />
            </div>
            <p className="text-black/80 text-xl mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita y descubre cómo la IA puede transformar tu empresa en menos de 30 días
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Consulta Gratuita (30 min)
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg bg-transparent"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Hablar con un Experto
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-black" />
                <span className="text-black font-medium">Sin compromiso</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <DollarSign className="w-5 h-5 text-black" />
                <span className="text-black font-medium">ROI garantizado</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5 text-black" />
                <span className="text-black font-medium">Resultados en 30 días</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
