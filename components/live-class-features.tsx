import { liveClassFeatures } from "@/data/content"

export default function LiveClassFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Why Choose Our Live Classes?</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Experience the difference of interactive learning with personalized attention and real-time support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveClassFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
