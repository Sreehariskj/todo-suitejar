import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Firebase/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useAuthContext } from "../store/AuthContext";
import Logo from "./Logo";

const Todo = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { userId, setUserId } = useAuthContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    // console.log('userid',userId);

    // -- redirect to login if not user --
    if (!user) return navigate("/login");

    setUserId(user?.uid);
  }, [user, navigate, setUserId]);

  // -- function to add new todo to firestore --
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "tasks"), {
        title: title,
        description: description,
        uid: userId,
        completed: false,
        favourite: false,
        deleted: false,
        created: Timestamp.now(),
      });
      setTitle("");
      setDescription("");
      // onClose()
    } catch (err) {
      alert(err);
    }
  };
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
          <Form className="" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 w-75 mx-auto" controlId="">
              <Form.Control
                required
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 w-75 mx-auto" controlId="">
              <Form.Control
                required
                type="text"
                value={description}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="mb-3 w-50">
              Add
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Todo;
