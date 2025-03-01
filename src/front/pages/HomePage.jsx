import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ArrowUp, MessageCircle } from "lucide-react";
import LatestBlogCard from '../components/LatestBlogCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
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
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [visiblePosts, setVisiblePosts] = useState(2);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisible) => prevVisible + 2);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Slider for Latest Blog Cards */}
      <div className=' '>
      <Slider {...sliderSettings} className="p-3 mb-10">
        <LatestBlogCard title="Exploring React Best Practices" excerpt="Discover the essential techniques..." image="https://source.unsplash.com/400x300/?technology,blog" author="John Doe" date="Feb 26, 2025" />
        <LatestBlogCard title="Mastering Tailwind CSS" excerpt="Learn how to make the most of Tailwin." image="https://source.unsplash.com/400x300/?design,css" author="Jane Smith" date="Feb 27, 2025" />
        <LatestBlogCard title="Mastering Tailwind CSS" excerpt="Learn how to make the most of Tailwin." image="https://source.unsplash.com/400x300/?design,css" author="Jane Smith" date="Feb 27, 2025" />
        <LatestBlogCard title="Mastering Tailwind CSS" excerpt="Learn how to make the most of Tailwin." image="https://source.unsplash.com/400x300/?design,css" author="Jane Smith" date="Feb 27, 2025" />
        <LatestBlogCard title="Mastering Tailwind CSS" excerpt="Learn how to make the most of Tailwin." image="https://source.unsplash.com/400x300/?design,css" author="Jane Smith" date="Feb 27, 2025" />
        <LatestBlogCard title="Mastering Tailwind CSS" excerpt="Learn how to make the most of Tailwin." image="https://source.unsplash.com/400x300/?design,css" author="Jane Smith" date="Feb 27, 2025" />
        <LatestBlogCard title="The Future of JavaScript" excerpt="Explore what's coming next in Jat..." image="https://source.unsplash.com/400x300/?javascript,code" author="Alex Brown" date="Feb 28, 2025" />
      </Slider>
      </div>


      {/* Blog Posts */}
      <div className="space-y-6">
        {posts.slice(0, visiblePosts).map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-md mb-6" />
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center">
                <button className="text-gray-500 hover:text-red-500">
                  <ArrowUp size={24} />
                </button>
                <span className="text-lg font-bold">{post.upvotes}</span>
              </div>
              <div className="flex-1">
                <Link to={`/r/${post.subreddit}`} className="text-sm text-blue-500">r/{post.subreddit}</Link>
                <Link to={`/post/${post.id}`} className="block text-2xl font-semibold hover:underline">
                  {post.title}
                </Link>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{post.description}</p>
                <div className="mt-4 flex items-center text-gray-500">
                  <MessageCircle size={20} className="mr-2" />
                  <span className="text-md">{post.comments} Comments</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visiblePosts < posts.length && (
        <div className="text-center mt-6">
          <button onClick={loadMorePosts} className="px-5 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
