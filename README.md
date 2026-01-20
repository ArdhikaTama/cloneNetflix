# Netflix Clone 🍿

A full-stack Netflix clone application built with **React (Vite)**, **Node.js (Express)**, and **MongoDB**.

---

## 🛠 Prerequisites

Before you begin, make sure you have the following installed on your machine:

1.  **[Git](https://git-scm.com/downloads)** - Version control.
2.  **[Docker Desktop](https://www.docker.com/products/docker-desktop/)** - Required to run the local database.
3.  **Node.js Environment** - Choose ONE method:
    *   **[mise](https://mise.jdx.dev/)** (Recommended): Automatically manages the correct Node.js version.
    *   **Node.js (LTS)**: Standard global installation.

---

## 🏁 Getting Started

Follow these steps to get the project running from scratch.

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd cloneNetflix
```

### 2. Start the Database 🐳

We use Docker to run MongoDB. This ensures everyone has the exact same database setup.

```bash
docker compose up -d
```
> **Note:** This starts MongoDB on port `27017`. To stop it later, use `docker compose down`.

### 3. Configure Environment Variables

Create a configuration file for the server to connect to the database.

1.  Create a file named `.env` inside the `server/` folder.
2.  Add the following content:

```env
PORT=5000
MONGO_URI=mongodb://root:password@localhost:27017/netflix_clone?authSource=admin
```

### 4. Install Dependencies

You need to install packages for the root project, client, and server.

#### Option A: Using mise (Recommended)
If you are using `mise`, it will use the local Node version defined in the project.

```bash
# 1. Install Node.js version
mise install

# 2. Install all dependencies
mise x -- npm install
cd client && mise x -- npm install
cd ../server && mise x -- npm install
cd ..
```

#### Option B: Standard npm
If you have Node.js installed globally:

```bash
npm install
cd client && npm install
cd ../server && npm install
cd ..
```

---

## 🚀 Running the Application

Start both the Client (Frontend) and Server (Backend) with a single command.

```bash
# Using mise
mise x -- npm run dev

# OR using standard npm
npm run dev
```

### Access Points
*   **📺 Frontend**: [http://localhost:5173](http://localhost:5173)
*   **🔌 Backend API**: [http://localhost:5000](http://localhost:5000)

---

## 🛑 How to Stop

1.  **Stop the App**: Press `Ctrl + C` in the terminal where the app is running.
2.  **Stop the Database**:
    ```bash
    docker compose down
    ```

---

## 🤝 Git Workflow (Read This!)

To avoid merge conflicts, please follow this workflow every time you work:

1.  **Start your session:**
    ```bash
    git pull origin main
    ```

2.  **Make your changes.**

3.  **Before you push:**
    ```bash
    git add .
    git commit -m "feat: description of changes"
    git pull origin main  # <--- CRITICAL: Get updates one last time
    git push origin main
    ```
