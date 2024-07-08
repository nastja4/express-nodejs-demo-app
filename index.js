/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const todoRoutes = require("./routes/todo");
require("./db");

const app = express();

app.use("/api/todos", todoRoutes);

app.listen(3030, () => {
  console.log("server started on port 3030");
});
