Pesto Tech To-Do Task Backend (pd_bk)
This is the backend service for the Pesto Tech To-Do Task. It runs on http://localhost:3005 by default.

Setup Instructions
Prerequisites
Ensure you have the following installed:

Node.js (version 14.x or higher)
npm (version 6.x or higher)
MySQL
Installation
Clone the repository:

git clone https://github.com/pankajwinaim/pd_bk.git
cd pd_bk
Install the dependencies:

npm install
Database Setup
Create a MySQL database and user.
Run the database script located at ./db/db.sql to set up the necessary tables:
mysql -u your-username -p your-database-name < ./db/db.sql

Configuration
The backend is configured to run on http://localhost:3005 by default. If you need to change the port or MySQL database credentials, follow these steps:

Open ./server.js.
Locate the MySQL configuration on lines 12, 13, and 14.
Update the database credentials as needed:
const dbConfig = {
    host: 'your-database-host',
    user: 'your-database-username',
    password: 'your-database-password',
    database: 'your-database-name'
};

To start the development server, run:

npm run dev
The backend service will be available at http://localhost:3005.