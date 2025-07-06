import { Card, CardContent } from "@/components/ui/card"
import { Video, MessageCircle, Code, Users, Calendar, Award } from "lucide-react"

export default function LiveClassFeatures() {
  const features = [
    {
      icon: Video,
      title: "Live Interactive Sessions",
      description: "Real-time classes via Google Meet with screen sharing and live coding demonstrations",
      color: "blue",
    },
    {
      icon: MessageCircle,
      title: "Instant Doubt Resolution",
      description: "Ask questions during class and get immediate answers from experienced instructors",
      color: "green",
    },
    {
      icon: Code,
      title: "AI-Powered Development",
      description: "Learn to use ChatGPT, GitHub Copilot, and Claude to write better code faster",
      color: "purple",
    },
    {
      icon: Users,
      title: "Peer Learning",
      description: "Learn with fellow students, share ideas, and collaborate on projects together",
      color: "orange",
    },
    {
      icon: Calendar,
      title: "Structured Schedule",
      description: "Regular classes with a well-planned curriculum that fits your busy schedule",
      color: "red",
    },
    {
      icon: Award,
      title: "Career Guidance",
      description: "Get mentorship on resume building, interview preparation, and job search strategies",
      color: "indigo",
    },
  ]

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    red: "bg-red-100 text-red-600",
    indigo: "bg-indigo-100 text-indigo-600",
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-3">Why Choose Live Classes?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the power of real-time learning with personalized attention and immediate feedback
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses[feature.color as keyof typeof colorClasses]}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-xs">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}