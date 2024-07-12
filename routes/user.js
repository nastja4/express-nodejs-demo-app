/* eslint-disable no-undef */
const express = require("express");
const { addUser, authenticateUser } = require("../controllers/user");

const Router = express.Router();

// Router.get("/", getTodos);

Router.post("/", addUser);

Router.post("/login", authenticateUser);

// Router.patch("/:id", updateTodo);

// Router.delete("/:id", deleteTodo);

module.exports = Router;
