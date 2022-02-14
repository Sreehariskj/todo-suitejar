import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import AuthContextProvider from "./store/AuthContext";
import TodoContextProvider from "./store/TodoContext";

ReactDOM.render(
  <React.StrictMode>
    <TodoContextProvider>
      <AuthContextProvider>
        <Router>
          <App />
        </Router>
      </AuthContextProvider>
    </TodoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
