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


  // switch (today.getDay()) {
  //   case 0:
  //     message = "Sunday";
  //     break;
  //   case 1:
  //     message = "Monday";
  //     break;
  //   case 2:
  //     message = "Tuesday";
  //     break;
  //   case 3:
  //     message = "Wednesday";
  //     break;
  //   case 4:
  //     message = "Thursday";
  //     break;
  //   case 5:
  //     message = "Friday";
  //     break;
  //   case 6:
  //     message = "Saturday";
  //     break;
  //   default:
  //     break;
  // }

  // if (today.getDay() === 6 || today.getDay() === 0) {
    //res.write("<h1>Message</h1>");
    //res.write("<h2>It is weekend</h1>");
    //res.send("It is weekend");
    //res.send();
  //   message = 'weekend';
  // } else {
    //res.write("<h1>Message</h1>");
    //res.write("<h2>Oh shit day!</h2>");
    //res.send("Oh shit day...");
    //res.send();
    //res.sendFile(__dirname + "/index.html");
  //   message = 'weekday';
  // }

  const day = date.getDate();
  // let day = date.getDay();

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
