/* eslint-disable no-undef */
const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");
// console.log(publicPath);
// allows to load any html, js or css content from the specified folder
// app.use(express.static(publicPath));

// middleware function
app.use((req, res, next) => {
  console.log(req.url, req.method);
  // res.status(503).send("<h1>Site is under maintenance</h1>");
  // calling 'next' method allows to execute next roots in the file
  next();
});

// middleware using app.use method and static method from Express appllows to display static content (from the 'public' folder)
app.use(express.static(publicPath));

const users = [
  {
    name: "Mike",
    age: 30,
  },
  {
    name: "Jerry",
    age: 50,
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/mike", (req, res) => {
  res.send("Hello Mike");
});

app.get("/help", (req, res) => {
  const filePath = path.join(__dirname, "public", "help.html");
  res.sendFile(filePath);
});

app.get("*", (req, res) => {
  res;
  // .status(404)
  // .send("<h1>Page not found. Go back to <a href='/'>Home</a></h1>");
  const filePath = path.join(__dirname, "public", "404.html");
  // const filePath = path.join(__dirname, "public", "..", "NotFound.html");
  res.sendFile(filePath);
});

app.listen(3030, () => {
  console.log("server started on port 3030");
});
