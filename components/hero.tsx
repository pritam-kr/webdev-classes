import { ArrowRight, MessageCircle, Users, Clock, Award } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn Web Development with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Live Classes
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master HTML, CSS, JavaScript, React, TypeScript, and Tailwind CSS through interactive live sessions on
              Google Meet. Learn to use AI tools like ChatGPT, GitHub Copilot, and Claude to accelerate your
              development. Build real projects and become job-ready in 4-5 months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/w7gp9m3h1vMNinfy5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/917004905025"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Interactive Classes</h3>
              <p className="text-gray-600">
                Learn directly from instructor via Google Meet with real-time doubt resolution
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4-5 Month Program</h3>
              <p className="text-gray-600">Comprehensive curriculum with assignments, projects, and PDF notes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Job-Ready Skills</h3>
              <p className="text-gray-600">
                Build portfolio projects and learn Git, GitHub, and professional development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
