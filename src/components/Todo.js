import React from "react";
import { Button, Form } from "react-bootstrap";
import Logo from "./Logo";

const Todo = () => {
  return (
    <div className="todo">
      <Logo></Logo>
      <div className="todo-container">
        <div className="todo-card text-center">
          <h1>Todo</h1>
          <div className="description my-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
              at eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend
              feugiat vitae faucibus nibh dolor dui.
            </p>
          </div>
          <Form className="">
            <Form.Group className="mb-3 w-75 mx-auto" controlId="">
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3 w-75 mx-auto" controlId="">
              <Form.Control type="text" placeholder="Description" />
            </Form.Group>
            <Button variant="primary" className="mb-3 w-50">
              Add
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Todo;
