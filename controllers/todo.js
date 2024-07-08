/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const Todo = require("../models/todo");

const getTodos = (req, res) => {
  Todo.find({})
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

const addTodo = (req, res) => {};

module.exports = { getTodos, addTodo };
