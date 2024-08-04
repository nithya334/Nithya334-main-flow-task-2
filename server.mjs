// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to the database.');
}).catch(err => {
  console.log('Failed to connect to the database.', err);
});

// Sample Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

