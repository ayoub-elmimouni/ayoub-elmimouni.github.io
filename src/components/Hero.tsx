'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      })

      return () => {
        typed.destroy()
      }
    }
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="home flex bg-cover bg-center bg-fixed text-white min-h-screen font-ubuntu" id="home" style={{backgroundImage: "url('/images/banners.png')"}}>
      <div className="max-width w-full flex">
        <div className="home-content">
          <div className="text-1 text-3xl">Hello, my name is</div>
          <div className="text-2 text-7xl font-semibold -ml-1">El Mimouni Ayoub</div>
          <div className="text-3 text-4xl my-2">
            And I'm a <span ref={typedRef} className="text-crimson font-medium"></span>
          </div>
          <a href="#contact" onClick={scrollToContact} className="inline-block bg-crimson text-white text-2xl py-3 px-9 mt-5 font-normal rounded-md border-2 border-crimson transition-all duration-300 hover:text-crimson hover:bg-transparent">
            Hire me
          </a>
        </div>
      </div>
    </section>
  )
}