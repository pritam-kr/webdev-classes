"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your newsletter service
    console.log("Newsletter subscription:", email)
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 text-blue-200 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Stay Updated with Web Development Tips</h2>
          <p className="text-base text-blue-100 mb-6">
            Get weekly tips, tutorials, and industry insights delivered to your inbox. Join 1000+ developers already
            subscribed.
          </p>

          {isSubscribed ? (
            <div className="bg-green-500 text-white p-4 rounded-lg">
              <p className="font-semibold">Thank you for subscribing!</p>
              <p className="text-sm">You'll receive our next newsletter soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white"
              />
              <Button type="submit" className="bg-white text-blue-600 hover:bg-gray-100 px-6">
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-xs text-blue-200 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
        </div>
      </div>
    </section>
  )
}
