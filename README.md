Pesto Tech To-Do Task Front End (pt_td)
This is the front-end application for the Pesto Tech To-Do Task. It interacts with the backend service running at http://localhost:3005.

Setup Instructions
Prerequisites
Ensure you have the following installed:

Node.js (version 14.x or higher)
npm (version 6.x or higher)
Installation
Clone the repository:

git clone https://github.com/pankajwinaim/pt_td.git
cd pt_td
Install the dependencies:

npm install
Running the Application
To start the development server, run:
npm run dev

The application will be available at http://localhost:3002 by default.

Configuration
The backend URL is set to http://localhost:3005 by default. If your backend is running on a different port or URL, you will need to update the base path in the ./model/useTaskAPI.ts file.

Changing the Backend URL
Open ./model/useTaskAPI.ts.
Locate line number 4.
Update the baseURL variable to match your backend URL:
const API_BASE_URL = 'http://your-backend-url:port';

models/: TypeScript models and interfaces.
pages/: Main pages/routes of the application.
styles/: CSS and styling.