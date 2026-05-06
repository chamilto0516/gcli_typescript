# Message Board API

A simple, full-stack Message Board application built with Node.js, Express, and PostgreSQL.

## 🚀 Features

- **REST API:** Complete CRUD operations for messages.
- **PostgreSQL Integration:** Persistent storage (configured for a remote Raspberry Pi).
- **Frontend:** A clean, responsive HTML/JavaScript user interface.
- **Automated Testing:** Integration tests using Jest and Supertest.
- **Environment Management:** Secure configuration via `.env`.
- **Developer Workflow:** Automatic restarts with Nodemon and VS Code debugging profiles.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Logging:** Morgan
- **Testing:** Jest, Supertest
- **Frontend:** Vanilla HTML/CSS/JS

## 🚦 Getting Started

### Prerequisites
- Node.js (v24+)
- npm
- A PostgreSQL database

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/chamilto0516/gcli_typescript.git
   cd gcli_typescript
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Setup environment variables:
   Create a `.env` file in the root directory and add your database URL and port:
   ```env
   PORT=3000
   DATABASE_URL=postgresql://user:password@host:port/database
   ```

### Running the App
- **Development:** `npm run dev` (uses Nodemon)
- **Production:** `npm start`
- **Tests:** `npm test`

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/messages` | Fetch all messages |
| `GET` | `/messages/:id` | Fetch a single message by ID |
| `POST` | `/messages` | Create a new message |
| `DELETE` | `/messages/:id` | Delete a message by ID |
| `GET` | `/api/db-test` | Check database connectivity |

## 🗺️ Roadmap & Future Ideas

- **Architecture:** Refactor to MVC (Model-View-Controller) structure.
- **Security:** Implement `helmet` and input validation (`Joi`).
- **User Accounts:** Add authentication and user-specific messages.
- **Real-time:** Implement WebSockets (Socket.io) for instant updates.
- **Styling:** Enhance UI with Tailwind CSS or a modern frontend framework.

## 📄 License
This project is licensed under the ISC License.
