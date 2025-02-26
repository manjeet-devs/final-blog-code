import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const BlogCategory = () => {
  const [blogCategories, setBlogCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from Appwrite (Replace with actual API call)
    const fetchCategories = async () => {
      const data = [
        { id: 1, name: "Technology", date: "Feb 25, 2025", status: "Active" },
        { id: 2, name: "Health & Wellness", date: "Feb 20, 2025", status: "Active" },
        { id: 3, name: "Travel", date: "Feb 18, 2025", status: "Inactive" },
        { id: 4, name: "Food & Recipes", date: "Feb 15, 2025", status: "Active" },
        { id: 5, name: "Finance", date: "Feb 12, 2025", status: "Inactive" }
      ];
      setBlogCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-left text-gray-800 dark:text-white">
      <h2 className="text-2xl font-semibold mb-4">Blog Categories</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="text-left p-3">ID</th>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3 hidden sm:table-cell">Date</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogCategories.map((category) => (
              <tr key={category.id} className="border-t border-gray-300 dark:border-gray-700">
                <td className="p-3">{category.id}</td>
                <td className="p-3">{category.name}</td>
                <td className="p-3 hidden sm:table-cell">{category.date}</td>
                <td className={`p-3 ${category.status === "Active" ? "text-green-500" : "text-red-500"}`}>{category.status}</td>
                <td className="p-3 flex gap-3">
                 <Link to={`/admin/categories/${category.id}`} ><button className="text-blue-500 hover:text-blue-700"><FaEdit /></button></Link>
                  <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogCategory;
