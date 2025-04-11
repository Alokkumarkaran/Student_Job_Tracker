🎯 Student Job Tracker (MERN Stack)
A full-stack job application tracker that helps users add, view, update, delete, and filter job applications. This project uses the MERN stack — MongoDB, Express.js, React.js, and Node.js — and is deployed with Render (backend) and Vercel (frontend).

🚀 Live Links
🔗 Frontend: https://student-job-tracker-alok-kumars-projects-66159410.vercel.app

🔗 Backend: https://student-job-tracker-0u2i.onrender.com

📌 Features
Add a new job application

View all applications with full details

Filter by status, date, or company

Update existing applications

Delete applications

Responsive design for desktop & mobile

Environment variable-based configuration

🧰 Tech Stack
Frontend:
React.js (Create React App)

Axios for API calls

Deployed on Vercel

Backend:
Node.js
Express.js

MongoDB Atlas (Cloud DB)

Deployed on Render

🛠️ Folder Structure
Student_Job_Tracker/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Job.js
│   ├── routes/
│   │   └── jobRoutes.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
🧪 Setup Instructions
1. Clone the Repository
git clone https://github.com/Alokkumarkaran/Student_Job_Tracker.git
cd Student_Job_Tracker
2. Backend Setup
cd backend
npm install
Create a .env file in the backend folder:
MONGO_URI=your_mongo_uri_here
PORT=5000
CORS_ORIGIN=https://your-frontend.vercel.app
Run the server:
node server.js
3. Frontend Setup
cd frontend
npm install
Create a .env file in the frontend folder:
REACT_APP_API_BASE_URL=https://your-backend-url.onrender.com
Run the frontend:
npm start
🌍 Deployment Steps
Backend (Render)
Go to Render

Create a new Web Service

Choose GitHub repo and select backend as Root Directory

Set Build Command: npm install

Set Start Command: node server.js

Add Environment Variables:

MONGO_URI

PORT

CORS_ORIGIN

Frontend (Vercel)
Go to Vercel

Import project from GitHub

Set Root Directory to frontend

Set Environment Variable:

REACT_APP_API_BASE_URL=https://your-backend.onrender.com

Vercel auto-builds and deploys

🧠 Bonus: Algorithms Used
Sort job applications by date

Detect duplicate job entries

Status frequency counter

👨‍💻 Author
Alok Kumar
💼 Software Developer & Data Analyst
📧 alokkumarkaranraj@gmail.com 
📺 @alok_path

