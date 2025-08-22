"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Megaphone,
  Calendar,
  Home,
  Code,
  Database,
  BarChart3,
  Smartphone,
  ArrowLeft,
  CheckCircle,
  Target,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { ProfileDropdown } from "@/components/profile-dropdown"

export default function SectoresPage() {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "B2B y Empresas con Fuerza de Ventas",
      description: "Automatización completa del proceso de ventas con IA",
      features: [
        "Scraper de prospectos y leads calificados: extracción automatizada de datos de empresas y potenciales clientes",
        "Contacto automático y seguimiento de clientes",
        "Creación de CRM para seguimiento y contacto automático",
        "Clasificación de leads con IA según probabilidad de conversión",
      ],
      benefits: "Aumenta tus ventas en un 300% con automatización inteligente",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      accentColor: "text-blue-400",
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Agencias de Marketing y Creación de Contenido",
      description: "Herramientas de IA para optimizar campañas y contenido",
      features: [
        "Scraper de ideas y campañas exitosas en redes sociales y Ads Library",
        "Generación automática de guiones para videos y anuncios en base a tendencias",
        "Análisis de engagement y optimización de creatividades con IA",
        "Automatización de publicaciones y seguimiento de métricas",
      ],
      benefits: "Reduce el tiempo de creación de contenido en un 80%",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      accentColor: "text-purple-400",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Negocios con Atención al Cliente y Reservas",
      description: "Sistema completo de reservas y atención automatizada (peluquerías, clínicas, restaurantes)",
      features: [
        "Sistema de reservas online conectado a una base de datos central",
        "Automatización de confirmaciones y recordatorios por WhatsApp/Instagram",
        "Chatbot con IA para responder preguntas, cerrar citas y realizar ventas adicionales",
        "Gestión inteligente de horarios y disponibilidad",
      ],
      benefits: "Mejora la experiencia del cliente y reduce cancelaciones en 60%",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      accentColor: "text-emerald-400",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Inmobiliarias",
      description: "Plataforma inteligente de búsqueda y gestión inmobiliaria",
      features: [
        "Página con sistema inteligente de búsqueda con IA. La persona directamente escribe y la IA filtra",
        "Creación de publicaciones con IA optimizadas para cada propiedad",
        "Chatbot con IA que responde consultas, agenda visitas y filtra clientes según presupuesto y preferencias",
        "Análisis automático de mercado y precios competitivos",
      ],
      benefits: "Acelera las ventas inmobiliarias con búsqueda inteligente",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      accentColor: "text-orange-400",
    },
  ]

  const customDevelopment = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Páginas Web",
      description: "Sitios web modernos y responsivos optimizados para conversión",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "CRM Personalizado",
      description: "Sistemas de gestión de clientes adaptados a tu negocio",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Dashboards",
      description: "Paneles de control con visualización de datos en tiempo real",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Apps Móviles",
      description: "Aplicaciones nativas y web para iOS y Android",
    },
  ]

  return (
    <main className="relative min-h-screen bg-black text-foreground">
      <NavBar />
      <ProfileDropdown />

      <div className="pt-20 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al inicio</span>
            </Link>

            <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
              <span className="text-white">Servicios por </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
                Sector
              </span>
            </h1>

            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Soluciones especializadas diseñadas para las necesidades específicas de tu industria, con automatización
              inteligente que impulsa resultados reales.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`h-full rounded-2xl border ${service.borderColor} ${service.bgColor} backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] p-8`}
                >
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className={`w-5 h-5 ${service.accentColor} flex-shrink-0 mt-0.5`} />
                        <p className="text-muted-foreground text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-r ${service.bgColor} border ${service.borderColor} mb-4`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className={`w-4 h-4 ${service.accentColor}`} />
                      <span className={`font-bold text-sm ${service.accentColor}`}>Resultado Esperado</span>
                    </div>
                    <p className="text-foreground font-semibold text-sm">{service.benefits}</p>
                  </div>

                  {/* CTA */}
                  <Link href="/consultation">
                    <button
                      className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 text-white font-medium rounded-lg group`}
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>Consulta Gratuita</span>
                        <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </Link>

                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Development Section */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                <span className="text-white">Desarrollo </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  a Medida
                </span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Además, desarrollamos software personalizado para tu empresa. Páginas web, CRM, dashboards, etc.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {customDevelopment.map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="h-full rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.1)]">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/consultation">
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-white font-bold rounded-lg text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Consulta Gratuita Personalizada
                </button>
              </Link>

              <Link href="/services">
                <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg text-lg border border-gray-700 transition-all duration-300 transform hover:scale-105">
                  Ver Todos los Servicios
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
