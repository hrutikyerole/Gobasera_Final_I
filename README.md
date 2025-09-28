project:
  name: "Gobasera Final I"
  description: "A web application to manage and display announcements. Users can create, view, like/dislike, comment on, and close announcements. Designed to be interactive, simple, and user-friendly."

  live_demo: "https://gobasera-final-7ej9.vercel.app"
  
features:
  frontend:
    - "View all announcements"
    - "Add new announcements with title and optional description"
    - "Like and dislike announcements"
    - "Add comments to announcements"
    - "Close announcements to mark as completed"
    - "Responsive design for desktop and mobile"
  backend:
    - "CRUD operations for announcements"
    - "Handle likes, dislikes, and comments"
    - "RESTful API for frontend consumption"

technologies:
  frontend: ["React", "JavaScript (ES6+)", "CSS"]
  backend: ["NestJS", "TypeScript", "Express.js", "Node.js"]
  deployment: ["Vercel (frontend)", "Render (backend)"]

project_structure:
  - "Gobasera_Final_I/"
  - "├─ frontend/       # React application"
  - "├─ backend/        # NestJS backend API"
  - "├─ README.md       # Project documentation"

getting_started:
  frontend_only:
    - "Clone the repository: git clone https://github.com/hrutikyerole/Gobasera_Final_I.git"
    - "Navigate to frontend: cd Gobasera_Final_I/frontend"
    - "Install dependencies: npm install"
    - "Start the app: npm start"
    - "Open http://localhost:3000 in your browser"
  full_stack:
    backend_setup:
      - "Navigate to backend: cd Gobasera_Final_I/backend"
      - "Install dependencies: npm install"
      - "Start the backend server: npm run start:dev"
    frontend_setup:
      - "Update API URL in frontend: const API_URL = 'http://localhost:3001/announcements';"
      - "Navigate to frontend: cd ../frontend"
      - "Start the frontend: npm start"

contributing:
  steps:
    - "Fork the repository"
    - "Create a feature branch: git checkout -b feature-name"
    - "Commit your changes: git commit -m 'Add some feature'"
    - "Push to branch: git push origin feature-name"
    - "Open a pull request"

license:
  type: "MIT License"
  url: "https://opensource.org/licenses/MIT"

screenshots:
  - "https://raw.githubusercontent.com/hrutikyerole/Gobasera_Final_I/main/frontend/screenshot.png"
  - "Replace with actual images if available"
