import { ArrowLeft, Clock, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Return & Refund Policy</h1>
          <p className="text-lg text-gray-600">
            We want you to be completely satisfied with your learning experience. Please read our policy carefully.
          </p>
        </div>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Refund Eligibility
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">✅ Full Refund Available</h3>
                <ul className="text-green-700 space-y-1">
                  <li>• Within 7 days of enrollment</li>
                  <li>• Before attending the first live class</li>
                  <li>• If you haven't accessed more than 20% of course materials</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Partial Refund (50%)</h3>
                <ul className="text-yellow-700 space-y-1">
                  <li>• Within 14 days of enrollment</li>
                  <li>• After attending 1-2 live classes</li>
                  <li>• Valid reason for discontinuation required</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">❌ No Refund</h3>
                <ul className="text-red-700 space-y-1">
                  <li>• After 14 days of enrollment</li>
                  <li>• After attending 3+ live classes</li>
                  <li>• After accessing 50%+ course materials</li>
                  <li>• For completed courses or certificates issued</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Refund Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Submit Request</h4>
                    <p className="text-gray-600">
                      Contact us via email or WhatsApp with your enrollment details and reason for refund.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Review Process</h4>
                    <p className="text-gray-600">
                      Our team will review your request within 2-3 business days and verify eligibility.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Refund Processing</h4>
                    <p className="text-gray-600">
                      Approved refunds will be processed within 5-7 business days to your original payment method.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Special Circumstances</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Medical Emergency</h4>
                <p className="text-gray-600">
                  Full refund available with valid medical documentation, regardless of time elapsed.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Technical Issues</h4>
                <p className="text-gray-600">
                  If you're unable to access classes due to our technical problems, full refund or course transfer
                  available.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Course Cancellation</h4>
                <p className="text-gray-600">
                  If we cancel a course, you'll receive a full refund or free transfer to the next batch.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact for Refunds</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email Support</h4>
                    <p className="text-gray-600">refunds@webdevclasses.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">WhatsApp Support</h4>
                    <p className="text-gray-600">+91 7004905025</p>
                    <p className="text-sm text-gray-500">Available 10 AM - 8 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <Button asChild className="w-full md:w-auto">
                  <a href="https://wa.me/917004905025" target="_blank" rel="noopener noreferrer">
                    Contact Support on WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Last updated: January 2025</p>
          <p>This policy is subject to change. Students will be notified of any updates.</p>
        </div>
      </div>
    </div>
  )
}
