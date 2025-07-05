import { pricingPlans } from "@/data/content"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Video, Users, Clock, Award } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold mb-3">Simple, Transparent Pricing</h1>
          <p className="text-lg text-gray-600">
            Complete web development training with live classes and personal mentorship
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`border-2 ${plan.popular ? "border-blue-200 relative" : "border-gray-200"}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-blue-600">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-2">{plan.price}</div>
                {plan.originalPrice && <div className="text-lg text-gray-500 line-through">{plan.originalPrice}</div>}
                <p className="text-sm text-gray-600">Complete Course Package</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={plan.enrollLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                </a>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-gray-700">What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Video className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Live Interactive Classes</h3>
                    <p className="text-xs text-gray-600">Real-time learning via Google Meet with Q&A sessions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Small Batch Size</h3>
                    <p className="text-xs text-gray-600">Limited students for personalized attention</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Flexible Timing</h3>
                    <p className="text-xs text-gray-600">Evening classes suitable for working professionals</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Career Support</h3>
                    <p className="text-xs text-gray-600">Resume building, interview prep, and job referrals</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h2>
              <p className="text-gray-600 mb-6">
                Join hundreds of students who have successfully transitioned to web development careers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://forms.gle/w7gp9m3h1vMNinfy5" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Start Your Journey
                  </Button>
                </a>
                <a href="https://wa.me/917004905025" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline">
                    Schedule a Call
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
