import React from 'react';
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div className="bg-gray-100">

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <p className="text-lg text-gray-700 mb-8">
            At Your Store, we provide a range of services designed to help you get the most out of your experience with us. 
            From expert product consultations to reliable shipping, we’ve got you covered.
          </p>
        </div>
      </section>

      {/* Service List */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Offerings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <Link to="/product/new-page1" className="hover:text-gray-400">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Service 1" 
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600 mb-4">
                Our expert team offers personalized consultations to help you choose the best products for your needs.
              </p>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
                Learn More
              </button>
            </div>
            </Link>


            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Service 2" 
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Custom Orders</h3>
              <p className="text-gray-600 mb-4">
                We provide custom orders for specific needs, ensuring that you get exactly what you want.
              </p>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
                Learn More
              </button>
            </div>


            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Service 3" 
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600 mb-4">
                We offer reliable and fast shipping to ensure your products arrive safely and on time.
              </p>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
                Learn More
              </button>
            </div>


          </div>
        </div>
      </section>


    </div>
  );
};

export default ServicesPage;
