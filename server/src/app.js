import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ status: "success", message: "API running..." });
});

export default app;
