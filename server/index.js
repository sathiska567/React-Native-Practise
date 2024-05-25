require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Connect to MongoDB
require("./db/db");

const RegisterRouter = require("./router/RegisterRouter/RegisterRouter");

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json()); // To handle JSON request bodies

// Routes
app.use("/api/v1/user", RegisterRouter);

// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000; // Define a default port if PORT is not set in .env

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
