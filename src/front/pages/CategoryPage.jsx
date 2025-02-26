import React from "react";



const CategoryPage = () => {

  const categories = [
    { name: "Skincare", image: "https://via.placeholder.com/150", price: "20", rating: 4.5 },
    { name: "Haircare", image: "https://via.placeholder.com/150", price: "15", rating: 4.2 },
    { name: "Makeup", image: "https://via.placeholder.com/150", price: "25", rating: 4.8 },
    { name: "Fragrance", image: "https://via.placeholder.com/150", price: "30", rating: 4.6 },
    { name: "Body Care", image: "https://via.placeholder.com/150", price: "18", rating: 4.3 },
    { name: "Nail Care", image: "https://via.placeholder.com/150", price: "12", rating: 4.1 },
    { name: "Sun Protection", image: "https://via.placeholder.com/150", price: "22", rating: 4.7 },
    { name: "Men's Grooming", image: "https://via.placeholder.com/150", price: "19", rating: 4.4 },
    { name: "Beauty Tools", image: "https://via.placeholder.com/150", price: "28", rating: 4.6 },
    { name: "Bath & Shower", image: "https://via.placeholder.com/150", price: "16", rating: 4.2 },

  ];
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Product Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg text-center hover:shadow-xl transition flex flex-col items-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-32 object-cover rounded-md mb-3"
            />
            <h2 className="text-lg font-semibold">{category.name}</h2>
            <p className="text-gray-700">{category.price}</p>
            <p className="text-yellow-500">⭐ {category.rating}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
