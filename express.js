var express = require("express");
var path = require("path");
var reserve = require("reserve.html");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var Table = [
  {
    super(name, phone, email, id);
  }
]

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});