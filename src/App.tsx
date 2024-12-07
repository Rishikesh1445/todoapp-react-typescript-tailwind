import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNav from "./components/sidebar";
import TodoApp from "./components/todoapp";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex">
        <SideNav />
        <div className="ml-12 flex-1 p-4">
          <Routes>
            <Route path="/" element={<TodoApp />} />
            <Route path="/profile" element={<div>Profile Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} />
            <Route path="/groceries" element={<div>Groceries Page</div>} />
            <Route path="/calendar" element={<div>Calendar Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
