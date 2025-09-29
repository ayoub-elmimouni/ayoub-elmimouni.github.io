'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollUpButton from '@/components/ScrollUpButton'

export default function Home() {
  useEffect(() => {
    // Add scroll event listener for navbar
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      const scrollUpBtn = document.querySelector('.scroll-up-btn')
      
      if (window.scrollY > 20) {
        navbar?.classList.add('sticky')
      } else {
        navbar?.classList.remove('sticky')
      }
      
      if (window.scrollY > 500) {
        scrollUpBtn?.classList.add('show')
      } else {
        scrollUpBtn?.classList.remove('show')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollUpButton />
    </main>
  )
}