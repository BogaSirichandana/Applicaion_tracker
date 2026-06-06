# Application Tracker

A MERN-based Application Tracker that helps users manage and track job applications efficiently.

## Features

- User Registration and Login
- Secure Authentication
- Add Job Applications
- View All Applications
- Update Application Status
- Delete Applications
- Dashboard for Tracking Progress

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

```
Application-Tracker/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── dashboard.html
│   ├── style.css
│   ├── login.js
│   └── dashboard.js
│
└── backend/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── server.js
    ├── package.json
    └── .env
```

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd Application-Tracker
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the server:

```bash
npm start
```

### Frontend Setup

Open the `frontend` folder and run using Live Server in VS Code.

## API Endpoints

### Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`

### Applications

- GET `/api/applications`
- POST `/api/applications`
- PUT `/api/applications/:id`
- DELETE `/api/applications/:id`

## Future Enhancements

- Email Notifications
- Resume Upload
- Interview Scheduling
- Analytics Dashboard
- Application Search and Filters

## Author

**Boga Sirichandana**  
SR University
