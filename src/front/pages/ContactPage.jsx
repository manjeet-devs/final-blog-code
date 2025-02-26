import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
          Contact Us
        </h2>

        <form action="#" method="POST">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your message"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Or reach us at{' '}
            <a href="tel:+1234567890" className="text-indigo-600 hover:underline">
              +1 (234) 567-890
            </a>
            <br />
            or email us at{' '}
            <a href="mailto:contact@company.com" className="text-indigo-600 hover:underline">
              contact@company.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
