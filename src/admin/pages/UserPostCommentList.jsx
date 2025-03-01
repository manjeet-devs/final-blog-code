import { useState } from "react";
import { FiUser, FiMessageSquare } from "react-icons/fi";
import ToggleSwitch from "../components/ToggleSwitch";

const UserPostCommentList = () => {
  const [comments, setComments] = useState([
    { id: 1, userId: 101, user: "John Doe", postId: 201, text: "Great post!", date: "2025-02-26", enabled: true },
    { id: 1, userId: 101, user: "John Doe", postId: 201, text: "Great post!", date: "2025-02-26", enabled: true },
    { id: 1, userId: 101, user: "John Doe", postId: 201, text: "Great post!", date: "2025-02-26", enabled: true },
    { id: 2, userId: 102, user: "Jane Smith", postId: 202, text: "Very informative, thanks!", date: "2025-02-25", enabled: false },
    { id: 2, userId: 102, user: "Jane Smith", postId: 202, text: "Very informative, thanks!", date: "2025-02-25", enabled: false },
    { id: 2, userId: 102, user: "Jane Smith", postId: 202, text: "Very informative, thanks!", date: "2025-02-25", enabled: false },
    { id: 2, userId: 102, user: "Jane Smith", postId: 202, text: "Very informative, thanks!", date: "2025-02-25", enabled: false },
    { id: 2, userId: 102, user: "Jane Smith", postId: 202, text: "Very informative, thanks!", date: "2025-02-25", enabled: false },
    { id: 3, userId: 103, user: "Bob Johnson", postId: 203, text: "I have a question about this topic...", date: "2025-02-24", enabled: true },
    { id: 3, userId: 103, user: "Bob Johnson", postId: 203, text: "I have a question about this topic...", date: "2025-02-24", enabled: true },
    { id: 3, userId: 103, user: "Bob Johnson", postId: 203, text: "I have a question about this topic...", date: "2025-02-24", enabled: true },
    { id: 3, userId: 103, user: "Bob Johnson", postId: 203, text: "I have a question about this topic...", date: "2025-02-24", enabled: true },
    { id: 3, userId: 103, user: "Bob Johnson", postId: 203, text: "I have a question about this topic...", date: "2025-02-24", enabled: true },
    { id: 3, userId: 103, user: "Bob Johnson", postId: 203, text: "I have a question about this topic...", date: "2025-02-24", enabled: true },
  ]);

  const toggleEnable = (id) => {
    setComments(comments.map(comment => 
      comment.id === id ? { ...comment, enabled: !comment.enabled } : comment
    ));
  };

  return (
    <div className="mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-x-auto">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">User Comments</h2>
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-4">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="p-2 text-left text-gray-800 dark:text-white">User ID</th>
              <th className="p-2 text-left text-gray-800 dark:text-white hidden sm:table-cell">User</th>
              <th className="p-2 text-left text-gray-800 dark:text-white">Post ID</th>
              <th className="p-2 text-left text-gray-800 dark:text-white hidden sm:table-cell">Comment</th>
              <th className="p-2 text-left text-gray-800 dark:text-white hidden sm:table-cell">Date</th>
              <th className="p-2 text-left text-gray-800 dark:text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <tr key={comment.id} className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="p-2 text-gray-800 dark:text-white">{comment.userId}</td>
                <td className="p-2 flex items-center gap-2 text-gray-800 dark:text-white hidden sm:table-cell">
                   {comment.user}
                </td>
                <td className="p-2 text-gray-800 dark:text-white">{comment.postId}</td>
                <td className="p-2 text-gray-800 dark:text-white flex items-center gap-2 hidden sm:table-cell">
                   {comment.text}
                </td>
                <td className="p-2 text-gray-800 dark:text-white hidden sm:table-cell">{comment.date}</td>
                <td className="p-2 text-gray-800 dark:text-white">
                  {/* <button 
                    onClick={() => toggleEnable(comment.id)} 
                    className={`px-3 py-1 rounded-lg text-white ${comment.enabled ? 'bg-green-500' : 'bg-red-500'}`}
                  >
                    {comment.enabled ? 'Enabled' : 'Disabled'}
                  </button> */}
                  <ToggleSwitch />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPostCommentList;
