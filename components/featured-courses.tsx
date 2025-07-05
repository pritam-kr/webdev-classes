import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Users, Star, Sparkles, ArrowRight } from "lucide-react"
import { courses } from "@/data/content"
import Link from "next/link"

export default function FeaturedCourses() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Learning
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Learning Path</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master modern web development with our comprehensive courses designed for beginners to advanced developers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
              {/* Popular Badge */}
              {course.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge
                    variant={course.badge === "Most Popular" ? "default" : "secondary"}
                    className={course.badge === "Most Popular" ? "bg-orange-500 hover:bg-orange-600" : ""}
                  >
                    {course.badge}
                  </Badge>
                </div>
              )}

              {/* AI Integration Badge */}
              {course.aiIntegrated && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="outline" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI Tools
                  </Badge>
                </div>
              )}

              <CardHeader className="pt-12 pb-4">
                <CardTitle className="text-xl mb-3">{course.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{course.description}</p>

                {/* Course Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-green-600">{course.price}</span>
                  <span className="text-lg text-muted-foreground line-through">{course.originalPrice}</span>
                  <Badge variant="destructive" className="text-xs">
                    {Math.round(
                      (1 -
                        Number.parseInt(course.price.replace(/[^\d]/g, "")) /
                          Number.parseInt(course.originalPrice.replace(/[^\d]/g, ""))) *
                        100,
                    )}
                    % OFF
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">What You'll Learn:</h4>
                    <ul className="space-y-1">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.curriculum.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {course.curriculum.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.curriculum.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      asChild
                    >
                      <Link href="https://forms.gle/w7gp9m3h1vMNinfy5" target="_blank">
                        Enroll Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Courses */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/courses">
              View All Courses
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
