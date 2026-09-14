const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const meritListRoutes = require("./routes/meritListRoutes");
const challanRoutes = require("./routes/challanRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}
app.use("/uploads", express.static(uploadPath));
app.use("/api/auth", authRoutes);
app.use("/api/merit-list", meritListRoutes);
app.use("/api/challan", challanRoutes);
app.get("/", (req, res) => {
  res.send("Backend is deployed");
});

app.listen(port, () => {
  console.log(`Server started on Port ${port}`);
});
