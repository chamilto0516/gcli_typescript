# Node.js REST API Development Plan

This document outlines the setup and plan for creating a JSON REST API using Node.js.

## Current Environment
- **Node.js:** v24.15.0
- **npm:** v11.12.1
- **OS:** win32

## Current Project Status
The project is currently a functional **Message Board API** connected to a PostgreSQL database.

### Implemented Features
- [x] **Express.js Server:** Basic REST API structure.
- [x] **Environment Variables:** Managed via `.env` and `dotenv`.
- [x] **Logging:** HTTP request logging using `morgan`.
- [x] **Database Integration:** Connected to PostgreSQL on Raspberry Pi (`owlbear`).
- [x] **Message Board CRUD:**
  - `GET /messages` - Fetch all messages.
  - `GET /messages/:id` - Fetch a single message.
  - `POST /messages` - Create a new message.
  - `DELETE /messages/:id` - Remove a message.
- [x] **Development Workflow:**
  - `nodemon` for automatic restarts.
  - VS Code Launch profile (`Run Server (Nodemon)`).

## Database Schema (PostgreSQL)
**Table:** `messages`
- `id`: SERIAL PRIMARY KEY
- `subject`: VARCHAR(255)
- `message`: TEXT
- `created_at`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP

## Quick Start Steps
1. [x] **Initialize Project:** `npm init -y`
2. [x] **Install Dependencies:** `npm install express dotenv pg morgan`
3. [x] **Install Dev Dependencies:** `npm install --save-dev nodemon`
4. [x] **Setup Environment:** Create `.env` with `DATABASE_URL` and `PORT`.
5. [x] **Run Server:**
   - Development: `npm run dev`
   - Production: `npm start`
   - VS Code: Use `Run Server (Nodemon)` from the Debug view.

## Future Enhancements
- [ ] Scaffold a professional folder structure (`src/routes`, `src/controllers`, `src/models`).
- [ ] Implement middleware for security (`helmet`).
- [ ] Add Input Validation (e.g., using `joi` or `express-validator`).
- [ ] Build a simple frontend to display and post messages.
- [ ] Add Authentication/User accounts.
