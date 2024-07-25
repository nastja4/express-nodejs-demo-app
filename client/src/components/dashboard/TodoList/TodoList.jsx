/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Table } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import "./TodoList.scss";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {/* // responsive for responsive view */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(({ title, status, createdAt, _id }, index) => (
            <tr key={_id}>
              <td>{index + 1}</td>
              <td>{title}</td>
              <td>{status}</td>
              <td>
                {new Date(createdAt).toLocaleDateString("en-Us", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </td>
              <td>
                <AiFillEdit size={25} className="icon" />
              </td>
              <td>
                <MdDeleteForever size={25} className="icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TodoList;
