const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const mongoose = require('mongoose');
const logger = require('morgan');

const db = require('./models'); 

const PORT = process.env.PORT || 2000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

mongoose.connect("mongodb://localhost/populate", { useNewUrlParser: true });

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Google Book Search
app.get("/api/books/:book", (req, res) => {
  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.book)
    .then((response) => {
      console.log("response", response.data)
      res.json(response.data);
    })
    .catch((error) => {
      console.log("error", error);
    })
})

// Saves Book to MongoDB - Not Working Yet
app.post("/api/submit", (req, res) => {
  db.Book.create(req.body)
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
})

// View All Saved Books - Not Working Yet
app.get("/api/saved", (req, res) => {
  db.Book.find({})
    .then(dbArticle => {
      res.json(dbArticle);
    })
    .catch(err => {
      res.json(err);
    })
})

// Send every request to the React app - Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
