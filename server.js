const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const bookRoutes = require("./routes/books");
const transactionRoutes = require("./routes/transactions");
const { initializeDatabase } = require("./connection");
const PORT = 3000;

app.use(express.json());

app.use("/users", userRoutes);
app.use("/books", bookRoutes);
app.use("/transactions", transactionRoutes);

mongoose.connect('mongodb://localhost:27017/yourDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    initializeDatabase(); // Initialize the database after connection
  })
  .catch(err => {
    console.error("Database connection error:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is Started At port ${PORT}`);
});
