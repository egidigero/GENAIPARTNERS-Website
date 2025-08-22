"use client"

import { motion } from "framer-motion"
import { Bot, Search, FileText, Users, BarChart3, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesMainSection() {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Chatbots adaptados con RAG",
      description: "Entrenados con documentos, PDFs, manuales y políticas internas del cliente.",
      features: [
        "Responden consultas complejas con información 100% actualizada",
        "Aplicaciones: atención al cliente, soporte técnico, consultas internas",
        "Integración con bases de conocimiento existentes",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Scrapers inteligentes",
      description: "Extracción automatizada de datos para impulsar tu estrategia comercial.",
      features: [
        "Prospección B2B: datos de empresas, contactos y oportunidades",
        "Inteligencia competitiva: precios, descripciones y ofertas",
        "Monitoreo de tendencias: detectar contenido y productos en auge",
      ],
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Generación automática de contenido",
      description: "Creación de contenido optimizado y personalizado a escala.",
      features: [
        "Guiones para videos, copys para redes, descripciones SEO",
        "Variantes de anuncios publicitarios para test A/B",
        "Generación con voz de IA y newsletters personalizadas",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Optimización de atención al cliente",
      description: "Automatización inteligente para mejorar la experiencia del cliente.",
      features: [
        "Clasificación automática de mensajes por prioridad",
        "Respuestas inmediatas y personalizadas 24/7",
        "Integración con CRM para seguimiento automático",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Análisis y gestión de documentos",
      description: "Procesamiento inteligente de documentos empresariales.",
      features: [
        "Lectura y resumen automático de contratos e informes",
        "Detección de puntos críticos y alertas automáticas",
        "Conversar con documentos en lenguaje natural",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Desarrollo a medida",
      description: "Soluciones personalizadas para necesidades específicas de tu empresa.",
      features: [
        "Páginas web optimizadas con IA",
        "CRM personalizados con automatización",
        "Dashboards inteligentes y sistemas integrados",
      ],
      color: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-white">Nuestros </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
              Servicios
            </span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluciones de inteligencia artificial diseñadas para automatizar, optimizar y escalar tu negocio con
            resultados medibles desde el primer día.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] p-6">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">¿Necesitas algo específico?</h3>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              También desarrollamos soluciones completamente personalizadas para necesidades únicas de tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/sectores"
                className="group relative px-6 py-3 bg-gray-800 text-white rounded-lg font-medium text-base hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700"
              >
                <span className="flex items-center space-x-2">
                  <span>Ver por Sectores</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/consultation"
                className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium text-base hover:from-emerald-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
              >
                <span className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Consulta Personalizada</span>
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
