 Login & Registration System

A web application that enables users to register and log in, and provides a protected page displaying a static table of data after login. The system uses React for the frontend, Node.js for the backend, and MongoDB for storing user data.

## Features

- **User Registration**:
  - Fields: Name, Date of Birth, Email, Password
  - Saves user information in MongoDB
- **User Login**:
  - Authenticates users and returns a JSON Web Token (JWT)
  - Saves JWT and user information to local storage
- **Protected Page**:
  - Only accessible after a successful login
  - Displays a static table with some sample data
- **Frontend**:
  - Built with React, React-Bootstrap, React-Router, and Axios for API calls
- **Backend**:
  - Built with Node.js and Express
  - Uses MongoDB to store user data


## Installation

Follow the steps below to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Atulshere18/Project.git
