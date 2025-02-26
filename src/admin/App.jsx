import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import Sidebar from './components/SideBar';
import routes from "../routes/adminRoute";
import Navbar from "./components/Navbar";
import './style/styleSheet.css';


function AdminApp() {
  const [sidebarOpen, setSidebarOpen] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const isDarkMode =
      localStorage.getItem("darkMode") === "true" ||
      (!("darkMode" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <Router>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className={`flex ${darkMode ? "dark" : ""}`}>
        <div className="flex flex-1">
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          <main className="flex-1 dark:bg-gray-900 p-4 ">
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default AdminApp;
