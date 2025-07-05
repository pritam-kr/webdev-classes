import { learningPath } from "@/data/content"
import { CheckCircle } from "lucide-react"

export default function LearningPath() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Your Learning Journey</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Follow our structured 5-month program designed to take you from beginner to job-ready developer
            </p>
          </div>

          <div className="space-y-6">
            {learningPath.map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                      <span className="text-sm text-blue-600 font-medium">{phase.duration}</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Topics Covered:</h4>
                        <ul className="space-y-1">
                          {phase.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Projects:</h4>
                        <ul className="space-y-1">
                          {phase.projects.map((project, projectIndex) => (
                            <li key={projectIndex} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-3 h-3 text-purple-500 mt-0.5 flex-shrink-0" />
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
