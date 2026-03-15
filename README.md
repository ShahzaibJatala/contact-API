📱 Contact Management API
A secure and scalable RESTful API built with Node.js, Express, and MongoDB. This project provides a complete backend solution for users to create accounts, log in, and securely manage their personal contact lists.

🚀 Core Functionalities
🔐 User Authentication: Complete Registration and Login system using JSON Web Tokens (JWT). Passwords are encrypted using BcryptJS for maximum security.

📂 Private Contact Storage: Users can store, view, update, and delete contact numbers and details. Each user's data is private and only accessible via a valid authentication token.

🛠 MVC Architecture: Organized into Controllers, Models, and Routes to ensure the code is clean, readable, and easy to maintain.

🛡 Protected Routes: Uses custom middleware to verify JWT tokens before allowing access to contact-related endpoints.

🛠 Tech Stack
Runtime: Node.js

Framework: Express.js

Database: MongoDB with Mongoose ODM

Security: JWT (JSON Web Tokens) & BcryptJS

Development: Nodemon, Dotenv
