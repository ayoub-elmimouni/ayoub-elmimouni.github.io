'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Student", "Future Marketer", "Future Designer", "Future Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    })

    return () => typed.destroy()
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="home" id="home">
      <div className="max-width">
        <motion.div 
          className="home-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">El Mimouni Ayoub</div>
          <div className="text-3">And I'm a <span ref={typedRef}></span></div>
          <a href="#contact" onClick={scrollToContact}>Hire me</a>
        </motion.div>
      </div>
    </section>
  )
}