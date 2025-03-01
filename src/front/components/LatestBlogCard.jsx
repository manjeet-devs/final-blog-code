import React from "react";

const LatestBlogCard = ({ title, excerpt, image, author, date }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2 text-sm">{excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>By {author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogCard;
