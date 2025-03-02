import { Link } from "react-router-dom";
import { Bell, MessageCircle, Search, User, Menu, X, ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white p-3 border-b border-gray-400 shadow-md dark:bg-gray-300">
      {/* Left: Logo & Navigation */}
      <div className="flex items-center gap-6">
        <Link to="/" className="text-xl font-bold text-gray-900">LOGO</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden ml-50 md:flex items-center gap-6">
          <Link to="/" className="hover:text-gray-600 px-3 py-1 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100">HOME</Link>

          {/* Blog Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setBlogDropdownOpen(!blogDropdownOpen)} 
              className="flex items-center gap-1 hover:text-gray-600 px-3 py-1 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100"
            >
              Blog <ChevronDown size={16} />
            </button>
            {blogDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg border p-2" onClick={() => setBlogDropdownOpen(!blogDropdownOpen)} >
                <Link to="/blog/technology" className="block px-3 py-2 hover:bg-gray-100">Technology</Link>
                <Link to="/blog/lifestyle" className="block px-3 py-2 hover:bg-gray-100">Lifestyle</Link>
                <Link to="/blog/business" className="block px-3 py-2 hover:bg-gray-100">Business</Link>
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-gray-600 px-3 py-1 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100">About</Link>
          <Link to="/services" className="hover:text-gray-600 px-3 py-1 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100">Services</Link>
        </nav>
      </div>

      {/* Right: Search Bar & Icons */}
      <div className="flex items-center gap-3">
        {/* Desktop Search Bar */}
        <div className="hidden md:flex mr-15 flex-grow max-w-md bg-gray-100 p-2 rounded-lg items-center">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search Blog"
            className="bg-transparent outline-none px-2 w-full"
          />
        </div>

        {/* Notifications & Login */}
        <MessageCircle size={20} className="cursor-pointer md:block mr-5" />
        <Link to="/login" className="flex items-center bg-gray-100 p-2 rounded-lg hover:bg-gray-200">
          <User size={18} /> Login
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden p-4">
          {/* Mobile Search Bar */}
          <div className="flex bg-gray-100 p-2 rounded-lg items-center mb-3">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search Blog"
              className="bg-transparent outline-none px-2 w-full"
            />
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col text-center">
            <Link to="/" className="hover:text-gray-600 px-3 py-1 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100" onClick={() => setMobileMenuOpen(false)}>Home</Link>

            {/* Blog Dropdown (Mobile) */}
            <div className="relative">
              <button 
                onClick={() => setBlogDropdownOpen(!blogDropdownOpen)} 
                className="w-full py-2 flex justify-center items-center hover:text-gray-600 px-3 py-1 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100"
              >
                Blog <ChevronDown size={16} className="ml-1" />
              </button>
              {blogDropdownOpen && (
                <div className="bg-white border rounded-lg mt-1" onClick={() => setBlogDropdownOpen(!blogDropdownOpen)} >
                  <Link to="/blog/technology" className="block py-2 hover:bg-gray-100">Technology</Link>
                  <Link to="/blog/lifestyle" className="block py-2 hover:bg-gray-100">Lifestyle</Link>
                  <Link to="/blog/business" className="block py-2 hover:bg-gray-100">Business</Link>
                </div>
              )}
            </div>

            <Link to="/about" className="py-2 hover:text-gray-600 px-3 py-1 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/services" className="py-2 hover:text-gray-600 px-3 py-1 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
