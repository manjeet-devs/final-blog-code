import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const AboutPage = () => {
  // Example: Accessing state from Redux store
  const user = useSelector((state) => state.user); // Assuming you have a `user` slice in your Redux store
  const dispatch = useDispatch(); // For dispatching actions

  // Example: Function to handle a button click
  const handleButtonClick = () => {
    dispatch({ type: "USER_LOGGED_IN", payload: { name: "John Doe" } }); // Example action
  };

  return (
    <div className="container mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-8">About Our Blog System</h1>

      {/* Introduction Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Our Blog</h2>
        <p className="text-gray-700 leading-relaxed">
          Our blog system is designed to provide a platform for sharing knowledge, insights, and ideas about technology, web development, and programming. Whether you're a beginner or an experienced developer, our blog offers a wide range of articles to help you stay updated and improve your skills.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to create a community-driven platform where developers can learn, share, and grow together. We aim to provide high-quality, easy-to-understand content that empowers individuals to build amazing projects and solve real-world problems.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center">John Doe</h3>
            <p className="text-gray-600 text-center">Founder & Lead Developer</p>
            <p className="text-gray-700 text-center mt-2">
              John is passionate about building scalable web applications and sharing his knowledge with the community.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center">Jane Smith</h3>
            <p className="text-gray-600 text-center">Content Strategist</p>
            <p className="text-gray-700 text-center mt-2">
              Jane specializes in creating engaging and informative content that resonates with our audience.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center">Mike Johnson</h3>
            <p className="text-gray-600 text-center">UI/UX Designer</p>
            <p className="text-gray-700 text-center mt-2">
              Mike focuses on creating intuitive and visually appealing designs for our blog platform.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-gray-700 mb-6">
          We invite you to explore our blog, share your thoughts, and become a part of our growing community. Together, we can learn, grow, and innovate.
        </p>

        {/* Example: Display user name if logged in */}
        {user ? (
          <p className="text-green-600 mb-4">Welcome back, {user.name}!</p>
        ) : (
          <p className="text-red-600 mb-4">Please log in to join the community.</p>
        )}

        {/* Example: Button to dispatch an action */}
        <button
          onClick={handleButtonClick}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 mr-4"
        >
          Simulate Login
        </button>

        {/* Link to another page */}
        <Link
          to="/blog"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Explore Blog
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;