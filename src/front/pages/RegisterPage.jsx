import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { registerUser } from "../api/auth";
import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await registerUser(formData);
  //     alert("Registration successful! Please log in.");
  //     navigate("/login");
  //   } catch (error) {
  //     alert(error.response.data.error);
  //   }
  // };

  return (
    <div className="space-y-6 max-w-2xl mx-auto p-4 mt-10 mb-10">
      <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-100 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-3xl sm:text-4xl font-bold">Sign up</h1>
          <p className="text-sm dark:text-gray-600">Create a new account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-violet-400 focus:border-violet-500 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="john.doe@example.com"
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-violet-400 focus:border-violet-500 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block mb-2 text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-violet-400 focus:border-violet-500 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>

          {/* Sign-up Button */}
          <div className="space-y-2">
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-white hover:bg-violet-700"
            >
              Sign up
            </button>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Already have an account?
              <Link to="/login" className="ml-1 hover:underline text-violet-600">
                Sign in
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;