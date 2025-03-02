import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ArticlePage = () => {
  // Mock article data (replace with data from an API)
  const article = {
    id: 1,
    title: "Getting Started with React",
    author: "John Doe",
    date: "October 10, 2023",
    content:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently. React is widely used in modern web development due to its simplicity and performance.",
    image: "https://via.placeholder.com/1200x600",
    likes: 42,
    comments: [
      // Initial comments (first batch)
      {
        id: 1,
        author: "Jane Smith",
        date: "October 11, 2023",
        content: "Great article! Very helpful for beginners.",
      },
      {
        id: 2,
        author: "Mike Johnson",
        date: "October 12, 2023",
        content: "I love how React simplifies state management.",
      },
      // Additional comments (second batch)
      {
        id: 3,
        author: "Alice Brown",
        date: "October 13, 2023",
        content: "This article helped me understand React hooks better.",
      },
      {
        id: 4,
        author: "Bob White",
        date: "October 14, 2023",
        content: "Can you write more about React context?",
      },
      // More comments can be added here...
    ],
  };

  
  const [likes, setLikes] = useState(article.likes);
  const [comments, setComments] = useState(article.comments.slice(0, 4)); 
  const [newComment, setNewComment] = useState("");
  const [visibleComments, setVisibleComments] = useState(2); 
  const commentsPerPage = 2; 

  // Handle like button click
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Handle adding a new comment
  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    const comment = {
      id: comments.length + 1,
      author: "Current User", // Replace with logged-in user's name
      date: new Date().toLocaleDateString(),
      content: newComment,
    };

    setComments([comment, ...comments]); // Add new comment at the top
    setNewComment("");
  };

  // Handle "Load More Comments" button click
  const handleLoadMoreComments = () => {
    setVisibleComments((prev) => prev + commentsPerPage);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Article Image */}
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-96 object-cover rounded-lg"
      />

      {/* Article Title */}
      <h1 className="text-4xl font-bold">{article.title}</h1>

      {/* Article Metadata */}
      <div className="flex items-center space-x-4 text-gray-600">
        <span>By {article.author}</span>
        <span>•</span>
        <span>{article.date}</span>
      </div>

      {/* Article Content */}
      <p className="text-gray-700 leading-relaxed">{article.content}</p>

      {/* Like Button */}
      <div className="flex items-center space-x-2">
        <button
          onClick={handleLike}
          className="flex items-center space-x-1 text-violet-600 hover:text-violet-700"
        >
          <span>👍</span>
          <span>Like</span>
        </button>
        <span className="text-gray-600">{likes} likes</span>
      </div>

      {/* Comments Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Comments</h2>

        {/* Add Comment Form */}
        <form onSubmit={handleAddComment} className="space-y-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-violet-400 focus:border-violet-500 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            rows="3"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700"
          >
            Add Comment
          </button>
        </form>

        {/* Display Comments */}
        <div className="space-y-4">
          {comments.slice(0, visibleComments).map((comment) => (
            <div key={comment.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{comment.author}</span>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-700 mt-2">{comment.content}</p>
            </div>
          ))}
        </div>

        {/* Load More Comments Button */}
        {visibleComments < comments.length && (
          <button
            onClick={handleLoadMoreComments}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Load More Comments
          </button>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;