---

# Healthcare Patient Management Application

A comprehensive, responsive healthcare patient management application built with **Next.js**, **Appwrite**, **Typescript**, **TailwindCSS**, **ShadCN**, and **Twilio** for efficient patient registration, appointment scheduling, and administration. This application offers an intuitive interface for patients to book and manage appointments, with robust administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications for enhanced user experience.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Patient Registration**: New patients can register and create a personal profile with ease.
- **Appointment Booking**: Patients can schedule appointments at their convenience, with support for multiple bookings.
- **Admin Appointment Management**: Administrators have a dedicated panel to view, confirm, schedule, and cancel appointments.
- **SMS Notifications**: Patients receive SMS notifications to confirm their appointment details.
- **Responsive Design**: The application provides a seamless user experience on all device types and screen sizes.
- **File Upload**: Patients and administrators can securely upload files to Appwrite Storage.
- **Performance Monitoring**: Sentry integration for error tracking and performance monitoring.

---

## Tech Stack

- **Next.js**: Framework for building server-rendered React applications.
- **Appwrite**: Backend services for authentication, database, and storage.
- **Typescript**: Enhances code quality with type safety and improved developer experience.
- **TailwindCSS**: Utility-first CSS framework for responsive design.
- **ShadCN**: Styling and components for modern design aesthetics.
- **Twilio**: SMS notifications for appointment confirmations.
- **Sentry**: Error and performance tracking.

---

## Installation

To get started with the application, follow these steps:

### Prerequisites

- **Node.js** (v14 or above)
- **Appwrite** instance or account
- **Twilio** account
- **Sentry** account

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AatifxShaikh/Arogya.git
   cd healthcare-patient-management
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up Appwrite**:
   - Configure a new Appwrite project with authentication, database, and storage services.
   - Create collections for patients and appointments, configuring permissions as needed.

4. **Set up Twilio and Sentry**:
   - Configure Twilio for sending SMS notifications.
   - Set up Sentry for performance monitoring.

5. **Set up Environment Variables**:

   Rename `.env.example` to `.env` and add your environment variables. (See [Environment Variables](#environment-variables) section for details).

6. **Start the development server**:

   ```bash
   npm run dev
   ```

   Open `http://localhost:3000` in your browser to view the application.

---

## Environment Variables

Create a `.env` file at the root of your project and add the following:

```plaintext
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT=<Your Appwrite API Endpoint>
NEXT_PUBLIC_APPWRITE_PROJECT_ID=<Your Appwrite Project ID>
APPWRITE_API_KEY=<Your Appwrite API Key>


# Sentry Configuration
NEXT_PUBLIC_SENTRY_DSN=<Your Sentry DSN>
```

Ensure all variables are configured to successfully connect with Appwrite, Twilio, and Sentry.

---

## Usage

- **Patient Registration**: Register and create a profile as a patient.
- **Booking an Appointment**: Schedule a new appointment with a doctor from the patient dashboard.
- **Admin Appointment Management**:
  - View, confirm, schedule, or cancel patient appointments from the admin panel.
  - Automatically trigger SMS notifications upon appointment confirmation.
- **File Upload**: Patients can upload files securely using Appwrite storage.

### Key Commands

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start`: Run the production build.
- `npm run lint`: Lint the codebase using ESLint.

---

## Contributing

We welcome contributions! Please fork the repository and create a new branch for your changes. Submit a pull request when your branch is ready for review.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push the branch (`git push origin feature/your-feature`).
5. Open a pull request.



## Acknowledgments

Thanks to the open-source community and libraries that made this project possible.

---

