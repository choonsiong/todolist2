//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const todoItems = [];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  const day = date.getDate();
  res.render('list', {listTitle: day, items: todoItems});
});

app.post("/", function(req, res) {
  const todo = req.body.todo;

  if (req.body.listButton === 'Work') {
    workItems.push(todo);
    res.redirect("/work");
  } else {
    todoItems.push(todo);
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render('list', {listTitle: "Work", items: workItems});
});

app.post("/work", function(req, res) {
  const todo = req.body.todo;
  workItems.push(todo);
  res.redirect("/work");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});