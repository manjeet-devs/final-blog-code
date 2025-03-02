import React from 'react';
import { Link } from "react-router-dom";

function Footer(){
  return (
    <footer className="p-8 bg-gray-400">
      {/* <hr/> */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Your Company</h3>
            <p className="text-gray-400">1234 Your Street, City, Country</p>
            <p className="text-gray-400">info@yourcompany.com</p>
            <p className="text-gray-400">+1 234 567 890</p>
          </div>

          {/* Vertical Menu */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
              <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Instagram</a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
            <p className="">Get the latest updates from our company.</p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md bg-gray-700 text-white w-full mb-4"
              />
              <button type="submit" className="w-full p-2 rounded-md bg-blue-600 text-white hover:bg-blue-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
