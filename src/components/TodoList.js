import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import Message from "./Message";
import { Search } from "@material-ui/icons/";
import { db, logout } from "../Firebase/firebase";
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
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);
  const [filteredTodo, setFilteredTodo] = useState(tasks);
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
  }, [userId, setTasks]);

  useEffect(() => {
    // -- add function for list category
    setFilteredTodo(tasks);
    if (category) {
      // console.log("called category", category);
      // setFilteredTodo(tasks);

      setFilteredTodo(
        tasks.filter((task) =>
          task.data[category].toString().toLowerCase().includes("true")
        )
      );
      // console.log(filteredTodo)
      // setCategory(null)
    }
  }, [category, setTasks, tasks]);

  // -- function to search task by title & description --
  const searchTodo = () => {
    setFilteredTodo(tasks);
    if (search) {
      setFilteredTodo(
        tasks.filter(
          (task) =>
            task.data.title.toLowerCase().includes(search.toLowerCase()) ||
            task.data.description.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="todo-list">
      <div className="list-container">
        <div className="d-flex justify-content-between align-items-center my-5">
          <h1 className="">Todolist</h1>
          <Button variant="danger" onClick={logout}>
            logout
          </Button>
        </div>
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
        {/* <div className="filtered bg-success">
          { filteredTodo.map((task)=>(
          <Message
          id={task.id}
          key={task.id}
          title={task.data.title}
          description={task.data.description}
        ></Message>
        ))}
        </div>  */}
        <div className="message-box">
          {filteredTodo.map((task) => (
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
