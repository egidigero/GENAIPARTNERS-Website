"use client"

import { motion } from "framer-motion"
import { Building2, Megaphone, Calendar, Home, Code, Database, BarChart3, Smartphone } from "lucide-react"
import Link from "next/link"

export function ServicesViewportSection() {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "B2B y Empresas con Fuerza de Ventas",
      description: "Automatización completa del proceso de ventas",
      features: [
        "Scraper de prospectos y leads calificados",
        "Contacto automático y seguimiento de clientes",
        "CRM para seguimiento y contacto automático",
        "Clasificación de leads con IA según probabilidad de conversión",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Agencias de Marketing y Contenido",
      description: "Potencia tu creatividad con IA",
      features: [
        "Scraper de ideas y campañas exitosas en redes sociales",
        "Generación automática de guiones para videos y anuncios",
        "Análisis de engagement y optimización de creatividades",
        "Automatización de publicaciones y seguimiento",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Negocios con Atención al Cliente",
      description: "Automatiza reservas y atención 24/7",
      features: [
        "Sistema de reservas online conectado a base de datos",
        "Confirmaciones y recordatorios automáticos por WhatsApp",
        "Chatbot con IA para responder preguntas y cerrar citas",
        "Ventas adicionales automatizadas",
      ],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Inmobiliarias",
      description: "Revoluciona la búsqueda de propiedades",
      features: [
        "Sistema inteligente de búsqueda con IA",
        "Creación automática de publicaciones",
        "Chatbot que agenda visitas y filtra clientes",
        "Análisis de preferencias y presupuesto automático",
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
  ]

  const customDevelopment = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Páginas Web",
      description: "Sitios web modernos y responsivos",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "CRM Personalizado",
      description: "Gestión de clientes a medida",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Dashboards",
      description: "Visualización de datos en tiempo real",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Apps Móviles",
      description: "Aplicaciones nativas y web",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-white">Servicios por </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">Sector</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluciones especializadas diseñadas para las necesidades específicas de tu industria
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>

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
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            <span className="text-white">Desarrollo </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">a Medida</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Además, desarrollamos software personalizado para tu empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {customDevelopment.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.1)]">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium hover:from-emerald-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
          >
            Ver Todos los Servicios
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
