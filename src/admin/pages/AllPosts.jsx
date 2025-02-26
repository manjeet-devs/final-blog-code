import React from "react";

const dummyPosts = [
  {
    id: 1,
    title: "Exploring the Mountains",
    content: "A journey through the most beautiful peaks and valleys.",
    author: "John Doe",
    date: "Feb 25, 2025",
    image: "https://fastly.picsum.photos/id/831/200/300.jpg?hmac=IC6dJVWWVnJ-extXtn0D9QDwKwbQ-tA_M6UD2T9zUbQ"
  },
  {
    id: 2,
    title: "The Future of AI",
    content: "How artificial intelligence is shaping our world.",
    author: "Jane Smith",
    date: "Feb 20, 2025",
    image: "https://fastly.picsum.photos/id/831/200/300.jpg?hmac=IC6dJVWWVnJ-extXtn0D9QDwKwbQ-tA_M6UD2T9zUbQ"
  },
  {
    id: 3,
    title: "Healthy Living Tips",
    content: "Simple habits to lead a healthier life.",
    author: "Alex Johnson",
    date: "Feb 18, 2025",
    image: "https://fastly.picsum.photos/id/831/200/300.jpg?hmac=IC6dJVWWVnJ-extXtn0D9QDwKwbQ-tA_M6UD2T9zUbQ"
  },
  {
    id: 4,
    title: "The Wonders of Space",
    content: "Discover the mysteries of the universe.",
    author: "Emily Carter",
    date: "Feb 15, 2025",
    image: "https://fastly.picsum.photos/id/831/200/300.jpg?hmac=IC6dJVWWVnJ-extXtn0D9QDwKwbQ-tA_M6UD2T9zUbQ"
  },
  {
    id: 5,
    title: "Top 10 Coding Practices",
    content: "Enhance your coding skills with these best practices.",
    author: "Michael Lee",
    date: "Feb 12, 2025",
    image: "https://fastly.picsum.photos/id/831/200/300.jpg?hmac=IC6dJVWWVnJ-extXtn0D9QDwKwbQ-tA_M6UD2T9zUbQ"
  },
  {
    id: 6,
    title: "Traveling the World",
    content: "Experience different cultures and landscapes.",
    author: "Sarah Johnson",
    date: "Feb 10, 2025",
    image: "https://fastly.picsum.photos/id/831/200/300.jpg?hmac=IC6dJVWWVnJ-extXtn0D9QDwKwbQ-tA_M6UD2T9zUbQ"
  },
  {
    id: 7,
    title: "Mindfulness and Meditation",
    content: "How to find peace in your daily life.",
    author: "David Kim",
    date: "Feb 8, 2025",
    image: "https://fastly.picsum.photos/id/831/200/300.jpg?hmac=IC6dJVWWVnJ-extXtn0D9QDwKwbQ-tA_M6UD2T9zUbQ"
  },
  {
    id: 8,
    title: "The Rise of Electric Cars",
    content: "A look into the future of transportation.",
    author: "Sophia Brown",
    date: "Feb 5, 2025",
    image: "https://fastly.picsum.photos/id/831/200/300.jpg?hmac=IC6dJVWWVnJ-extXtn0D9QDwKwbQ-tA_M6UD2T9zUbQ"
  },
  {
    id: 9,
    title: "Delicious Homemade Recipes",
    content: "Easy and tasty meals you can make at home.",
    author: "Daniel Martinez",
    date: "Feb 3, 2025",
    image: "https://fastly.picsum.photos/id/831/200/300.jpg?hmac=IC6dJVWWVnJ-extXtn0D9QDwKwbQ-tA_M6UD2T9zUbQ"
  },
  {
    id: 10,
    title: "The Art of Photography",
    content: "Tips and tricks for capturing stunning photos.",
    author: "Olivia Wilson",
    date: "Feb 1, 2025",
    image: "https://fastly.picsum.photos/id/831/200/300.jpg?hmac=IC6dJVWWVnJ-extXtn0D9QDwKwbQ-tA_M6UD2T9zUbQ"
  }
];

const AllPosts = ({ posts = dummyPosts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition duration-300"
        >
          <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
          <p className="text-gray-600 text-sm mb-4">{post.content}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-xs">By {post.author}</span>
            <span className="text-gray-400 text-xs">{post.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
