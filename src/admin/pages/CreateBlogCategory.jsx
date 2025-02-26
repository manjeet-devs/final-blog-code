import React, { useState } from "react";

export default function NewCategoryForm() {
  const [categoryName, setCategoryName] = useState("");
  const [slug, setSlug] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [status, setStatus] = useState("active");
  const [featureImage, setFeatureImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFeatureImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categoryName.trim()) {
      setError("Category name is required.");
      return;
    }

    // Simulate category submission (Replace with Appwrite API later)
    console.log({
      categoryName,
      slug,
      metaTitle,
      metaDescription,
      parentCategory,
      status,
      featureImage,
    });

    // Reset state
    setCategoryName("");
    setSlug("");
    setMetaTitle("");
    setMetaDescription("");
    setParentCategory("");
    setStatus("active");
    setFeatureImage(null);
    setError("");
    setSuccess("Category added successfully!");

    setTimeout(() => setSuccess(""), 3000); // Clear success message after 3 seconds
  };

  return (
    <div className=" mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Add New Category</h2>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      {success && <p className="text-green-500 text-sm mb-2">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category Name */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Category Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-purple-500"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Slug (URL)</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-purple-500"
            placeholder="category-name"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>

        {/* Parent Category (Dropdown) */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Parent Category</label>
          <select
            className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-purple-500"
            value={parentCategory}
            onChange={(e) => setParentCategory(e.target.value)}
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
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
          />
        </div>

        {/* SEO Meta Description */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">SEO Meta Description</label>
          <textarea
            className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-purple-500"
            placeholder="This category contains the latest updates in technology..."
            rows="3"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Status (Active/Inactive) */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Status</label>
          <select
            className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-purple-500"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
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
            className="w-full p-2 border rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-purple-500"
            onChange={handleImageUpload}
          />
          {featureImage && <p className="text-gray-500 text-sm mt-1">Selected: {featureImage.name}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
          Add Category
        </button>
      </form>
    </div>
  );
}
