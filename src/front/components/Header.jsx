import { Link } from "react-router-dom";
import { Bell, MessageCircle, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white p-3 border-b border-gray-400 shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <Link to="/" className="text-xl font-bold text-gray-900">LOGO</Link>
      </div>

      {/* Center: Search Bar */}
      <div className="flex flex-grow max-w-md bg-gray-100 p-2 rounded-lg items-center">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search Reddit"
          className="bg-transparent outline-none px-2 w-full"
        />
      </div>

      {/* Right: Notifications & Login */}
      <div className="flex items-center gap-3">
        <Bell size={20} className="cursor-pointer" />
        <MessageCircle size={20} className="cursor-pointer" />
        <Link to="/login" className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg hover:bg-gray-200">
          <User size={18} /> Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
