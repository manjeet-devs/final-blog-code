import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategory } from "../redux/slice/categorySlice";

export default function NewCategoryForm() {
  const dispatch = useDispatch();

  // 🔹 State for form fields
  const [categoryData, setCategoryData] = useState({
    name: "",
    slug: "",
    metaTitle: "",
    metaDescription: "",
    parentName: "",
    status: "active",
    featureImage: null, // For file upload
  });

  // 🔹 Handle input change
  const handleChange = (e) => {
     setCategoryData({ ...categoryData, [e.target.name]: e.target.value }); 
    };

  // 🔹 Handle file upload
  const handleFileChange = (e) => {
    setCategoryData({ ...categoryData, featureImage: e.target.files[0] });
  };

  // 🔹 Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dispatch action to create category
    dispatch(createCategory(categoryData));

    // Clear form fields
    setCategoryData({
      name: "",
      slug: "",
      metaTitle: "",
      metaDescription: "",
      parentCategory: "",
      status: "active",
      featureImage: null,
    });
  };



  return (
    <div className=" mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Add New Category</h2>

      {/* {error && <p className="text-red-500 text-sm mb-2">{error}</p>} */}
      {/* {success && <p className="text-green-500 text-sm mb-2">{success}</p>} */}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category Name */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Category Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-purple-500"
            placeholder="Enter category name"
            name="name"
            value={categoryData.name}
            onChange={handleChange}
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Slug (URL)</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-purple-500"
            placeholder="category-name"
            name="slug"
            value={categoryData.slug}
            onChange={handleChange}
          />
        </div>

        {/* Parent Category (Dropdown) */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Parent Category</label>
          <select
            className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-purple-500"
            value={categoryData.parentName}
            onChange={handleChange}
            name="parentName"
          >
            <option value="">None (Top-Level Category)</option>
            <option value="technology">Technology</option>
            <option value="health">Health & Wellness</option>
            <option value="finance">Finance</option>
            <option value="travel">Travel</option>
          </select>
        </div>

        {/* SEO Meta Title */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">SEO Meta Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-purple-500"
            placeholder="Best Tech News in 2025"
            name="metaTitle"
            value={categoryData.metaTitle}
            onChange={handleChange}
          />
        </div>

        {/* SEO Meta Description */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">SEO Meta Description</label>
          <textarea
            className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-purple-500"
            placeholder="This category contains the latest updates in technology..."
            rows="3"
            name="metaDescription"
            value={categoryData.metaDescription}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Status (Active/Inactive) */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
            Status
          </label>
          <select
            name="status" // Ensure the name attribute is set
            className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-purple-500"
            value={categoryData.status} // Assuming categoryData is the state object
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>


        {/* Feature Image Upload */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Feature Image</label>
          <input
            type="file"
            name="featureImage"
            className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-purple-500"
            onChange={handleFileChange}
          />
          {categoryData.featureImage && <p className="text-gray-500 text-sm mt-1">Selected: {categoryData.featureImage.name}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
          Add Category
        </button>
      </form>
    </div>
  );
}
