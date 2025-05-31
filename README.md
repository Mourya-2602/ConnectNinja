# ConnectNinja

ConnectNinja is a full-stack web application for a digital marketing agency, built with React, Node.js, Express, and MongoDB. It provides a modern, responsive website for showcasing services, team, and enables users to contact the agency directly.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Frontend](#frontend)
- [Backend](#backend)
- [API Endpoints](#api-endpoints)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [License](#license)

---

## Features

- **Modern Responsive UI**: Built with React and Bootstrap for a seamless experience on all devices.
- **Service Showcase**: Interactive cards for all major digital marketing services.
- **Team Section**: Meet the Ninja Crew with bios and LinkedIn links.
- **Contact Form**: Users can send messages directly to the agency (with validation).
- **Footer & Social Links**: Easy access to all social media and contact info.
- **Backend API**: Node.js/Express server with MongoDB for message storage.

---

## Project Structure

```
ConnectNinja/
│
├── backend/                # Node.js/Express backend
│   ├── models/             # Mongoose models (Message)
│   ├── routes/             # API routes (messages)
│   ├── server.js           # Main server file
│   └── package.json        # Backend dependencies
│
├── frontend/               # React frontend
│   ├── public/             # Static files and index.html
│   ├── src/
│   │   ├── components/     # React components (Hero, Services, About, Contact, etc.)
│   │   ├── styles/         # CSS files for each component
│   │   ├── assets/         # Images and fonts
│   │   ├── App.js          # Main app and routing
│   │   └── index.js        # React entry point
│   └── package.json        # Frontend dependencies
│
├── README.md
└── LICENSE
```

---

## Frontend

- **Framework**: React 19, React-Bootstrap, React Router
- **Styling**: Custom CSS modules, Bootstrap 5, FontAwesome
- **Key Components**:
  - `Hero`: Landing section with CTA
  - `Services`: List of digital marketing services
  - `About`: Team bios and company intro
  - `Methodology`: Steps of working with ConnectNinja
  - `Contact`: Contact form with validation
  - `Connect`: Footer with contact info and social links
  - `Navbar`: Sticky navigation bar

---

## Backend

- **Framework**: Node.js, ExpressJS
- **Database**: MongoDB (Atlas)
- **Key Features**:
  - Message model with validation (name, email, subject, message)
  - API endpoint to receive and store contact form submissions
  - CORS and JSON middleware

---

## API Endpoints

### POST `/api/messages`

- **Description**: Submit a contact message
- **Request Body**:
  ```json
  {
    "name": "Your Name",
    "email": "your@email.com",
    "subject": "Subject",
    "message": "Your message here"
  }
  ```
- **Response**:
  - `201 Created` on success
  - `400 Bad Request` on validation error

---

## Setup & Installation

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas account or local MongoDB

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ConnectNinja.git
cd ConnectNinja
```

### 2. Setup Backend

```bash
cd backend
npm install
# Create a .env file with your MongoDB URI:
# MONGODB_URI=your_mongodb_connection_string
npm run dev
```

### 3. Setup Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

The frontend will run on [http://localhost:3000](http://localhost:3000) and the backend on [http://localhost:5000](http://localhost:5000).

---

## Environment Variables

Create a `.env` file in the `backend/` directory:

```
MONGODB_URI=your_mongodb_connection_string
```

---

## Scripts

### Backend

- `npm start` — Start server
- `npm run dev` — Start server with nodemon

### Frontend

- `npm start` — Start React development server
- `npm run build` — Build for production
- `npm test` — Run tests

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Credits

- Built by the ConnectNinja team.
- Special thanks to all contributors and open-source libraries used.

---