'use client'

import { useState, useEffect } from 'react'

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div 
      className={`scroll-up-btn fixed h-11 w-10 bg-crimson right-8 bottom-3 text-center leading-11 text-white z-50 text-3xl rounded-md border-b-2 cursor-pointer transition-all duration-300 hover:brightness-90 ${
        isVisible ? 'show bottom-8 opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={scrollToTop}
    >
      <i className="fas fa-angle-up"></i>
    </div>
  )
}