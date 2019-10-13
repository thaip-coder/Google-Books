const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

app.use(routes);

mongoose.connect("mongodb://localhost/populate", { useNewUrlParser: true });



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
