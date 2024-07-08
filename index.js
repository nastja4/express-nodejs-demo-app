/* eslint-disable no-undef */
const express = require("express");
const path = require("path");
require("./db");

const app = express();
const publicPath = path.join(__dirname, "public");

// Middleware using app.use method and static method from Express app allows to display static content (from the 'public' folder)
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  const filePath = path.join(__dirname, "public", "404.html");
  res.sendFile(filePath);
});

app.listen(3030, () => {
  console.log("server started on port 3030");
});
