import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider from './store/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <Router>
      <App />
    </Router>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
