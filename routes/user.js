/* eslint-disable no-undef */
const express = require("express");
const { addUser } = require("../controllers/user");

const Router = express.Router();

// Router.get("/", getTodos);

Router.post("/", addUser);

// Router.patch("/:id", updateTodo);

// Router.delete("/:id", deleteTodo);

module.exports = Router;
