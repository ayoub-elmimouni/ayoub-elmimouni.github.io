'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar fixed w-full z-50 py-8 font-ubuntu transition-all duration-300">
      <div className="max-width flex items-center justify-between">
        <div className="logo">
          <a href="#" className="text-white text-4xl font-semibold">
            Portfo<span className="text-crimson transition-all duration-300">lio.</span>
          </a>
        </div>
        <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => scrollToSection('home')} className="text-white text-lg font-medium ml-6 transition-colors duration-300 hover:text-crimson">Home</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')} className="text-white text-lg font-medium ml-6 transition-colors duration-300 hover:text-crimson">About</a></li>
          <li><a href="#services" onClick={() => scrollToSection('services')} className="text-white text-lg font-medium ml-6 transition-colors duration-300 hover:text-crimson">Services</a></li>
          <li><a href="#skills" onClick={() => scrollToSection('skills')} className="text-white text-lg font-medium ml-6 transition-colors duration-300 hover:text-crimson">Skills</a></li>
          <li><a href="#teams" onClick={() => scrollToSection('teams')} className="text-white text-lg font-medium ml-6 transition-colors duration-300 hover:text-crimson">Portfolio</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')} className="text-white text-lg font-medium ml-6 transition-colors duration-300 hover:text-crimson">Contact</a></li>
        </ul>
        <div className="menu-btn text-white text-2xl cursor-pointer hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  )
}