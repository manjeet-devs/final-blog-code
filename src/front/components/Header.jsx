import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-auto" />
          <Link to="/" className="hover:text-gray-400">
            <h1 className="text-xl md:text-2xl font-semibold">My Website</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/services" className="hover:text-gray-400">Services</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>

        {/* Search Bar (Desktop Only) */}
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white rounded-full py-2 pl-8 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 mt-2 p-4 rounded-lg">
          {/* Search Bar (Mobile Only) */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-700 text-white rounded-full py-2 pl-8 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Mobile Navigation */}
          <nav>
            <ul className="flex flex-col space-y-3 text-center">
              <li><Link to="/" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/about" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link to="/services" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Services</Link></li>
              <li><Link to="/contact" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
