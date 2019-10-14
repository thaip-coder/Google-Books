const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const mongoose = require('mongoose');
const logger = require('morgan');

const book = require('./models/book'); 

const PORT = process.env.PORT || 3002;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

const MONGODB_URI = process.emitWarning.MOBGODB_URI || 'mongodb://localhost/googlebooksearch'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Get route to display books searched
app.get('/search', function(req, res) {
  axios.get('https://www.googleapis.com/books/v1/volumes?q=Scythe')
  .then(function(response) {
    console.log('response', response.data)
    res.send(response.data);
  })
  .catch(function(err) {
    console.log(err)
  }); 
});

// Post save route
app.post('/save', function(req, res) {
  book.create(req.body)
  .then(function(dbBooks) {
    res.json(dbBooks);
  })
  .catch(function(err) {
    res.json(err);
    console.log(err);
  });
});

// Delete route
app.post('/delete/:id', function(req, res) {
  console.log('id', req.params.id);
  book.deleteOne({ _id: req.params.id })
  .then(function(dbBooks) {
    res.json(dbBooks);
  })
  .catch(function(err) {
    res.json(err);
  });
});

// View saved books route
app.get('/saved-books', function(req, res) {
  book.find({})
  .then(function(dbBooks) {
    res.json(dbBooks);
  })
  .catch(function(err) {
    res.json(err);
  });
});



// Send every request to the React app - Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
