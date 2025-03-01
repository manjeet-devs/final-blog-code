import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Flame, Plus, User, ChevronDown } from "lucide-react";

const Sidebar = () => {
  const [subreddits] = useState(["reactjs", "javascript", "webdev", "tailwindcss"]);

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white p-4 border-r border-gray-200 shadow-md">
      {/* Logo */}
      <h2 className="text-lg font-bold text-gray-900 mb-4">Reddit</h2>

      {/* Main Links */}
      <nav className="mb-4">
        <ul>
          <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200">
            <Link to="/" className="flex items-center gap-2 w-full">
              <Home size={18} /> <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200">
            <Link to="/popular" className="flex items-center gap-2 w-full">
              <Flame size={18} /> <span>Popular</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Subreddits */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-500">YOUR SUBREDDITS</h3>
        <ul>
          {subreddits.map((sub, index) => (
            <li key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200">
              <Link to={`/r/${sub}`} className="flex items-center gap-2 w-full">
                <ChevronDown size={18} /> <span>r/{sub}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Create Post */}
      <Link to="/submit" className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
        <Plus size={18} /> Create Post
      </Link>

      {/* User Login */}
      <div className="mt-4">
        <Link to="/login" className="w-full flex items-center gap-2 bg-gray-100 p-2 rounded-lg hover:bg-gray-200">
          <User size={18} /> Sign In / Register
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
