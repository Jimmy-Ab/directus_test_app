# Directus Test App

This is a test application built with [Directus](https://directus.io/), a powerful, open-source data platform that connects your database to various frontends and applications seamlessly. The project serves as a demonstration or sandbox for experimenting with Directus features.

# Features
- API-first CMS for managing structured content.
- Integration with MySQL for data storage.
- Environment-based configuration for easy setup.
- Secure authentication and role-based access control.
  
# Getting Started
Follow the steps below to set up and run the Directus test app locally.

Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MySQL](https://www.mysql.com/) or another compatible database
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)


# Installation
1. Clone the Repository
   
```bash
git clone https://github.com/your-username/directus-test-app.git
cd directus-test-app
```
2. Install Dependencies

```bash
npm install
```
3. Configure Environment Create a .env file in the root directory with the following variables:
```bash
DATABASE_CLIENT=mysql2
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_NAME=directus_test
DATABASE_USER=root
DATABASE_PASSWORD=your_password
KEY=your_generated_key
```

4. Set Up the Database Run the Directus migration to initialize the database schema:
```bash
npx directus database migrate
```

# Running the App
1. Start the Server
```bash
npx directus start
```
2. Access the Admin Interface Open your browser and navigate to:

```bash
http://localhost:8055
```
3. Log In or Register If this is your first run, you'll be prompted to create an admin user.

# Usage
- Create collections and fields in the Directus admin interface.
- Manage data through the admin panel or API endpoints.
- Extend functionality using custom hooks, flows, or extensions.

# Scripts

| Command | Description | 
|----------|----------|
| ```bash npm install ``` | Install dependencies. | 
| ```bash npx directus database migrate ``` | Run migrations to set up the database. |
| ```bash npx directus start ``` | Start the Directus server. |

# Troubleshooting
## Common Issues
1. ```bash [ER_NOT_SUPPORTED_AUTH_MODE]```
   Ensure MySQL is using the ```bashmysql_native_password``` authentication method:

```bash 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password';
FLUSH PRIVILEGES;
```
2. Port Conflicts
If port ```bash 8055``` is in use, modify the port in the ```bash.env``` file:

```bash
PORT=your_preferred_port
```

Acknowledgements
Directus for the backend platform.
MySQL for data storage.
