import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import Message from "./Message";
import { ArrowBack, Search } from "@material-ui/icons/";
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
  const { allTasks, setAllTasks } = useTodoContext();
  const { userId } = useAuthContext();
  const [currentTask, setCurrentTask] = useState(allTasks);
  const [search, setSearch] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [category, setCategory] = useState(null);
  const [filteredTodo, setFilteredTodo] = useState(currentTask);

  useEffect(() => {
    // console.log("current user:", userId);

    // -- retreive all user created tasks data in firestore
    const q = query(
      collection(db, "tasks"),
      where("uid", "==", userId),
      orderBy("created", "desc")
    );
    onSnapshot(q, (querySnapshot) =>
      setAllTasks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, [userId, setAllTasks]);

  useEffect(() => {
    // -- add function for list category
    setFilteredTodo(currentTask);
    if (category && category !== "deleted") {
      // console.log("called category", category);
      // setFilteredTodo(tasks);

      setFilteredTodo(
        currentTask.filter((task) =>
          task.data[category].toString().toLowerCase().includes("true")
        )
      );
      // console.log(filteredTodo)
      // setCategory(null)
    }
    if (category === "deleted") {
      // console.log("called category", category);
      // setFilteredTodo(tasks);

      setFilteredTodo(
        allTasks.filter((task) =>
          task.data.deleted.toString().toLowerCase().includes("true")
        )
      );
      // console.log(filteredTodo)
      // setCategory(null)
    }
  }, [category, setAllTasks, allTasks, currentTask]);

  // -- function get current task --
  useEffect(() => {
    setCurrentTask(
      allTasks.filter((task) => task.data.deleted.toString().includes("false"))
    );
    // console.log(currentTask)
  }, [allTasks]);

  // -- function to search task by title & description --
  const searchTodo = () => {
    setSearchValue(search);
    setFilteredTodo(currentTask);
    if (search) {
      setFilteredTodo(
        currentTask.filter(
          (task) =>
            task.data.title.toLowerCase().includes(search.toLowerCase()) ||
            task.data.description.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };

  // -- function to go back to list --
  const backToList = () => {
    setSearch("");
    setSearchValue("");
    setCategory("");
    setFilteredTodo(currentTask);
    // console.log('search is:',search);
  };
  return (
    <div className="todo-list">
      <div className="list-container px-4">
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
          {currentTask.map((task) => (
            <Message
            id={task.id}
            key={task.id}
            title={task.data.title}
            description={task.data.description}
            ></Message>
          ))}
        </div> */}
        <div className="message-box">
          {searchValue || category ? (
            <div className="d-flex align-items-center mb-5">
              <Button variant="transparent" onClick={backToList}>
                <ArrowBack fontSize="large" />
              </Button>
              <div className="d-flex align-items-center mx-auto">
                <h2 className="mb-0 mx-2">Filter</h2>
                {/* <Filter></Filter> */}
              </div>
            </div>
          ) : null}
          {filteredTodo.map((task) => (
            <Message
              id={task.id}
              key={task.id}
              title={task.data.title}
              description={task.data.description}
            ></Message>
          ))}
        </div>
        {filteredTodo.length === 0 && (
          <div>
            <h3 className="text-center text-secondary">Oops ! List is empty</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
