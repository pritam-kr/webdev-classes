import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"

export default function Newsletter() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-green-600 text-white">
            <CardContent className="p-8">
              <MessageCircle className="w-16 h-16 mx-auto mb-4 text-green-100" />
              <h2 className="text-2xl font-bold mb-4">Have Questions? Let's Chat!</h2>
              <p className="text-green-100 mb-6">
                Get instant answers about our live classes, curriculum, or enrollment process. Chat with us directly on
                WhatsApp for quick support.
              </p>
              <a href="https://wa.me/917004905025" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
