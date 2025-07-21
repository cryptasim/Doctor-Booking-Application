# Doctor Booking Application

A comprehensive, full-stack web application designed to streamline the process of booking doctor appointments for patients, doctors, and administrators. The Doctor Booking Application provides a seamless experience for users to register, browse doctors by specialty, book and manage appointments, and handle payments securely. Administrators can efficiently manage doctors, appointments, and users through a dedicated admin portal, while doctors can view and manage their schedules and profiles.


## Who is this for?
- **Patients:** Anyone seeking to book medical appointments online with trusted doctors.
- **Doctors:** Healthcare professionals who want to manage their appointments and availability.
- **Administrators:** Clinic or hospital staff responsible for managing doctors, appointments, and patient records.


## Live Demo

- [Main Panel](https://doctor-booking-application-frontend-2u2g.onrender.com/) 
- [Admin Panel](https://doctor-booking-application-admin-efod.onrender.com) 


## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [API Overview](#api-overview)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
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
- **Payments:** Stripe, Razorpay


## Project Structure

```
Doctor-Booking-Application/
│
├── admin/         # Admin portal (React)
├── backend/       # Backend API (Node.js/Express)
├── frontend/      # Patient portal (React)
└── README.md
```


## API Overview

- **/api/user/**: Register, login, profile, book/cancel appointments, payments
- **/api/doctor/**: Login, dashboard, appointments, profile, availability
- **/api/admin/**: Login, dashboard, manage doctors/appointments


## Setup Instructions

### Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

### 1. Clone the repository

```bash
git clone https://github.com/cryptasim/Doctor-Booking-Application.git
cd Doctor-Booking-Application
```

### 2. Install dependencies

```bash
cd backend
npm install
cd ../admin
npm install
cd ../frontend
npm install
```

### 3. Configure environment variables

- Create a `.env` file in `backend/` with your MongoDB URI, JWT secret, and Cloudinary credentials. See [Environment Variables](#environment-variables) below for an example.

### 4. Start the backend server

```bash
cd backend
npm start
```

### 5. Start the frontend and admin portals

Open two terminals:

```bash
cd admin
npm run dev
```

```bash
cd frontend
npm run dev
```


## Environment Variables

Create `backend/.env` with the following keys:

```
MONGODB_URI = your_mongodb_uri
JWT_SECRET = your_jwt_secret
CLOUDINARY_CLOUD_NAME = your_cloud_name
CLOUDINARY_API_KEY = your_api_key
CLOUDINARY_API_SECRET = your_api_secret
STRIPE_SECRET_KEY = your_stripe_key
RAZORPAY_KEY_ID = your_razorpay_id
RAZORPAY_KEY_SECRET = your_razorpay_secret
CURRENCY = INR
ADMIN_EMAIL = admin@example.com
ADMIN_PASSWORD = your_admin_password
```


## Contributing

Pull requests are welcome! Please open an issue first to discuss major changes.


## Group Members

- Dhananjoy Shaw
- Md Adil
- Asim Kumar Hansda
