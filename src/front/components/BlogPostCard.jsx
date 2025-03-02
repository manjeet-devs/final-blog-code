import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, MessageCircle, Calendar } from "lucide-react";

const BlogPostCard = ({ id, title, description, subreddit, upvotes, comments, image, date }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-md mb-6" />
      <div className="flex items-start gap-6">
        <div className="flex flex-col items-center">
          <button className="text-gray-500 hover:text-red-500">
            <ArrowUp size={24} />
          </button>
          <span className="text-lg font-bold">{upvotes}</span>
        </div>
        <div className="flex-1">
          <Link to={`/r/${subreddit}`} className="text-sm text-blue-500">
            r/{subreddit}
          </Link>
          <Link to={`/post/${id}`} className="block text-2xl font-semibold hover:underline">
            {title}
          </Link>
          <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>

          {/* Publish Date */}
          <div className="mt-2 flex items-center text-gray-500">
            <Calendar size={18} className="mr-2" />
            <span className="text-sm">{date}</span>
          </div>

          <div className="mt-4 flex items-center text-gray-500">
            <MessageCircle size={20} className="mr-2" />
            <span className="text-md">{comments} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
