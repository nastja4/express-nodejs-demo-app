/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const todoRoutes = require("./routes/todo");
require("./db");

const PORT = process.env.PORT || 3030;

const app = express();

// for receiving the data for routes as a JSON
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
