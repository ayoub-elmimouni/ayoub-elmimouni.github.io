'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [animateProgress, setAnimateProgress] = useState(false)

  useEffect(() => {
    if (inView) {
      setAnimateProgress(true)
    }
  }, [inView])

  const marketingSkills = [
    "Social Media Marketing", "Content Marketing", "SEO/SEM", "Email Marketing",
    "Brand Strategy", "Market Research", "Analytics", "PPC Advertising"
  ]

  const designSkills = [
    "Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva",
    "UI/UX Design", "Logo Design", "Web Design", "Graphic Design"
  ]

  const analyticsSkills = [
    "Google Analytics", "Facebook Insights", "Google Ads", "Hootsuite",
    "Mailchimp", "WordPress", "Shopify", "HubSpot"
  ]

  const languages = [
    { name: "Arabic", level: "Native", percentage: 100, levelClass: "native" },
    { name: "French", level: "Advanced", percentage: 90, levelClass: "advanced" },
    { name: "English", level: "Professional", percentage: 85, levelClass: "professional" },
    { name: "Spanish", level: "Basic", percentage: 40, levelClass: "basic" },
    { name: "German", level: "Beginner", percentage: 25, levelClass: "beginner" }
  ]

  return (
    <section className="skills py-24" id="skills" ref={ref}>
      <div className="max-width">
        <h2 className="title relative text-center text-4xl font-medium mb-16 pb-5 font-ubuntu">
          My skills
        </h2>
        
        <div className="skills-container grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Digital Marketing Card */}
          <div className="skills-card marketing-card bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-xl text-center border-3 border-transparent hover:border-red-500">
            <div className="card-icon w-18 h-18 mx-auto mb-5 rounded-full flex items-center justify-center bg-gradient-to-br from-red-500 to-red-700">
              <i className="fas fa-bullhorn text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Digital Marketing</h3>
            <div className="skills-list flex flex-wrap gap-3 justify-center">
              {marketingSkills.map((skill, index) => (
                <span key={index} className="skill-tag bg-gray-100 py-2 px-4 rounded-full text-sm font-medium text-gray-600 transition-all duration-300 cursor-pointer border-2 border-transparent hover:bg-red-500 hover:text-white hover:-translate-y-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Web & Design Card */}
          <div className="skills-card design-card bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-xl text-center border-3 border-transparent hover:border-blue-500">
            <div className="card-icon w-18 h-18 mx-auto mb-5 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700">
              <i className="fas fa-palette text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Web & Design</h3>
            <div className="skills-list flex flex-wrap gap-3 justify-center">
              {designSkills.map((skill, index) => (
                <span key={index} className="skill-tag bg-gray-100 py-2 px-4 rounded-full text-sm font-medium text-gray-600 transition-all duration-300 cursor-pointer border-2 border-transparent hover:bg-blue-500 hover:text-white hover:-translate-y-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Analytics Card */}
          <div className="skills-card analytics-card bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-xl text-center border-3 border-transparent hover:border-green-500">
            <div className="card-icon w-18 h-18 mx-auto mb-5 rounded-full flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700">
              <i className="fas fa-chart-bar text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Tools & Analytics</h3>
            <div className="skills-list flex flex-wrap gap-3 justify-center">
              {analyticsSkills.map((skill, index) => (
                <span key={index} className="skill-tag bg-gray-100 py-2 px-4 rounded-full text-sm font-medium text-gray-600 transition-all duration-300 cursor-pointer border-2 border-transparent hover:bg-green-500 hover:text-white hover:-translate-y-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages Card */}
          <div className="skills-card languages-card bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-xl">
            <div className="card-icon w-18 h-18 mx-auto mb-5 rounded-full flex items-center justify-center bg-white bg-opacity-20">
              <i className="fas fa-globe text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Languages</h3>
            <div className="language-skills flex flex-col gap-5">
              {languages.map((lang, index) => (
                <div key={index} className="language-item flex flex-col gap-3">
                  <div className="language-info flex justify-between items-center">
                    <span className="language-name font-semibold text-lg">{lang.name}</span>
                    <span className={`language-level text-xs py-2 px-4 rounded-full font-medium ${lang.levelClass}`}>
                      {lang.level}
                    </span>
                  </div>
                  <div className="language-bar h-2 bg-white bg-opacity-20 rounded-full overflow-hidden">
                    <div 
                      className="language-progress h-full bg-gradient-to-r from-white to-white to-opacity-80 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: animateProgress ? `${lang.percentage}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}