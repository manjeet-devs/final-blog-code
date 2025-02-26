import React from "react";
import { useState } from "react";

function Product() {
  const [mainImage, setMainImage] = useState("https://via.placeholder.com/400x400");

  const thumbnails = [
    "https://via.placeholder.com/100x100",
    "https://via.placeholder.com/200x200",
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/400x400",
  ];

  return (
    <section className="p-6">
      <div className="flex flex-col-reverse md:flex-row md:grid-cols-3 gap-6">
        {/* Small Images */}
        <div className="flex flex-col items-center md:w-1/4 p-4 space-y-4">
          {thumbnails.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 md:w-24 rounded-lg border border-gray-300 cursor-pointer hover:shadow-md transition"
              onClick={() => setMainImage(src)}
            />
          ))}
        </div>
        {/* Product Details */}
        <div className="md:w-1/2 md:order-3 p-4">
          <h1 className="text-3xl font-bold mb-4">Product Title</h1>
          <p className="text-gray-600 mb-4">Product ID: 12345</p>
          <p className="text-2xl text-green-600 font-semibold mb-4">$99.99</p>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Get Quotes
          </button>
        </div>
        {/* Main Product Image */}
        <div className="md:w-1/2 md:order-1 p-4">
          <img src={mainImage} alt="Product" className="rounded-lg w-full object-cover shadow-lg" />
        </div>
      </div>
      {/* Product Description */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Product Description</h2>
        <p className="text-gray-700 leading-relaxed">
          This is where you provide a detailed description of the product. You can talk about the features, benefits, and any other relevant information
          that would help customers make an informed purchasing decision. Be sure to highlight the unique selling points and quality of the product.
        </p>
      </div>
    </section>
  );
}

export default Product;