const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes/authRoutes");
const tradeRoutes = require("./routes/tradeRoutes/tradeRoutes");
require("dotenv").config();
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.sky9z.mongodb.net/`;
const PORT = 5000;

const app = express();
app.use(express.json({ extended: false }));

app.use("/api/auth", authRoutes);

app.use("/api/trade", tradeRoutes);

mongoose.connect(URI).then(() => {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
