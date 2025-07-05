import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MessageCircle } from "lucide-react"

const returnPolicy = {
  title: "Return & Refund Policy",
  lastUpdated: "January 2025",
  sections: [
    {
      title: "Refund Eligibility",
      content: [
        "Full refund available within 7 days of enrollment if no live classes have been attended",
        "50% refund available within 14 days if less than 25% of the course has been completed",
        "No refund after 30 days or if more than 50% of the course content has been accessed",
        "Medical emergencies and exceptional circumstances will be considered on a case-by-case basis",
      ],
    },
    {
      title: "Refund Process",
      content: [
        "Submit refund request via email or WhatsApp with your enrollment details",
        "Refund requests are processed within 5-7 business days",
        "Refunds are issued to the original payment method",
        "Processing fees (if any) may be deducted from the refund amount",
      ],
    },
    {
      title: "Course Transfer Policy",
      content: [
        "Students can transfer to the next batch within 30 days of enrollment",
        "One-time batch transfer is allowed without additional charges",
        "Transfer requests must be made at least 7 days before the new batch starts",
        "Subject to availability in the requested batch",
      ],
    },
    {
      title: "What's Not Refundable",
      content: [
        "Course materials and PDF notes once downloaded",
        "Completed assignments and project feedback",
        "One-on-one mentoring sessions already conducted",
        "Certificate fees (if applicable)",
      ],
    },
  ],
  contact: {
    email: "pritamvr9@gmail.com",
    phone: "+91-7004905025",
    whatsapp: "https://wa.me/917004905025",
  },
}

export default function ReturnPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{returnPolicy.title}</h1>
          <p className="text-gray-600">Last updated: {returnPolicy.lastUpdated}</p>
        </div>

        <div className="space-y-8">
          {returnPolicy.sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle className="text-xl text-center">Need Help with Refunds?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-gray-600 mb-6">
                  Contact us through any of the following methods for refund requests or questions:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <a
                      href={`mailto:${returnPolicy.contact.email}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {returnPolicy.contact.email}
                    </a>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <a
                      href={`tel:${returnPolicy.contact.phone}`}
                      className="text-green-600 hover:text-green-800 font-medium"
                    >
                      {returnPolicy.contact.phone}
                    </a>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <a
                      href={returnPolicy.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 font-medium"
                    >
                      WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
