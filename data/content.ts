export const siteConfig = {
  name: "WebDev Live Classes",
  description: "Learn web development with live interactive classes",
  url: "https://webdevlive.com",
}

export const courses = [
  {
    id: "complete-web-dev",
    title: "Complete Web Development",
    description: "Master HTML, CSS, JavaScript, React, and AI tools in 4-5 months",
    duration: "4-5 months",
    level: "Beginner to Advanced",
    price: 8000,
    originalPrice: 25000,
    features: [
      "Live interactive classes via Google Meet",
      "HTML, CSS, JavaScript fundamentals",
      "React.js and modern frameworks",
      "AI tools integration (ChatGPT, GitHub Copilot)",
      "Real-world projects and portfolio building",
      "Git, GitHub, and version control",
      "Responsive design and Tailwind CSS",
      "Job preparation and interview guidance",
      "Lifetime access to recorded sessions",
      "PDF notes and assignments",
      "Small batch size (max 15 students)",
      "1-on-1 doubt resolution sessions",
    ],
    curriculum: [
      {
        module: "Foundation",
        topics: ["HTML5 & Semantic Markup", "CSS3 & Flexbox/Grid", "Responsive Design", "Git & GitHub"],
      },
      {
        module: "JavaScript",
        topics: ["ES6+ Features", "DOM Manipulation", "Async Programming", "APIs & Fetch"],
      },
      {
        module: "React.js",
        topics: ["Components & JSX", "State & Props", "Hooks", "Context API", "React Router"],
      },
      {
        module: "AI Tools",
        topics: ["ChatGPT for Development", "GitHub Copilot", "Claude AI", "AI-Assisted Debugging"],
      },
      {
        module: "Advanced",
        topics: ["TypeScript", "Tailwind CSS", "Next.js Basics", "Deployment", "Portfolio Projects"],
      },
    ],
  },
]

export const assignments = [
  {
    id: "html-portfolio",
    title: "Personal Portfolio Website",
    description: "Create a responsive portfolio website using HTML5 and CSS3",
    difficulty: "Beginner",
    duration: "1 week",
    technologies: ["HTML5", "CSS3", "Responsive Design"],
    objectives: [
      "Learn semantic HTML structure",
      "Master CSS styling and layouts",
      "Implement responsive design principles",
      "Create a professional online presence",
    ],
    deliverables: [
      "Fully responsive portfolio website",
      "Clean and semantic HTML code",
      "Modern CSS styling with animations",
      "Mobile-first design approach",
    ],
  },
  {
    id: "css-landing-page",
    title: "Business Landing Page",
    description: "Design and develop a modern business landing page with advanced CSS",
    difficulty: "Beginner",
    duration: "1 week",
    technologies: ["HTML5", "CSS3", "Flexbox", "Grid"],
    objectives: [
      "Master CSS Grid and Flexbox",
      "Learn advanced CSS animations",
      "Implement modern design principles",
      "Create engaging user interfaces",
    ],
    deliverables: [
      "Professional landing page design",
      "Advanced CSS animations and transitions",
      "Cross-browser compatibility",
      "Performance optimized code",
    ],
  },
  {
    id: "js-todo-app",
    title: "Interactive Todo Application",
    description: "Build a feature-rich todo app with vanilla JavaScript",
    difficulty: "Intermediate",
    duration: "2 weeks",
    technologies: ["JavaScript", "DOM Manipulation", "Local Storage"],
    objectives: [
      "Master JavaScript fundamentals",
      "Learn DOM manipulation techniques",
      "Implement local storage functionality",
      "Handle user interactions and events",
    ],
    deliverables: [
      "Fully functional todo application",
      "Add, edit, delete, and mark complete features",
      "Data persistence with local storage",
      "Clean and maintainable JavaScript code",
    ],
  },
  {
    id: "js-weather-app",
    title: "Weather Dashboard",
    description: "Create a weather application using APIs and modern JavaScript",
    difficulty: "Intermediate",
    duration: "2 weeks",
    technologies: ["JavaScript", "APIs", "Async/Await", "JSON"],
    objectives: [
      "Learn API integration and consumption",
      "Master asynchronous JavaScript",
      "Handle API responses and errors",
      "Create dynamic user interfaces",
    ],
    deliverables: [
      "Real-time weather dashboard",
      "Location-based weather data",
      "Error handling and loading states",
      "Responsive and intuitive design",
    ],
  },
  {
    id: "react-dashboard",
    title: "Admin Dashboard",
    description: "Build a comprehensive admin dashboard using React.js",
    difficulty: "Advanced",
    duration: "3 weeks",
    technologies: ["React.js", "Hooks", "Context API", "Chart.js"],
    objectives: [
      "Master React components and hooks",
      "Learn state management with Context API",
      "Implement data visualization",
      "Create reusable component libraries",
    ],
    deliverables: [
      "Feature-rich admin dashboard",
      "Interactive charts and graphs",
      "User authentication simulation",
      "Responsive and accessible design",
    ],
  },
  {
    id: "react-ecommerce",
    title: "E-commerce Store",
    description: "Develop a complete e-commerce application with React",
    difficulty: "Advanced",
    duration: "4 weeks",
    technologies: ["React.js", "React Router", "Context API", "JSON Server"],
    objectives: [
      "Build complex React applications",
      "Implement routing and navigation",
      "Manage complex application state",
      "Create shopping cart functionality",
    ],
    deliverables: [
      "Full-featured e-commerce store",
      "Product catalog and search",
      "Shopping cart and checkout process",
      "User account management",
    ],
  },
  {
    id: "tailwind-ecommerce",
    title: "Modern E-commerce with Tailwind",
    description: "Create a beautiful e-commerce site using Tailwind CSS",
    difficulty: "Advanced",
    duration: "3 weeks",
    technologies: ["React.js", "Tailwind CSS", "Headless UI"],
    objectives: [
      "Master utility-first CSS framework",
      "Learn component composition with Tailwind",
      "Implement modern design systems",
      "Create responsive and accessible interfaces",
    ],
    deliverables: [
      "Pixel-perfect e-commerce design",
      "Custom Tailwind component library",
      "Dark mode implementation",
      "Advanced animations and interactions",
    ],
  },
  {
    id: "ai-code-generator",
    title: "AI Code Generator Tool",
    description: "Build an AI-powered code generation tool using modern web technologies",
    difficulty: "Advanced",
    duration: "3 weeks",
    technologies: ["React.js", "TypeScript", "AI APIs", "Tailwind CSS"],
    objectives: [
      "Integrate AI APIs into web applications",
      "Learn TypeScript for better code quality",
      "Implement real-time code generation",
      "Create professional developer tools",
    ],
    deliverables: [
      "AI-powered code generator",
      "Multiple programming language support",
      "Syntax highlighting and code formatting",
      "Export and sharing functionality",
    ],
  },
]

export const learningPath = [
  {
    phase: "Foundation (Month 1)",
    duration: "4 weeks",
    topics: [
      "HTML5 fundamentals and semantic markup",
      "CSS3 styling, layouts, and responsive design",
      "Git version control and GitHub",
      "Development environment setup",
    ],
    projects: ["Personal Portfolio Website", "Business Landing Page"],
  },
  {
    phase: "JavaScript Mastery (Month 2)",
    duration: "4 weeks",
    topics: [
      "JavaScript fundamentals and ES6+ features",
      "DOM manipulation and event handling",
      "Asynchronous programming and APIs",
      "Error handling and debugging",
    ],
    projects: ["Interactive Todo App", "Weather Dashboard"],
  },
  {
    phase: "React Development (Month 3)",
    duration: "4 weeks",
    topics: [
      "React components and JSX",
      "State management and hooks",
      "React Router and navigation",
      "Context API and prop drilling",
    ],
    projects: ["Admin Dashboard", "E-commerce Store"],
  },
  {
    phase: "Advanced Skills (Month 4)",
    duration: "4 weeks",
    topics: [
      "TypeScript integration",
      "Tailwind CSS and modern styling",
      "AI tools and development acceleration",
      "Performance optimization",
    ],
    projects: ["Modern E-commerce with Tailwind", "AI Code Generator"],
  },
  {
    phase: "Job Preparation (Month 5)",
    duration: "4 weeks",
    topics: [
      "Portfolio optimization and deployment",
      "Interview preparation and coding challenges",
      "Resume building and LinkedIn optimization",
      "Freelancing and job search strategies",
    ],
    projects: ["Capstone Project", "Portfolio Presentation"],
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Frontend Developer at TCS",
    content:
      "The live classes were incredibly interactive and helpful. Pritam sir's teaching style made complex concepts easy to understand. I landed my first job within 3 months of completing the course!",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Full Stack Developer at Infosys",
    content:
      "Best investment I made for my career. The AI tools integration was game-changing. Learning ChatGPT and GitHub Copilot alongside traditional web development gave me a huge advantage.",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "React Developer at Wipro",
    content:
      "Small batch size meant personal attention to every student. The assignments and projects helped build a strong portfolio. Highly recommend for anyone serious about web development.",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "UI/UX Developer at Accenture",
    content:
      "From zero coding knowledge to landing a developer job in 5 months. The structured curriculum and live doubt resolution sessions were extremely valuable.",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
]

export const pricingPlans = [
  {
    id: "complete-web-dev",
    name: "Complete Web Development",
    description: "Everything you need to become a professional web developer",
    price: 8000,
    originalPrice: 25000,
    duration: "4-5 months",
    features: [
      "Live interactive classes via Google Meet",
      "HTML, CSS, JavaScript, React.js",
      "AI tools training (ChatGPT, GitHub Copilot, Claude)",
      "TypeScript and Tailwind CSS",
      "Real-world projects and portfolio building",
      "Git, GitHub, and version control",
      "Job preparation and interview guidance",
      "Lifetime access to recorded sessions",
      "PDF notes and comprehensive assignments",
      "Small batch size (max 15 students)",
      "1-on-1 doubt resolution sessions",
      "Certificate of completion",
    ],
    popular: true,
    enrollLink: "https://forms.gle/w7gp9m3h1vMNinfy5",
  },
]

export const aiTools = [
  {
    name: "ChatGPT",
    description: "Learn to use ChatGPT for code generation, debugging, and problem-solving",
    icon: "🤖",
    features: ["Code generation", "Debugging assistance", "Algorithm explanation", "Best practices"],
  },
  {
    name: "GitHub Copilot",
    description: "Master AI pair programming with GitHub Copilot for faster development",
    icon: "🚀",
    features: ["Auto-completion", "Code suggestions", "Function generation", "Documentation"],
  },
  {
    name: "Claude AI",
    description: "Utilize Claude for complex problem-solving and code review",
    icon: "🧠",
    features: ["Code review", "Architecture planning", "Performance optimization", "Testing strategies"],
  },
  {
    name: "AI Development Workflow",
    description: "Learn to integrate AI tools into your daily development workflow",
    icon: "⚡",
    features: ["Productivity boost", "Error reduction", "Learning acceleration", "Professional practices"],
  },
]

export const liveClassFeatures = [
  {
    title: "Interactive Live Sessions",
    description: "Join live classes via Google Meet with real-time interaction and doubt resolution",
    icon: "🎥",
  },
  {
    title: "Small Batch Size",
    description: "Maximum 15 students per batch for personalized attention and better learning",
    icon: "👥",
  },
  {
    title: "Recorded Sessions",
    description: "Access lifetime recordings of all classes for revision and future reference",
    icon: "📹",
  },
  {
    title: "1-on-1 Support",
    description: "Personal doubt resolution sessions and career guidance from instructor",
    icon: "🎯",
  },
  {
    title: "Real Projects",
    description: "Build 8+ real-world projects to create an impressive portfolio",
    icon: "💼",
  },
  {
    title: "Job Assistance",
    description: "Resume building, interview preparation, and job placement support",
    icon: "🚀",
  },
]
