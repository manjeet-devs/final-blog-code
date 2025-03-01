import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ArrowUp, MessageCircle } from "lucide-react";
import LatestBlogCard from '../components/LatestBlogCard';
import BlogPostCard from '../components/BlogPostCard';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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

  const [posts, setPosts] = useState(initialPosts);
  const [visiblePosts, setVisiblePosts] = useState(2);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisible) => prevVisible + 2);
  };

  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2, // Default for larger screens
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 1024, // Tablets
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768, // Mobile devices
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 480, // Small screens
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         dots: true,
  //       },
  //     },
  //   ],
  // };



  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Slider for Latest Blog Cards */}
      {/* <div className=' '>
      <Slider {...sliderSettings} className="p-3 mb-10">
        <LatestBlogCard title="Exploring React Best Practices" excerpt="Discover the essential techniques..." image="https://source.unsplash.com/400x300/?technology,blog" author="John Doe" date="Feb 26, 2025" />
        <LatestBlogCard title="Mastering Tailwind CSS" excerpt="Learn how to make the most of Tailwin." image="https://source.unsplash.com/400x300/?design,css" author="Jane Smith" date="Feb 27, 2025" />
        <LatestBlogCard title="Mastering Tailwind CSS" excerpt="Learn how to make the most of Tailwin." image="https://source.unsplash.com/400x300/?design,css" author="Jane Smith" date="Feb 27, 2025" />
        <LatestBlogCard title="Mastering Tailwind CSS" excerpt="Learn how to make the most of Tailwin." image="https://source.unsplash.com/400x300/?design,css" author="Jane Smith" date="Feb 27, 2025" />
        <LatestBlogCard title="Mastering Tailwind CSS" excerpt="Learn how to make the most of Tailwin." image="https://source.unsplash.com/400x300/?design,css" author="Jane Smith" date="Feb 27, 2025" />
        <LatestBlogCard title="Mastering Tailwind CSS" excerpt="Learn how to make the most of Tailwin." image="https://source.unsplash.com/400x300/?design,css" author="Jane Smith" date="Feb 27, 2025" />
        <LatestBlogCard title="The Future of JavaScript" excerpt="Explore what's coming next in Jat..." image="https://source.unsplash.com/400x300/?javascript,code" author="Alex Brown" date="Feb 28, 2025" />
      </Slider>
      </div> */}


      {/* Blog Posts */}
      <div className="space-y-6">
        {posts.slice(0, visiblePosts).map((post) => (
          <BlogPostCard
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            subreddit={post.subreddit}
            upvotes={post.upvotes}
            comments={post.comments}
            image={post.image}
            date="Feb 28, 2025 12:00:00"  // You can replace this with dynamic dates from the database
          />
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
