'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: "fas fa-paint-brush",
      title: "Stratégie digitale",
      description: "Génération de leads"
    },
    {
      icon: "fas fa-laptop-code",
      title: "Création de sites web",
      description: "WordPress, Shopify, HTML/CSS/JS"
    },
    {
      icon: "fas fa-cogs",
      title: "CRM & Marketing automation",
      description: "HubSpot, Salesforce, Brevo, Omnisend, Make"
    },
    {
      icon: "fas fa-bullhorn",
      title: "Social Media & Ads",
      description: "Meta Ads Manager, TikTok Ads, LinkedIn Ads"
    },
    {
      icon: "fas fa-paint-brush",
      title: "Conception visuelle & multimédia",
      description: "Photoshop, Figma, Blender, montage vidéo"
    },
    {
      icon: "fas fa-chart-bar",
      title: "Analytics & tracking",
      description: "Google Analytics, Tag Manager"
    },
    {
      icon: "fas fa-search",
      title: "Veille concurrentielle",
      description: "Benchmarking"
    },
    {
      icon: "fas fa-robot",
      title: "IA & agents IA",
      description: "Utilisation avancée de l'IA & création d'agents IA"
    }
  ]

  return (
    <section className="services" id="services" ref={ref}>
      <div className="max-width">
        <motion.h2 
          className="title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        <div className="serv-content">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="box">
                <i className={service.icon}></i>
                <div className="text">{service.title}</div>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}