'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const digitalMarketingSkills = [
    "HubSpot", "Salesforce", "Brevo", "Omnisend", "Meta Ads Manager", 
    "TikTok Ads", "LinkedIn Ads", "Copywriting", "Emailing & Newsletters"
  ]

  const webDesignSkills = [
    "WordPress", "Shopify", "HTML/CSS/JavaScript", "Figma", 
    "Photoshop", "Blender", "Filmmaking & Video Editing"
  ]

  const toolsAnalyticsSkills = [
    "Google Analytics", "Google Tag Manager", "Make/Integromat", 
    "SEO & Benchmarking", "Automation & AI Agents"
  ]

  const languages = [
    { name: "Arabic", level: "Native", progress: 100, levelClass: "native" },
    { name: "French", level: "C1 - Advanced", progress: 90, levelClass: "advanced" },
    { name: "English", level: "B2 - Professional", progress: 80, levelClass: "professional" },
    { name: "Spanish", level: "Basic", progress: 30, levelClass: "basic" },
    { name: "German", level: "Beginner", progress: 15, levelClass: "beginner" }
  ]

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="max-width">
        <motion.h2 
          className="title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Explore My Skills
        </motion.h2>
        <div className="skills-container">
          {/* Digital Marketing Card */}
          <motion.div 
            className="skills-card marketing-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card-icon">
              <i className="fas fa-bullhorn"></i>
            </div>
            <h3>Digital Marketing</h3>
            <div className="skills-list">
              {digitalMarketingSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Web & Design Card */}
          <motion.div 
            className="skills-card design-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Web & Design</h3>
            <div className="skills-list">
              {webDesignSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Tools & Analytics Card */}
          <motion.div 
            className="skills-card analytics-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Tools & Analytics</h3>
            <div className="skills-list">
              {toolsAnalyticsSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div 
            className="skills-card languages-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card-icon">
              <i className="fas fa-globe"></i>
            </div>
            <h3>Languages</h3>
            <div className="language-skills">
              {languages.map((language, index) => (
                <div key={index} className="language-item">
                  <div className="language-info">
                    <span className="language-name">{language.name}</span>
                    <span className={`language-level ${language.levelClass}`}>
                      {language.level}
                    </span>
                  </div>
                  <div className="language-bar">
                    <motion.div 
                      className="language-progress"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${language.progress}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}