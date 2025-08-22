"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, MessageSquare, Bot } from "lucide-react"
import { NewsletterForm } from "./newsletter-form"
import { FooterPopup } from "./footer-popup"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const footerSections = [
    {
      id: "services",
      title: "Servicios",
      items: [
        "Automatización B2B",
        "Marketing con IA",
        "Sistemas de Reservas",
        "Soluciones Inmobiliarias",
        "Desarrollo a Medida",
        "Consultoría IA",
      ],
    },
    {
      id: "company",
      title: "Empresa",
      items: ["Sobre Nosotros", "Proyectos", "Proceso", "Casos de Éxito", "Blog", "Carreras"],
    },
    {
      id: "resources",
      title: "Recursos",
      items: ["Documentación", "Soporte Técnico", "API", "Guías", "Webinars", "Descargas"],
    },
    {
      id: "legal",
      title: "Legal",
      items: ["Privacidad", "Términos", "Cookies", "GDPR", "Accesibilidad", "Licencias"],
    },
  ]

  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-border/50 relative overflow-hidden">
      {/* Code background */}
      <div className="absolute inset-0 opacity-5">
        <pre className="text-xs text-primary/30 font-mono leading-relaxed transform rotate-6 scale-150 absolute -top-20 -left-20">
          {`function automatizarNegocio() {
  const soluciones = [];
  
  // Automatización B2B
  soluciones.push({
    scraping: 'leads calificados',
    crm: 'seguimiento automático',
    ia: 'clasificación inteligente',
    roi: '400% en 6 meses'
  });
  
  // Marketing IA
  soluciones.push({
    contenido: 'generación automática',
    campañas: 'optimización IA',
    engagement: '+150% mejora',
    tiempo: '-80% creación'
  });
}`}
        </pre>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Desktop Footer */}
        <div className="hidden md:flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
                GenAI Partners
              </span>
            </div>
            <FooterPopup />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} GenAI Partners. Todos los derechos reservados.
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => (window.location.href = "/consultation")}
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium px-4 py-2 text-sm"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Consulta Gratuita
              </Button>

              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Suscríbete a nuestro newsletter</span>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer - Stacked with collapsible sections */}
        <div className="md:hidden space-y-6">
          {/* Logo and main info */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
                GenAI Partners
              </span>
            </div>
            <div className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} GenAI Partners. Todos los derechos reservados.
            </div>
          </div>

          {/* Collapsible sections */}
          <div className="space-y-2">
            {footerSections.map((section) => (
              <div key={section.id} className="border border-border/30 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 bg-background/50 hover:bg-muted/30 transition-colors"
                >
                  <span className="font-medium text-sm">{section.title}</span>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 space-y-2 border-t border-border/30">
                        {section.items.map((item, index) => (
                          <motion.div
                            key={index}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Newsletter signup and chat button */}
          <div className="text-center space-y-4 pt-4 border-t border-border/30">
            <span className="text-sm text-muted-foreground">Mantente actualizado</span>
            <div className="px-4">
              <NewsletterForm />
            </div>
            <Button
              onClick={() => (window.location.href = "/consultation")}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium px-4 py-2 text-sm"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
