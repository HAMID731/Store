# SuperMarket - Small Business Data Storage Solution

A secure and affordable data storage solution for small businesses in Nigeria, built with Spring Boot, ReactJS, and MongoDB.

## Features

- Secure data storage and management
- User-friendly interface
- Inventory management
- Sales tracking
- Customer management
- Reports and analytics

## Technology Stack

- Backend: Spring Boot (Java)
- Frontend: ReactJS, HTML, CSS
- Database: MongoDB

## MongoDB Setup Guide

1. Download and Install MongoDB:
   - Visit [MongoDB Download Center](https://www.mongodb.com/try/download/community)
   - Download MongoDB Community Server for your operating system
   - Run the installer and follow the installation wizard

2. Create Data Directory:
   - Create a directory for MongoDB data: `C:\data\db`

3. Start MongoDB Server:
   - Open Command Prompt as Administrator
   - Navigate to MongoDB bin directory (default: `C:\Program Files\MongoDB\Server\[version]\bin`)
   - Run: `mongod`

4. Install MongoDB Compass (Optional but recommended):
   - Download [MongoDB Compass](https://www.mongodb.com/try/download/compass)
   - Install and use it for visual database management

5. Create Database and User:
   - Open MongoDB Shell (mongosh)
   - Create database: `use supermarket`
   - Create user:
     ```js
     db.createUser({
       user: "admin",
       pwd: "your_password",
       roles: [{ role: "readWrite", db: "supermarket" }]
     })
     ```

## Project Structure

```
supermarket/
├── backend/           # Spring Boot application
├── frontend/          # React application
├── docs/              # Documentation
└── README.md
```

## Getting Started

1. Clone the repository
2. Set up MongoDB following the guide above
3. Start the backend server
4. Start the frontend application
5. Access the application at http://localhost:3000

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.