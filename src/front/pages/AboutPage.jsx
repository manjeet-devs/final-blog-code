import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counterSlice';

const AboutPage = () => {
    const count = useSelector((state) => state.counter.value);
  
    // Dispatch actions
    const dispatch = useDispatch();
  return (
    <div className="bg-gray-100">

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">About Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            We are a passionate team committed to bringing you the best products. 
            Our mission is to provide high-quality items at affordable prices, and we pride ourselves on exceptional customer service.
          </p>
          <div className="flex justify-center">
            <img 
              src="https://via.placeholder.com/800x400.png?text=About+Us+Image" 
              alt="About Us" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <Link to="/product/new-page1" className="hover:text-gray-400">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member 1" 
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-gray-500 mt-2">
                John is the visionary behind our company. He oversees the strategy and direction of the brand.
              </p>
            </div>
            </Link>

            <Link to="/new-page21111" className="hover:text-gray-400">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member 2" 
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Marketing Director</p>
              <p className="text-gray-500 mt-2">
                Jane is responsible for all things marketing, ensuring our message reaches customers worldwide.
              </p>
            </div>
            </Link>

            <Link to="/category123" className="hover:text-gray-400">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member 3" 
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Sarah Lee</h3>
              <p className="text-gray-600">Product Manager</p>
              <p className="text-gray-500 mt-2">
                Sarah leads the team in developing innovative products that exceed customer expectations.
              </p>
            </div>
            </Link>

          </div>
        </div>
      </section>

            <div className="flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4">
              <h2 className="text-2xl font-semibold text-gray-700">Counter</h2>
              
              <div className="flex items-center space-x-4">
                <button
                  className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
                  aria-label="Decrement value"
                  onClick={() => dispatch(decrement())}
                >
                  -
                </button>
                
                <span className="text-3xl font-bold text-gray-800">{count}</span>
      
                <button
                  className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
                  aria-label="Increment value"
                  onClick={() => dispatch(increment())}
                >
                  +
                </button>
              </div>
      
              <button
                className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                aria-label="Increment by 5"
                onClick={() => dispatch(incrementByAmount(5))}
              >
                Increment by 5
              </button>
            </div>
          </div>

    </div>
  );
};

export default AboutPage;
