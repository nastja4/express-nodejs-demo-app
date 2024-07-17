/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/todo");
const userRoutes = require("./routes/user");
require("./db");

const PORT = process.env.PORT || 3030;

const app = express();

// we allow our app APIs to be publiclyaccessible to anyone (before express.json line)
app.use(cors());
// for receiving the data for routes as a JSON
app.use(express.json());

app.use("/api/todos", todoRoutes);
app.use("/api/users", userRoutes);

// Make sure this error handler middleware is added after all routes of the app
app.use((error, req, res, next) => {
  if (error) {
    console.log("error occured", error);
    const message = error.message || "Something went wrong. Try again later.";
    const status = error.status || 500;
    return res.status(status).send(message);
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
