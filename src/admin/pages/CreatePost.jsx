import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function CreatePost() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = (data) => {
    console.log("Post Data:", data);
    // Here, you would send data to Appwrite or your backend
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="dark:bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Create New Post</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
            placeholder="Enter post title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        {/* Slug */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Slug (URL)</label>
          <input
            {...register("slug", { required: "Slug is required" })}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
            placeholder="post-title-url"
          />
          {errors.slug && <p className="text-red-500 text-sm">{errors.slug.message}</p>}
        </div>

        {/* Content */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Content</label>
          <textarea
            {...register("content", { required: "Content is required" })}
            className="w-full h-32 px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
            placeholder="Write your content here..."
          />
          {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Excerpt (Short Description)</label>
          <textarea
            {...register("excerpt")}
            className="w-full h-20 px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
            placeholder="Write a short summary..."
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Category</label>
          <select {...register("category", { required: "Category is required" })} className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white">
            <option value="">Select category</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Business">Business</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        {/* Tags */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Tags</label>
          <input
            {...register("tags")}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
            placeholder="Enter tags (comma-separated)"
          />
        </div>

        {/* Estimated Reading Time */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Estimated Reading Time (minutes)</label>
          <input
            type="number"
            {...register("readingTime")}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
            placeholder="e.g., 5"
          />
        </div>

        {/* SEO Meta Title */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">SEO Meta Title</label>
          <input
            {...register("metaTitle")}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
            placeholder="Best Tech News in 2025"
          />
        </div>

        {/* SEO Meta Description */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">SEO Meta Description</label>
          <textarea
            {...register("metaDescription")}
            className="w-full h-20 px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
            placeholder="Brief description for SEO..."
          ></textarea>
        </div>

        {/* Featured Image */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Featured Image</label>
          <input
            type="file"
            {...register("image")}
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
          />
          {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 w-40 h-40 object-cover rounded-lg" />}
        </div>

        {/* Post Status */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Post Status</label>
          <select {...register("status")} className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white">
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
          Create Post
        </button>
      </form>
    </div>
  );
}
