import { courses } from "@/data/content"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star } from "lucide-react"
import Link from "next/link"

export default function FeaturedCourses() {
  const course = courses[0]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Course</h2>

          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">Full Stack</Badge>
                    <Badge variant="outline">Beginner Friendly</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardHeader>

                <CardContent className="p-0">
                  <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>12 weeks</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>500+ students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      <span>4.9/5</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What you'll learn:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Build responsive websites with HTML, CSS & JavaScript</li>
                      <li>• Create dynamic apps with React and modern frameworks</li>
                      <li>• Master AI tools like ChatGPT, GitHub Copilot & Claude</li>
                      <li>• Use AI to write better code 10x faster</li>
                      <li>• Integrate APIs and work with databases</li>
                      <li>• Deploy projects and build your portfolio</li>
                    </ul>
                  </div>

                  <Button asChild className="w-full">
                    <Link href="/courses">View Full Curriculum</Link>
                  </Button>
                </CardContent>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Start Building Today</h3>
                  <p className="text-muted-foreground">Join hundreds of students already learning</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
