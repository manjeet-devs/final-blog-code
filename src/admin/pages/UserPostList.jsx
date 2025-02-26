import React from "react";

const dummyPosts = [
  {
    id: 1,
    title: "Exploring the Mountains",
    content: "A journey through the most beautiful peaks and valleys.",
    author: "John Doe",
    date: "Feb 25, 2025",
    image: "https://fastly.picsum.photos/id/907/200/200.jpg?hmac=SdeLZNONJ3CX-OB15hSXsCheWDC6yYac5N5VUJM7FIQ"
  },
  {
    id: 2,
    title: "The Future of AI",
    content: "How artificial intelligence is shaping our world.",
    author: "Jane Smith",
    date: "Feb 20, 2025",
    image: "https://fastly.picsum.photos/id/907/200/200.jpg?hmac=SdeLZNONJ3CX-OB15hSXsCheWDC6yYac5N5VUJM7FIQ"
  },
  {
    id: 3,
    title: "Healthy Living Tips",
    content: "Simple habits to lead a healthier life.",
    author: "Alex Johnson",
    date: "Feb 18, 2025",
    image: "https://fastly.picsum.photos/id/907/200/200.jpg?hmac=SdeLZNONJ3CX-OB15hSXsCheWDC6yYac5N5VUJM7FIQ"
  },
  {
    id: 4,
    title: "Exploring the Mountains",
    content: "A journey through the most beautiful peaks and valleys.",
    author: "John Doe",
    date: "Feb 25, 2025",
    image: "https://fastly.picsum.photos/id/907/200/200.jpg?hmac=SdeLZNONJ3CX-OB15hSXsCheWDC6yYac5N5VUJM7FIQ"
  },
  {
    id: 5,
    title: "The Future of AI",
    content: "How artificial intelligence is shaping our world.",
    author: "Jane Smith",
    date: "Feb 20, 2025",
    image: "https://fastly.picsum.photos/id/907/200/200.jpg?hmac=SdeLZNONJ3CX-OB15hSXsCheWDC6yYac5N5VUJM7FIQ"
  },
  {
    id: 6,
    title: "Healthy Living Tips",
    content: "Simple habits to lead a healthier life.",
    author: "Alex Johnson",
    date: "Feb 18, 2025",
    image: "https://fastly.picsum.photos/id/907/200/200.jpg?hmac=SdeLZNONJ3CX-OB15hSXsCheWDC6yYac5N5VUJM7FIQ"
  },
  {
    id: 7,
    title: "Exploring the Mountains",
    content: "A journey through the most beautiful peaks and valleys.",
    author: "John Doe",
    date: "Feb 25, 2025",
    image: "https://fastly.picsum.photos/id/907/200/200.jpg?hmac=SdeLZNONJ3CX-OB15hSXsCheWDC6yYac5N5VUJM7FIQ"
  },
  {
    id: 8,
    title: "The Future of AI",
    content: "How artificial intelligence is shaping our world.",
    author: "Jane Smith",
    date: "Feb 20, 2025",
    image: "https://fastly.picsum.photos/id/907/200/200.jpg?hmac=SdeLZNONJ3CX-OB15hSXsCheWDC6yYac5N5VUJM7FIQ"
  },
  {
    id: 9,
    title: "Healthy Living Tips",
    content: "Simple habits to lead a healthier life.",
    author: "Alex Johnson",
    date: "Feb 18, 2025",
    image: "https://fastly.picsum.photos/id/907/200/200.jpg?hmac=SdeLZNONJ3CX-OB15hSXsCheWDC6yYac5N5VUJM7FIQ"
  },
  {
    id: 10,
    title: "Exploring the Mountains",
    content: "A journey through the most beautiful peaks and valleys.",
    author: "John Doe",
    date: "Feb 25, 2025",
    image: "https://fastly.picsum.photos/id/907/200/200.jpg?hmac=SdeLZNONJ3CX-OB15hSXsCheWDC6yYac5N5VUJM7FIQ"
  },
  {
    id: 11,
    title: "The Future of AI",
    content: "How artificial intelligence is shaping our world.",
    author: "Jane Smith",
    date: "Feb 20, 2025",
    image: "https://fastly.picsum.photos/id/907/200/200.jpg?hmac=SdeLZNONJ3CX-OB15hSXsCheWDC6yYac5N5VUJM7FIQ"
  },
  {
    id: 12,
    title: "Healthy Living Tips",
    content: "Simple habits to lead a healthier life.",
    author: "Alex Johnson",
    date: "Feb 18, 2025",
    image: "https://fastly.picsum.photos/id/907/200/200.jpg?hmac=SdeLZNONJ3CX-OB15hSXsCheWDC6yYac5N5VUJM7FIQ"
  },
];

const UserPostList = ({ posts = dummyPosts }) => {
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

export default UserPostList;
