Loan Manager

This project is a Loan Manager application where users can submit loan applications through a form, and the backend processes and stores their data in a database. A dashboard dynamically displays statistics about the loan applications such as total applications, average loan amount, application success rate, etc.

Tech Stack
Backend: Node.js, TypeScript, Express.js, MongoDB

Frontend: React.js, TypeScript

Database: MongoDB (or other preferred database)

API: RESTful API (for form submissions and statistics retrieval)

Project Setup

Setup Instructions
Backend Setup
Go to the server/ directory:

bash
Copy
Edit
cd server
Install dependencies:

bash
Copy
Edit
npm install
Set up the MongoDB connection:

Create a .env file with:

ini
Copy
Edit
MONGO_URI=mongodb://localhost:27017/loanApp
PORT=5000
Start the backend server:

bash
Copy
Edit
npx ts-node-dev src/index.ts
Frontend Setup
Go to the client/ directory:

bash
Copy
Edit
cd client
Install dependencies:

bash
Copy
Edit
npm install
Start the React app:

bash
Copy
Edit
npm start
API Endpoints
POST /api/loans: Submit loan application.

GET /api/loans/stats: Get loan statistics for the dashboard.

Features
Loan Application Form: Submit user details and loan info.

Dashboard: Displays real-time statistics like total applications, average loan amount, etc.

Deployment
Backend: Deploy on platforms like Heroku or AWS.

Frontend: Deploy on Vercel or Netlify.

How to Run Locally
Set up MongoDB.

Run the backend and frontend as per the instructions above.

