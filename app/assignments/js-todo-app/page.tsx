import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Calendar, Zap, CheckSquare, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function JsTodoAppAssignment() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/assignments" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Assignments
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-yellow-100 text-yellow-800">Intermediate</Badge>
            <Badge variant="secondary">JavaScript</Badge>
            <Badge className="bg-yellow-100 text-yellow-800">5-7 hours</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">Interactive Todo Application</h1>
          <p className="text-xl text-gray-600">
            Build a fully functional todo application with local storage using vanilla JavaScript and modern ES6+
            features.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                5-7 hours
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
              Create a feature-rich todo application that demonstrates your understanding of DOM manipulation, event
              handling, and local storage.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Assignment Requirements
          </h2>

          <h3 className="text-xl font-semibold mb-3">📋 Core Features</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Add Todos:</strong> Input field to add new todo items with validation
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Display Todos:</strong> Show all todos in a clean, organized list
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Mark Complete:</strong> Click to toggle todo completion status
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Edit Todos:</strong> Double-click or edit button to modify existing todos
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Delete Todos:</strong> Remove individual todos with confirmation
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Filter Todos:</strong> Show all, active, or completed todos
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong>Local Storage:</strong> Persist todos between browser sessions
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">⚡ JavaScript Requirements</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use ES6+ features (arrow functions, destructuring, template literals)</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement proper event delegation for dynamic elements</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use localStorage API for data persistence</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Implement proper error handling and input validation</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Use array methods (map, filter, reduce) for data manipulation</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Organize code with modules or classes for better structure</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🎨 UI/UX Features</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Responsive design that works on all devices</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Smooth animations for adding/removing todos</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Visual feedback for user interactions (hover states, loading)</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Clean, modern design with consistent styling</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-green-500 mt-0.5" />
              <div>Keyboard shortcuts (Enter to add, Escape to cancel edit)</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">💡 Bonus Features</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Add due dates and priority levels to todos</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Implement categories or tags for organization</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Search functionality to find specific todos</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Dark mode toggle with theme persistence</div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>Export/import todos as JSON</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">📁 File Structure</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6">
            <pre className="text-sm">{`todo-app/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── todo.js
│   └── storage.js
├── images/
│   └── icons/
└── README.md`}</pre>
          </div>

          <h3 className="text-xl font-semibold mb-3">🔧 Implementation Guide</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Suggested Approach:</h4>
            <ol className="text-gray-700 space-y-1 list-decimal list-inside">
              <li>Create the HTML structure with semantic elements</li>
              <li>Style the interface with CSS (mobile-first approach)</li>
              <li>Implement basic todo creation and display</li>
              <li>Add completion toggle and delete functionality</li>
              <li>Implement edit functionality</li>
              <li>Add filtering (all, active, completed)</li>
              <li>Integrate localStorage for persistence</li>
              <li>Add animations and polish the UI</li>
              <li>Test thoroughly and add error handling</li>
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
                <strong>GitHub Repository:</strong> Clean, well-commented code
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>Live Demo:</strong> Deploy on GitHub Pages or Netlify
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong>Documentation:</strong> Explain your code structure and decisions
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">🛠️ Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">JavaScript ES6+</Badge>
            <Badge variant="secondary">DOM Manipulation</Badge>
            <Badge variant="secondary">Local Storage</Badge>
            <Badge variant="secondary">CSS3</Badge>
            <Badge variant="secondary">HTML5</Badge>
            <Badge variant="secondary">Event Handling</Badge>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 className="font-semibold text-yellow-800 mb-2">💡 Learning Objectives</h4>
            <ul className="text-yellow-700 space-y-1">
              <li>• Master DOM manipulation and event handling</li>
              <li>• Practice modern JavaScript ES6+ features</li>
              <li>• Implement data persistence with localStorage</li>
              <li>• Build interactive user interfaces</li>
              <li>• Learn proper code organization and structure</li>
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
