import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import Message from "./Message";
import { Search } from "@material-ui/icons/";
import { db } from "../Firebase/firebase";
import { useAuthContext } from "../store/AuthContext";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import { useTodoContext } from "../store/TodoContext";

const TodoList = () => {
  const { tasks, setTasks } = useTodoContext();
  const { userId } = useAuthContext();
  const [search, setSearch] = useState();
  // const [filteredTodo, setFilteredTodo] = useState();
  useEffect(() => {
    // console.log("current user:", userId);

    // -- retreive all user created tasks data in firestore
    const q = query(
      collection(db, "tasks"),
      where("uid", "==", userId),
      orderBy("created", "desc")
    );
    onSnapshot(q, (querySnapshot) =>
      setTasks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    // console.log('todo :',tasks);
  }, [userId, setTasks]);

  // -- function to search task by title & description --
  const searchTodo = () => {
    if (search) {
      setTasks(
        tasks.filter(
          (task) =>
            task.data.title.toLowerCase().includes(search) ||
            task.data.description.toLowerCase().includes(search)
        )
      );
    }
  };

  return (
    <div className="todo-list">
      <div className="list-container">
        <h1 className="my-5">Todolist</h1>
        <div className="sort-box d-flex justify-content-between align-items-center">
          <div className="search-field w-50">
            <InputGroup className="">
              <FormControl
                placeholder="search"
                aria-label=""
                aria-describedby=""
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                onClick={searchTodo}
              >
                <Search />
              </Button>
            </InputGroup>
          </div>
          <div className="category-field w-25">
            <Form.Select
              aria-label="Default select example"
              className="shadow-none"
            >
              <option value="" disabled selected hidden>
                Filter By
              </option>
              <option value="completed">Completed</option>
              <option value="favourite">Favourite</option>
              <option value="deleted">Deleted</option>
            </Form.Select>
          </div>
        </div>
        <div className="filtered">
          {/* { filteredTodo.map((task)=>(
          <Message
          id={task.id}
          key={task.id}
          title={task.data.title}
          description={task.data.description}
        ></Message>
        ))} */}
        </div>
        <div className="message-box">
          {tasks.map((task) => (
            <Message
              id={task.id}
              key={task.id}
              title={task.data.title}
              description={task.data.description}
            ></Message>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
