import { aiTools } from "@/data/content"

export default function AIToolsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Master AI Tools for 10x Faster Development
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Learn to leverage cutting-edge AI tools that professional developers use to accelerate their workflow and
              boost productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {aiTools.map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{tool.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">🚀 AI-Powered Learning Advantage</h3>
              <p className="text-sm mb-4">
                Students who learn AI tools alongside traditional development are 3x more likely to land high-paying
                jobs and complete projects 50% faster
              </p>
              <a
                href="https://forms.gle/w7gp9m3h1vMNinfy5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Start Learning AI Tools Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
