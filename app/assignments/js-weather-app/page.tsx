import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Calendar, Zap, CheckSquare, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function JsWeatherAppAssignment() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/assignments" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Assignments
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-red-100 text-red-800">Advanced</Badge>
            <Badge variant="secondary">JavaScript</Badge>
            <Badge className="bg-yellow-100 text-yellow-800">6-8 hours</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">Weather Application</h1>
          <p className="text-xl text-gray-600">
            Build a comprehensive weather app that fetches data from a real API and displays current weather conditions,
            forecasts, and interactive features.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                6-8 hours
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                Individual Project
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />1 week deadline
              </div>
            </div>
            <p className="text-gray-700 mb-0">
              Create a feature-rich weather application that demonstrates your mastery of API integration, asynchronous
              JavaScript, and modern UI design.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Assignment Requirements
          </h2>

          <h3 className="text-xl font-semibold mb-3">🌤️ Core Features</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Current Weather:</strong> Display current temperature, conditions, humidity, wind speed
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Location Search:</strong> Search for weather by city name with autocomplete
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Geolocation:</strong> Get user's current location weather automatically
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>5-Day Forecast:</strong> Display extended weather forecast with daily details
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Hourly Forecast:</strong> Show 24-hour weather timeline
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Weather Icons:</strong> Dynamic weather icons based on conditions
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Favorites:</strong> Save favorite locations for quick access
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🔧 Technical Requirements</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use OpenWeatherMap API or similar weather service</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement async/await for API calls</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Handle API errors and loading states gracefully</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use localStorage for favorites and preferences</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement debouncing for search functionality</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use modern ES6+ features throughout</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🤖 AI Tools Integration</h3>
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-purple-800 mb-2">Leverage AI for Development:</h4>
            <div className="space-y-2 text-purple-700">
              <div className="flex items-start gap-3">
                <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5" />
                <div>Use ChatGPT to generate API integration code</div>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5" />
                <div>Ask Claude to help with error handling patterns</div>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5" />
                <div>Generate CSS animations for weather transitions</div>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5" />
                <div>Create responsive design with AI assistance</div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🎨 UI/UX Features</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Dynamic background based on weather conditions</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Smooth animations for weather transitions</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Loading skeletons while fetching data</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Responsive design for all screen sizes</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Dark/light theme toggle</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">💡 Bonus Features</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Weather alerts and notifications</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Weather maps integration</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Historical weather data charts</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Weather comparison between cities</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Voice search functionality</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">📁 File Structure</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6">
            <pre className="text-sm">{`weather-app/
├── index.html
├── css/
│   ├── style.css
│   └── animations.css
├── js/
│   ├── app.js
│   ├── api.js
│   ├── ui.js
│   └── storage.js
├── images/
│   └── weather-icons/
├── data/
│   └── cities.json
└── README.md`}</pre>
          </div>

          <h3 className="text-xl font-semibold mb-3">🌐 API Setup Guide</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Getting Started with OpenWeatherMap:</h4>
            <ol className="text-gray-700 space-y-1 list-decimal list-inside">
              <li>Sign up at openweathermap.org for free API key</li>
              <li>Read API documentation for current weather and forecast</li>
              <li>Test API endpoints with Postman or browser</li>
              <li>Implement error handling for API failures</li>
              <li>Add rate limiting to prevent API abuse</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold mb-3">✅ Submission Guidelines</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>Deadline:</strong> 1 week from assignment date
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>GitHub Repository:</strong> Include setup instructions and API key guide
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>Live Demo:</strong> Deploy with environment variables for API key
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>Documentation:</strong> Explain API integration and feature implementation
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🛠️ Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">JavaScript ES6+</Badge>
            <Badge variant="secondary">Fetch API</Badge>
            <Badge variant="secondary">Async/Await</Badge>
            <Badge variant="secondary">Geolocation API</Badge>
            <Badge variant="secondary">Local Storage</Badge>
            <Badge variant="secondary">CSS3</Badge>
            <Badge variant="secondary">AI Tools</Badge>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Learning Objectives</h4>
            <ul className="text-blue-700 space-y-1">
              <li>• Master API integration and asynchronous programming</li>
              <li>• Handle real-world data and error scenarios</li>
              <li>• Build complex user interfaces with JavaScript</li>
              <li>• Implement geolocation and browser APIs</li>
              <li>• Create production-ready applications</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <a href="https://forms.gle/w7gp9m3h1vMNinfy5" target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 hover:bg-blue-700">Need Help? Enroll in Live Classes</Button>
          </a>
          <a href="https://wa.me/917004905025" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Chat on WhatsApp</Button>
          </a>
        </div>
      </div>
    </div>
  )
}
