import { Star, Users, Clock, Award, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { courses } from "@/data/content"

export default function FeaturedCourses() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive web development programs designed to make you job-ready
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course) => (
            <Card key={course.id} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {course.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant={course.badge === "Most Popular" ? "default" : "secondary"}>{course.badge}</Badge>
                </div>
              )}

              {course.aiIntegrated && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-300">
                    <Zap className="w-3 h-3 mr-1" />
                    AI Integrated
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold mb-2">{course.title}</CardTitle>
                <p className="text-gray-600 text-sm">{course.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-blue-600">{course.price}</span>
                  <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                  <Badge variant="destructive" className="text-xs">
                    {Math.round(
                      (1 -
                        Number.parseInt(course.price.replace("₹", "").replace(",", "")) /
                          Number.parseInt(course.originalPrice.replace("₹", "").replace(",", ""))) *
                        100,
                    )}
                    % OFF
                  </Badge>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-gray-900">Key Features:</h4>
                  <ul className="space-y-2">
                    {course.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <Award className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <a href="https://forms.gle/w7gp9m3h1vMNinfy5" target="_blank" rel="noopener noreferrer">
                      Enroll Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
