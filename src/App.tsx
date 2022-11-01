import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./css/App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import Todo from "./pages/todo";

export default function App() {
  return (
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/todo" element={<Todo/>} />
          </Routes>
        </Router>
      </div>
  );
}
