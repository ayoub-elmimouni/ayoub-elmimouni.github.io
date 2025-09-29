'use client'

import { useState, useEffect } from 'react'

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div 
      className={`scroll-up-btn ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <i className="fas fa-angle-up"></i>
    </div>
  )
}