const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
  res.send("MERN VPS Demo API is running");
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API is healthy",
  });
});
app.get("/api/users", (req, res) => {
  res.json({
    success: true,
    users: [
      {
        id: 1,
        name: "Nikhil",
      },
      {
        id: 2,
        name: "Rahul",
      },
    ],
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

