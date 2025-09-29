'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import Image from 'next/image'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const typedRef = useRef(null)

  useEffect(() => {
    if (inView && typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Student", "Future Marketer", "Future Designer", "Future Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      })

      return () => typed.destroy()
    }
  }, [inView])

  return (
    <section className="about" id="about" ref={ref}>
      <div className="max-width">
        <motion.h2 
          className="title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About me
        </motion.h2>
        <div className="about-content">
          <motion.div 
            className="column left"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image 
              src="/images/5555.JPG" 
              alt="Ayoub El Mimouni" 
              width={400}
              height={400}
              className="rounded-md object-cover"
            />
          </motion.div>
          <motion.div 
            className="column right"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text">I'm Ayoub and I'm a <span ref={typedRef}></span></div>
            <p>
              Je suis Ayoub El Mimouni, un étudiant passionné par le marketing et actuellement en France, à Brest, où je poursuis un double diplôme de Master 1 à Brest Business School. Ce programme est le fruit d'un partenariat entre mon école au Maroc, l'ENCG Settat, reconnue comme l'une des meilleures écoles de commerce du pays, et ma formation en France.

              Mon admission à l'ENCG Settat a été marquée par mon classement de 175 sur 1300 lors des classes préparatoires ECS, une réalisation qui témoigne de mon engagement et de ma détermination.
              
              Toujours avide d'apprendre, je souhaite acquérir autant d'expérience que possible dans le domaine du marketing. Je suis également un grand amateur d'art, ce qui nourrit ma créativité et ma motivation. Je suis ambitieux et prêt à relever de nouveaux défis pour atteindre mes objectifs professionnels.
            </p>
            <a href="/CV/CV-El Mimouni Ayoub.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}