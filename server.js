// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route for home page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});

//Route for Resume page
app.get("/resume", function (req, res) {
  res.sendFile(path.join(__dirname, "./resume.html"));
});

//Route for Portfolio page
app.get("/portfolio", function (req, res) {
  res.sendFile(path.join(__dirname, "./portfolio.html"));
});

//Routes for different
app.get("/style.css", function (req, res) {
  res.sendFile(path.join(__dirname, "./style.css"));
});
app.get("/logic.js", function (req, res) {
  res.sendFile(path.join(__dirname, "./logic.js"));
});
app.use("/assets", express.static(__dirname + "/assets"));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
