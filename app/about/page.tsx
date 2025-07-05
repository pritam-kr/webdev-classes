import { aboutContent } from "@/data/content"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Clock, ExternalLink, Github, Linkedin, Twitter } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">{aboutContent.title}</h1>

        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">{aboutContent.description}</p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-blue-900">Our Mission</h3>
            <p className="text-gray-700">{aboutContent.mission}</p>
          </div>
        </div>

        {/* Instructor Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Your Instructor</h2>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{aboutContent.instructor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">Software Developer & Instructor</p>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{aboutContent.instructor.bio}</p>

                  <div className="flex justify-center gap-4">
                    <a
                      href={aboutContent.instructor.social.portfolio}
                      className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 text-blue-600" />
                    </a>
                    <a
                      href={aboutContent.instructor.social.github}
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 text-gray-600" />
                    </a>
                    <a
                      href={aboutContent.instructor.social.linkedin}
                      className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </a>
                    <a
                      href={aboutContent.instructor.social.twitter}
                      className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5 text-blue-600" />
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold mb-4 text-center">Professional Experience</h4>

                  {aboutContent.instructor.experience.map((exp, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h5 className="text-lg font-semibold text-gray-900">{exp.position}</h5>
                            <p className="text-blue-600 font-medium">{exp.company}</p>
                          </div>
                          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {exp.duration}
                          </span>
                        </div>

                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Live Interactive Classes</h3>
              <p className="text-sm text-gray-600">Real-time learning with direct instructor interaction</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Project-Based Learning</h3>
              <p className="text-sm text-gray-600">Build real projects while learning concepts</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Industry Ready Skills</h3>
              <p className="text-sm text-gray-600">Learn tools and practices used in real companies</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">4-5 Month Program</h3>
              <p className="text-sm text-gray-600">Comprehensive curriculum with assignments and projects</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
