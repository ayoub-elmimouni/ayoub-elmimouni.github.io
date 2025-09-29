'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="contact py-24" id="contact">
      <div className="max-width">
        <h2 className="title relative text-center text-4xl font-medium mb-16 pb-5 font-ubuntu">
          Contact me
        </h2>
        <div className="contact-content flex flex-wrap items-center justify-between">
          <div className="column w-1/2 pr-8">
            <div className="text text-xl font-semibold mb-3">Get in Touch</div>
            <p className="text-justify mb-4">
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind, 
              need marketing consultation, or just want to connect, feel free to reach out!
            </p>
            <div className="icons my-3">
              <div className="row flex h-16 items-center mb-4">
                <i className="fas fa-user text-2xl text-crimson"></i>
                <div className="info ml-8">
                  <div className="head font-medium">Name</div>
                  <div className="sub-title text-gray-600">El Mimouni Ayoub</div>
                </div>
              </div>
              <div className="row flex h-16 items-center mb-4">
                <i className="fas fa-map-marker-alt text-2xl text-crimson"></i>
                <div className="info ml-8">
                  <div className="head font-medium">Address</div>
                  <div className="sub-title text-gray-600">Morocco</div>
                </div>
              </div>
              <div className="row flex h-16 items-center mb-4">
                <i className="fas fa-envelope text-2xl text-crimson"></i>
                <div className="info ml-8">
                  <div className="head font-medium">Email</div>
                  <div className="sub-title text-gray-600">ayoub@example.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column w-1/2">
            <div className="text text-xl font-semibold mb-3">Message me</div>
            <form onSubmit={handleSubmit}>
              <div className="fields flex mb-4">
                <div className="field name w-1/2 mr-3">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="h-11 w-full border border-gray-300 rounded-md outline-none px-4 text-lg font-poppins transition-all duration-300 focus:border-gray-500"
                  />
                </div>
                <div className="field email w-1/2">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="h-11 w-full border border-gray-300 rounded-md outline-none px-4 text-lg font-poppins transition-all duration-300 focus:border-gray-500"
                  />
                </div>
              </div>
              <div className="field mb-4">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  className="h-11 w-full border border-gray-300 rounded-md outline-none px-4 text-lg font-poppins transition-all duration-300 focus:border-gray-500"
                />
              </div>
              <div className="field textarea mb-4">
                <textarea 
                  name="message"
                  cols={30} 
                  rows={10} 
                  placeholder="Message.." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="h-20 w-full border border-gray-300 rounded-md outline-none px-4 pt-3 text-lg font-poppins transition-all duration-300 focus:border-gray-500 resize-none"
                ></textarea>
              </div>
              <div className="button-area flex items-center">
                <button type="submit" className="text-white block w-40 h-11 outline-none text-lg font-medium rounded-md cursor-pointer bg-crimson border-2 border-crimson transition-all duration-300 hover:text-crimson hover:bg-transparent">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}