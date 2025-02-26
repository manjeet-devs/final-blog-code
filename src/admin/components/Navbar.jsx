import { Moon, Sun, Bell, Menu } from "lucide-react";
import React from "react";

export default function Navbar({ setSidebarOpen, darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50  dark:bg-gray-800 shadow-md p-4 flex items-center justify-between lg:px-6">
      <div className="flex items-center w-full">
        <button className="lg:hidden text-gray-600 dark:text-gray-300 p-2" onClick={() => setSidebarOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>

        <div className="flex items-center space-x-3 sm:space-x-4 ml-auto">
          <button
            className="text-gray-600 dark:text-gray-300 p-2 hover:text-gray-900 dark:hover:text-white"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button className="text-gray-600 dark:text-gray-300 p-2 hover:text-gray-900 dark:hover:text-white">
            <Bell className="h-5 w-5" />
          </button>

          <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
        </div>
      </div>
    </header>
  );
}
