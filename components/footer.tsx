import Link from "next/link"
import { Code2, Instagram, Linkedin, Twitter, Mail, Phone, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
              <Code2 className="w-6 h-6 text-blue-400" />
              WebDev Classes
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Transform your career with live interactive web development classes. Learn from industry experts and build
              real projects.
            </p>
            <div className="flex gap-3 mb-4">
              <a
                href="https://instagram.com/webdevlive"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/pritam-kumar-0ab3431bb/"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/Pritamkr_"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-gray-400 hover:text-white transition-colors">
                  Learning Roadmap
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="text-gray-400 hover:text-white transition-colors">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Learning Path</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">HTML & CSS Basics</span>
              </li>
              <li>
                <span className="text-gray-400">JavaScript & TypeScript</span>
              </li>
              <li>
                <span className="text-gray-400">React & Tailwind CSS</span>
              </li>
              <li>
                <span className="text-gray-400">Career Preparation</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:pritamvr9@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  pritamvr9@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+917004905025" className="text-gray-400 hover:text-white transition-colors">
                  +91-7004905025
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <a
                  href="https://wa.me/917004905025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 WebDev Live Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
