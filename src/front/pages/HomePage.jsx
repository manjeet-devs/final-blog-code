import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counterSlice';


const HomePage = () => {
  // State for the banner slider
  const count = useSelector((state) => state.counter.value);

  // Dispatch actions
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerImages = [
    'https://cloud.appwrite.io/v1/storage/buckets/675d7a46003c9e8578cf/files/679602b9002034f0b8f0/view?project=675d44c90034f17d6493&project=675d44c90034f17d6493&mode=admin',
    'https://cloud.appwrite.io/v1/storage/buckets/675d7a46003c9e8578cf/files/679602b9002034f0b8f0/view?project=675d44c90034f17d6493&project=675d44c90034f17d6493&mode=admin',
    'https://cloud.appwrite.io/v1/storage/buckets/675d7a46003c9e8578cf/files/679602b9002034f0b8f0/view?project=675d44c90034f17d6493&project=675d44c90034f17d6493&mode=admin',
  ];

  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/300x300.png?text=Product+1',
      price: '$19.99',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/300x300.png?text=Product+2',
      price: '$29.99',
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/300x300.png?text=Product+3',
      price: '$39.99',
    },
  ];

  // Banner slider navigation
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? bannerImages.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="bg-gray-100">
      {/* Banner Slider */}
      <section className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {bannerImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <img src={image} alt={`Banner ${index + 1}`} className="w-full h-96 object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
          <button onClick={prevSlide} className="bg-gray-800 p-2 rounded-full hover:bg-gray-600">
            &#10094;
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white">
          <button onClick={nextSlide} className="bg-gray-800 p-2 rounded-full hover:bg-gray-600">
            &#10095;
          </button>
        </div>
      </section>

      {/* Product Listing */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link to={`/static/static${product.id}`} className="hover:text-gray-400">
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.price}</p>
                  <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
                    Add to Cart
                  </button>
                </div>
               </Link>
            ))}
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

export default HomePage;
