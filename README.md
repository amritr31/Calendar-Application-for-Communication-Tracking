# React app
![cal-week](https://github.com/user-attachments/assets/3af28747-9c47-44e6-afea-22ce29bed214)
![cal-month](https://github.com/user-attachments/assets/e09d51f4-b6b8-463f-8c2a-6918f9eea22f)
![cal-agenda](https://github.com/user-attachments/assets/914f800d-cca3-4441-ad65-67d4db461b92)


# Description

React Calendar is a user-friendly online calendar built using React Big Calendar. This project serves as a full-stack demonstration, showcasing how to seamlessly integrate a sophisticated third-party UI library with the widely-used "MERN" stack. The application incorporates architectural components like Mongoose, Redux, and JSON Web Tokens to ensure scalability and functionality. It fetches public holiday data using the Calendarific Holidays API.

---

## MERN Stack Overview

React Calendar exemplifies a "MERN stack" application, comprising:

- **MongoDB**: An open-source, document-oriented database.
- **Express**: A flexible web application framework for Node.js.
- **React**: A popular front-end library for creating interactive user interfaces.
- **Node.js**: A JavaScript runtime that operates on the server side.

---

## Project Structure

### **Frontend** (`src`)

- **`config`**: Contains configuration settings for the app.
- **`client`**: Houses files for the frontend.
  - **`assets`**: Static assets like images.
  - **`components`**: Reusable components for building views.
  - **`pages`**: Page-specific components.
  - **`store`**: Redux store and related actions.
  - **`styles`**: CSS modules for styling the app.
  - **`utils`**: Helper functions for the frontend.
- **`App.js`**: Main component managing routes and views.
- **`index.html`**: Root HTML file.
- **`index.css`**: Global styles.
- **`index.js`**: Entry point for the React app.
- **`validation.js`**: Handles form validation.

### **Backend** (`server`)

- **`controllers`**: Functions for managing API requests in Express.js.
- **`db`**: Database connection setup.
- **`middleware`**: Custom middleware for Express.js.
- **`models`**: Defines MongoDB schemas and models.
- **`routers`**: Routes for handling API endpoints.
- **`services`**: Logic for data processing and transformations.
- **`utils`**: Utility functions for backend operations.
- **`server-dev.js`**: Entry point for development mode.
- **`server-prod.js`**: Entry point for production mode.

### **Additional Files**

- **`package.json`**: Defines npm dependencies and scripts.
- **`package-lock.json`**: Dependency tree for the project.
- **`.babelrc`**: Babel.js configuration.
- **`.env.example`**: Sample environment variables.
- **`.gitignore`**: Files and directories to exclude from Git.
- **`.prettierrc`**: Prettier configuration.
- **`.jest.config.js`**: Jest configuration for testing.
- **`seedHolidayEvents.js`**: Script to seed default holiday data.
- **`.webpack.*.js`**: Webpack configuration for development and production.
- **`README.md`**: This documentation file.

---

## Getting Started

React Calendar was developed with Node.js (v16). To ensure compatibility, download a stable long-term support (LTS) version.

- [Download Node.js](https://nodejs.org/en/download/)
- Check Node.js installation:
  ```bash
  node -v
  ```

---

## Configuring Environment Variables

Create `.env.development` and `.env.production` files in the project root. Refer to `.env.example` for guidance, and define variables such as:

- `PORT`
- `MONGO_HOSTNAME`
- `MONGO_PORT`
- `MONGO_DB`
- `API_URL`
- `CALENDARIFIC_KEY`
- `JWT_SECRET_KEY`
- `JWT_EXPIRATION`
- `JWT_REFRESH_EXPIRATION`

---

## Setting Up MongoDB

1. Download and install MongoDB ([Download MongoDB](https://www.mongodb.com/try/download)).
2. Start the MongoDB server:
   ```bash
   mongod
   ```
3. Create a new database using the Mongo shell:
   ```bash
   use reactcalendar_db
   ```
   Insert a sample document if needed:
   ```bash
   db.app.insert({ _id: 1, message: 'sample doc' })
   ```
4. Launch the app to initialize default database documents.

---

## Database Seeding

To populate the database with default calendar events, execute:
```bash
node seedHolidayEvents.js
```

---

## Running the Application

### **Production**

1. Build assets for production:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm run start
   ```

For production management, consider using PM2:
```bash
npm install pm2 -g
npm run pm2
```

### **Development**

Start the app in development mode:
```bash
npm run dev
```

---

## Authentication and Roles

This project implements JSON Web Tokens (JWT) for secure authentication. User roles (`user`, `moderator`, `admin`) are stored in the database and can be extended for authorization requirements.

---

## Frontend Features

### **React & Redux**

- Enables seamless navigation with React-Router.
- Uses Redux for state management and local storage for session persistence.

### **CSS Modules**

- Employs scoped class names for modular and reusable CSS.

---
