/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const Todo = require("../models/todo");
const { validateFields, getErrorMessage } = require("../utils/functions");

const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (error) {
    console.log(error);
    next(
      getErrorMessage({
        message: "Error while getting list of todos. Try again later.",
      })
    );
  }
};

const getTodo = async (req, res, next) => {
  try {
    const todos = await Todo.find({ owner: req.params.id });
    res.send(todos);
  } catch (error) {
    console.log(error);
    next(
      getErrorMessage({
        message: "Error while getting list of todos. Try again later.",
      })
    );
  }
};

const addTodo = async (req, res, next) => {
  try {
    const areValidFields = validateFields(req.body);
    if (!areValidFields) {
      return next(
        getErrorMessage({
          status: 400,
          message: "Only valid fields to update: 'title', 'status', 'owner'",
        })
      );
    }

    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).send(todo);
  } catch (error) {
    console.log(error);
    next(
      getErrorMessage({
        message: "Error while adding list of todos. Try again later.",
      })
    );
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const isValidId = await Todo.findById(req.params.id);
    if (!isValidId) {
      return next(
        getErrorMessage({
          status: 400,
          message: "Please enter valid todo id",
        })
      );
    }

    const areValidFields = validateFields(req.body);
    if (!areValidFields) {
      return next(
        getErrorMessage({
          status: 400,
          message: "Only valid fields to update: 'title', 'status'",
        })
      );
    }
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.send(updatedTodo);
  } catch (error) {
    console.log(error);
    next(
      getErrorMessage({
        message: "Error while updating list of todos. Try again later.",
      })
    );
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const isValidId = await Todo.findById(req.params.id);
    if (!isValidId) {
      return next(
        getErrorMessage({
          status: 400,
          message: "Please enter valid todo id",
        })
      );
    }
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.send(deletedTodo);
  } catch (error) {
    console.log(error);
    next(
      getErrorMessage({
        message: "Error while deleting a todo. Try again later.",
      })
    );
  }
};

module.exports = { getTodos, getTodo, addTodo, updateTodo, deleteTodo };
