import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Calendar, Globe, CheckSquare, ArrowLeft, Star } from "lucide-react"
import Link from "next/link"

export default function ReactDashboardAssignment() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/assignments" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Assignments
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-blue-600 text-white">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
            <Badge className="bg-yellow-100 text-yellow-800">Intermediate</Badge>
            <Badge variant="secondary">ReactJS</Badge>
            <Badge className="bg-blue-100 text-blue-800">4-6 hours</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">ReactJS User Dashboard</h1>
          <p className="text-xl text-gray-600">
            Create a modern, responsive dashboard UI using ReactJS that visually represents a user profile based on
            structured JSON data.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                4-6 hours
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
              Build a comprehensive user dashboard that displays various sections of user information in an organized,
              visually appealing manner using React components and modern design patterns.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6" />
            Assignment Requirements
          </h2>

          <h3 className="text-xl font-semibold mb-3">📦 Provided JSON Data</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-sm">{`const user = {
  id: "U12345",
  name: { first: "Pritam", middle: "Kumar", last: "Soni" },
  username: "pritam_dev",
  email: "pritam@example.com",
  role: "admin",
  isActive: true,
  lastLogin: "2025-04-01T10:30:00Z",
  address: {
    street: "123, Dev Street",
    city: "BakarKagaon",
    state: "Jharkhand",
    country: "India",
    postalCode: 825311,
  },
  contacts: [
    { type: "phone", value: "+91-9876543210" },
    { type: "email", value: "pritam.dev@example.com" },
  ],
  preferences: {
    theme: "dark",
    language: "en-US",
    notifications: { email: true, sms: false, push: true },
  },
  socialLinks: {
    twitter: "@unfilteredblog",
    instagram: "un.filteredblog",
    github: "pritam-dev",
    website: "https://pritam.dev",
  },
  skills: [
    { name: "JavaScript", level: "advanced" },
    { name: "ReactJS", level: "advanced" },
    { name: "TypeScript", level: "intermediate" },
    { name: "MongoDB", level: "intermediate" },
    { name: "Docker", level: "beginner" },
  ],
  projects: [
    {
      title: "E-Commerce App",
      description: "Full-stack app with ReactJS and Node.js",
      stack: ["ReactJS", "Node.js", "MongoDB", "Express"],
      repo: "https://github.com/pritam-dev/ecommerce",
    },
    {
      title: "Drawing App",
      description: "Excalidraw-like diagram tool",
      stack: ["ReactJS", "Canvas API", "Redux"],
      repo: "https://github.com/pritam-dev/drawing-app",
    },
  ],
  transactions: [
    {
      transactionId: "T001",
      amount: 99.99,
      currency: "USD",
      status: "completed",
      date: "2025-03-25T14:15:00Z",
    },
    {
      transactionId: "T002",
      amount: 49.99,
      currency: "USD",
      status: "pending",
      date: "2025-03-30T09:00:00Z",
    },
  ],
  friends: [
    { name: "Akash Soni", username: "akash_dev" },
    { name: "Arun Kumar", username: "arun_code" },
  ],
  company: {
    name: "Seller Mate AI",
    position: "Lead Frontend Developer",
    joinDate: "2024-06-15",
    projects: ["AI-powered analytics", "Dashboard development"],
  },
};`}</pre>
          </div>

          <h3 className="text-xl font-semibold mb-3">🧩 Required Components</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>User Info Card:</strong> Full name, username, role badge, email, account status, and last login
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Address Card:</strong> Properly formatted address details with icons
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Contacts Section:</strong> Phone number and secondary email with click-to-action
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Preferences Panel:</strong> Theme, language, and notification toggles
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Social Links:</strong> Clickable icons for GitHub, Instagram, Twitter, and Website
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Skills Section:</strong> Skills with level badges and progress indicators
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Projects:</strong> Project cards with title, description, tech stack, and GitHub links
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Transactions Table:</strong> Transaction ID, amount, currency, status, and formatted date
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Friends List:</strong> Friend cards with names and usernames
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Company Info:</strong> Company name, position, join date, and project list
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">⚛️ React Requirements</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use functional components with React hooks</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement proper component composition and reusability</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use useState for managing component state</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement useEffect for side effects (if needed)</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use props for data passing between components</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement conditional rendering for different states</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🎨 Design Guidelines</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use dark mode styling as primary theme</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement responsive design (mobile, tablet, desktop)</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use icons and visual badges throughout the interface</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Maintain clear hierarchy with cards, grids, and proper spacing</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Add smooth transitions and hover effects</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">💡 Bonus Features</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Add search/filter functionality for transactions or projects</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Implement dark/light theme toggle with state persistence</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Add collapsible/expandable sections</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Implement loading states and skeleton screens</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">📁 File Structure</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6">
            <pre className="text-sm">{`react-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── UserInfo.js
│   │   ├── AddressCard.js
│   │   ├── ContactsSection.js
│   │   ├── SkillsSection.js
│   │   ├── ProjectsSection.js
│   │   ├── TransactionsTable.js
│   │   └── FriendsList.js
│   ├── data/
│   │   └── userData.js
│   ├── styles/
│   │   └── Dashboard.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md`}</pre>
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
                <strong>GitHub Repository:</strong> Clean, well-structured React code
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>Live Demo:</strong> Deploy on Vercel, Netlify, or GitHub Pages
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>Documentation:</strong> Component structure and design decisions
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🛠️ Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">ReactJS</Badge>
            <Badge variant="secondary">JavaScript ES6+</Badge>
            <Badge variant="secondary">CSS3</Badge>
            <Badge variant="secondary">JSON</Badge>
            <Badge variant="secondary">Responsive Design</Badge>
            <Badge variant="secondary">React Hooks</Badge>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Learning Objectives</h4>
            <ul className="text-blue-700 space-y-1">
              <li>• Master React component architecture and composition</li>
              <li>• Practice working with complex JSON data structures</li>
              <li>• Implement responsive design in React applications</li>
              <li>• Learn proper state management with React hooks</li>
              <li>• Build professional dashboard interfaces</li>
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
