"use client"

import type React from "react"
import { useState } from "react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Handle success (e.g., show a success message)
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" }) // Clear the form
      } else {
        // Handle error (e.g., show an error message)
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert("An error occurred. Please try again later.")
    }
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
      <div className="max-w-md mx-auto">
        {/* Contact Form */}
        {/* <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form> */}

        <div className="text-center">
          <p className="text-gray-600 mb-4">Contact form coming soon!</p>
          <p className="text-sm text-gray-500">For now, reach out via email or WhatsApp</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
