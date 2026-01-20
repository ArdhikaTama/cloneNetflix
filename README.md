# Netflix Clone

This is a full-stack Netflix clone application built with React (Vite) and Node.js (Express).

## Prerequisites

- **Docker Desktop** (or Docker Engine)
- **Node.js** (LTS version) or **mise** (for environment management)

## 🐳 Database Setup (Docker)

We use Docker Compose to spin up a local MongoDB instance easily. This allows the team to work without setting up a local MongoDB server manually.

### 1. Start the Database
Run the following command in the project root to download and start the MongoDB container in the background:

```bash
docker compose up -d
```

### 2. Check Status
Verify the database is running:

```bash
docker ps
```

### 3. Stop the Database
When you are done, you can stop the container:

```bash
docker compose down
```

---

## 🚀 Project Setup (npm)

You can run this project using `mise` (to isolate the node version) or standard `npm`.

### Option A: Using mise (Recommended)

1. **Install Node.js environment**:
   ```bash
   mise use node@lts
   ```

2. **Install Dependencies**:
   You need to install dependencies for the root, client, and server folders.
   ```bash
   mise x -- npm install
   cd client && mise x -- npm install
   cd ../server && mise x -- npm install
   cd ..
   ```

3. **Run the App**:
   This starts both the Client (frontend) and Server (backend) concurrently.
   ```bash
   mise x -- npm run dev
   ```

### Option B: Standard npm (Global)

If you already have Node.js installed globally:

1. **Install Dependencies**:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   cd ..
   ```

2. **Run the App**:
   ```bash
   npm run dev
   ```

## 📍 Access the App

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
