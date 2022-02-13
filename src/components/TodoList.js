import React from "react";
import {
  Button,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import Message from "./Message";
import { Search } from "@material-ui/icons/";

const TodoList = () => {
  return (
    <div className="todo-list">
      <div className="list-container">
        <h1 className="my-5">Todolist</h1>
        <div className="sort-box d-flex justify-content-between">
          <div className="search-field">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="search"
                aria-label=""
                aria-describedby=""
              />
              <Button variant="outline-secondary" id="button-addon2">
                <Search />
              </Button>
            </InputGroup>
          </div>
          <div className="category-field w-25">
            <Form.Select
              aria-label="Default select example"
              className="shadow-none"
            >
              <option>Filter By</option>
              <option value="completed">Completed</option>
              <option value="favourite">Favourite</option>
              <option value="deleted">Deleted</option>
            </Form.Select>
          </div>
        </div>
        <div className="message-box">
          <Message></Message>
          <Message></Message>
          <Message></Message>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
