'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const portfolioItems = [
    {
      image: "/images/3.png",
      description: "Vous avez la flemme de sortir? 😫 Recevez votre commande Aïn Saïs en 1 seul clic, où que vous soyez ! 😍"
    },
    {
      image: "/images/4.png",
      description: "Toujours souriants 😊"
    },
    {
      image: "/images/5.png",
      description: "Prenez un moment et hydratez-vous ! ✨"
    },
    {
      image: "/images/7.png",
      description: "Parce que la qualité de votre eau est importante pour votre santé, la composition unique de Sidi Hrazem vous aide à récupérer les minéraux perdus."
    },
    {
      image: "/images/8.png",
      description: "La source de notre eau vient de sa source !"
    }
  ]

  return (
    <section className="teams" id="teams" ref={ref}>
      <div className="max-width">
        <motion.h2 
          className="title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Work
        </motion.h2>
        <div className="carousel">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index}
              className="card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="box">
                <Image 
                  src={item.image} 
                  alt={`Portfolio item ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover"
                />
                <div className="text"></div>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}