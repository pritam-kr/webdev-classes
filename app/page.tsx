import Hero from "@/components/hero"
import LiveClassFeatures from "@/components/live-class-features"
import AIToolsSection from "@/components/ai-tools-section"
import LearningPath from "@/components/learning-path"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LiveClassFeatures />
      <AIToolsSection />
      <LearningPath />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
