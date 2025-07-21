# Doctor Booking Application

A full-stack web application for booking doctor appointments, designed for both patients and administrators. This project is built using React (frontend), Node.js/Express (backend), and MongoDB (database).

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [Group Members](#group-members)

## Features

- Patient registration and login
- Doctor registration and management
- Admin dashboard for managing doctors, appointments, and users
- Appointment booking and cancellation
- Secure authentication for users, doctors, and admins
- Responsive UI for both admin and patient portals

## Tech Stack

- **Frontend:** React, Vite
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT
- **File Uploads:** Multer, Cloudinary

## Project Structure

```
Doctor-Booking-Application/
│
├── admin/         # Admin portal (React)
├── backend/       # Backend API (Node.js/Express)
├── frontend/      # Patient portal (React)
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

### 1. Clone the repository

```powershell
git clone https://github.com/cryptasim/Doctor-Booking-Application.git
cd Doctor-Booking-Application
```

### 2. Install dependencies

```powershell
cd backend
npm install
cd ../admin
npm install
cd ../frontend
npm install
```

### 3. Configure environment variables

- Create a `.env` file in `backend/` with your MongoDB URI, JWT secret, and Cloudinary credentials.

### 4. Start the backend server

```powershell
cd backend
npm start
```

### 5. Start the frontend and admin portals

Open two terminals:

```powershell
cd admin
npm run dev
```

```powershell
cd frontend
npm run dev
```

## Usage

- Access the patient portal at `http://localhost:5173`
- Access the admin portal at `http://localhost:5174` (or as configured)
- Register as a patient or doctor, log in, and book appointments.

## Contributing

Pull requests are welcome! Please open an issue first to discuss major changes.

## Group Members

- Dhananjoy Shaw
- Md Adil
- Asim Kumar Hansda