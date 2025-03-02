import React from "react";
import LatestBlogCard from '../components/LatestBlogCard';

const CategoryPage = () => {
  const initialPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      description: "React is a JavaScript library for building user interfaces...",
      subreddit: "reactjs",
      upvotes: 120,
      comments: 534,
      image: "https://via.placeholder.com/1200x600",
    },
    {
      id: 2,
      title: "Tailwind CSS vs Bootstrap: Which is Better?",
      description: "Tailwind CSS is a utility-first framework...",
      subreddit: "webdev",
      upvotes: 95,
      comments: 420,
      image: "https://via.placeholder.com/1200x600",
    },
    {
      id: 3,
      title: "Understanding Redux: A Beginner’s Guide",
      description: "Redux helps manage state in large applications...",
      subreddit: "javascript",
      upvotes: 150,
      comments: 740,
      image: "https://via.placeholder.com/1200x600",
    },
    {
      id: 4,
      title: "Getting Started with React",
      description: "React is a JavaScript library for building user interfaces...",
      subreddit: "reactjs",
      upvotes: 120,
      comments: 534,
      image: "https://via.placeholder.com/1200x600",
    },
    {
      id: 5,
      title: "Tailwind CSS vs Bootstrap: Which is Better?",
      description: "Tailwind CSS is a utility-first framework...",
      subreddit: "webdev",
      upvotes: 95,
      comments: 420,
      image: "https://via.placeholder.com/1200x600",
    },
    {
      id: 6,
      title: "Understanding Redux: A Beginner’s Guide",
      description: "Redux helps manage state in large applications...",
      subreddit: "javascript",
      upvotes: 150,
      comments: 740,
      image: "https://via.placeholder.com/1200x600",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Banner Section */}
      <div className="w-full h-100 mb-5 bg-cover bg-center rounded-lg" >
        <img className="w-full h-100 object-cover" src="https://cdn.anscommerce.com/catalog/brandstore/Columbia/623-1740767400-promo-banner-march-25.jpg" alt="" />
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialPosts.map((post) => (
          <LatestBlogCard
            key={post.id}
            title={post.title}
            excerpt={post.description}
            image={post.image}
            author={post.subreddit}
            date={`${post.upvotes} upvotes · ${post.comments} comments`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;