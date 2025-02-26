import { 
  LayoutGrid, Settings, BarChart2, X, ChevronDown, ChevronRight, 
  FileText, List, Tag, User, Lock, Bell,ClipboardList
} from "lucide-react";
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SideBar({ open, setOpen }) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (key) => {
    setExpanded((prev) => (prev === key ? null : key));
  };

  return (
    <aside
    className={`${
      open ? "translate-x-0" : "-translate-x-full"
    } fixed inset-y-0 left-0 z-50 w-64 dark:bg-gray-800 text-gray-900 dark:text-white p-6 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:sticky lg:top-0 h-screen overflow-y-auto flex flex-col`}
  >
      {/* Close Button */}
      

      {/* Logo */}
      <div className="flex items-center mb-5">
      
        <div className="w-8 h-8 bg-purple-600 rounded-full mr-3"><User className="mr-3 h-7 w-8" /></div>
        <h1 className="text-xl font-bold">Blog Admin</h1>
        <button className="lg:hidden top-7 absolute top-4 right-4 text-gray-600 dark:text-gray-300" onClick={() => setOpen(false)} >
        <X className=" h-6 w-6" />
      </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mb-3">
        <NavItem to="/admin" icon={<LayoutGrid className="mr-3 h-5 w-5" />} text="Dashboard" active={location.pathname === "/admin"} />
      {/* User Management */}
        <div>
          <button
            onClick={() => toggleExpand("user")}
            className={`flex items-center p-2 rounded-lg w-full text-left text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 mb-1 mt-1`}
          >
            <User className="mr-3 h-5 w-5" /> User Management
            {expanded === "user" ? <ChevronDown className="ml-auto h-4 w-4" /> : <ChevronRight className="ml-auto h-4 w-4" />}
          </button>
          {expanded === "user" && (
            <div className="ml-6 space-y-1">
              <NavItem to="/admin/user" icon={<List className="mr-3 h-5 w-5" />} text="All Users" active={location.pathname === "/admin/user"} />
              <NavItem to="/admin/user/comment" icon={<ClipboardList className="mr-3 h-5 w-5" />} text="Post Comment" active={location.pathname === "/admin/user/comment"} />
              <NavItem to="/admin/user/post" icon={<FileText className="mr-3 h-5 w-5" />} text="User Post" active={location.pathname === "/admin/user/post"} />
            </div>
          )}
        </div>
        {/* Posts Management */}
        <div>
          <button
            onClick={() => toggleExpand("posts")}
            className={`flex items-center p-2 rounded-lg w-full text-left text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 mb-1`}
          >
            <FileText className="mr-3 h-5 w-5" /> Posts Management
            {expanded === "posts" ? <ChevronDown className="ml-auto h-4 w-4" /> : <ChevronRight className="ml-auto h-4 w-4" />}
          </button>
          {expanded === "posts" && (
            <div className="ml-6 space-y-1">
              <NavItem to="/admin/posts" icon={<List className="mr-3 h-5 w-5" />} text="Admin Posts" active={location.pathname === "/admin/posts"} />
              <NavItem to="/admin/posts/new" icon={<FileText className="mr-3 h-5 w-5" />} text="Create Post" active={location.pathname === "/admin/posts/new"} />
            </div>
          )}
        </div>

        {/* Categories Management */}
        <div className="mb-1">
          <button
            onClick={() => toggleExpand("categories")}
            className={`flex items-center p-2 rounded-lg w-full text-left text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 `}
          >
            <Tag className="mr-3 h-5 w-5" />Blog Categories
            {expanded === "categories" ? <ChevronDown className="ml-auto h-4 w-4" /> : <ChevronRight className="ml-auto h-4 w-4" />}
          </button>
          {expanded === "categories" && (
            <div className="ml-6 space-y-1">
              <NavItem to="/admin/categories" icon={<List className="mr-3 h-5 w-5" />} text="All Categories" active={location.pathname === "/admin/categories"} />
              <NavItem to="/admin/categories/new" icon={<Tag className="mr-3 h-5 w-5" />} text="Add Category" active={location.pathname === "/admin/categories/new"} />
            </div>
          )}
        </div>

        <NavItem to="/admin/analytics" icon={<BarChart2 className="mr-3 h-5 w-5" />} text="Analytics" active={location.pathname === "/admin/analytics"} />


<div>
  <button
    onClick={() => toggleExpand("settings")}
    className={`flex items-center p-2 rounded-lg w-full text-left mb-1 ${
      expanded === "settings"
        ? "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
        : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
    }`}
  >
    <Settings className="mr-3 h-5 w-5" /> Settings
    {expanded === "settings" ? (
      <ChevronDown className="ml-auto h-4 w-4" />
    ) : (
      <ChevronRight className="ml-auto h-4 w-4" />
    )}
  </button>
  {expanded === "settings" && (
    <div className="ml-6 space-y-1">
      <NavItem to="/admin/settings/profile" icon={<User className="mr-3 h-5 w-5" />} text="Profile" active={location.pathname === "/admin/settings/profile"} />
      <NavItem to="/admin/settings/security" icon={<Lock className="mr-3 h-5 w-5" />} text="Security" active={location.pathname === "/admin/settings/security"} />
      <NavItem to="/admin/settings/notifications" icon={<Bell className="mr-3 h-5 w-5" />} text="Notifications" active={location.pathname === "/admin/settings/notifications"} />
      <NavItem to="/admin/settings/user-roles" icon={<User className="mr-3 h-5 w-5" />} text="User Roles" active={location.pathname === "/admin/settings/user-roles"} />
    </div>
  )}
</div>

      </nav>

      {/* Upgrade Button */}
      <button className="bg-purple-600 py-2 rounded-lg mb-5">
  Upgrade Plan
</button>

    </aside>
  );
}

function NavItem({ to, icon, text, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center p-2 rounded-lg  ${
        active
          ? "bg-purple-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400"
          : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
      }`}
    >
      {icon}
      {text}
    </Link>
  );
}
