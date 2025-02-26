import { useState } from "react";
import { FiUser, FiEdit } from "react-icons/fi";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", totalPosts: 10 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", totalPosts: 15 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", totalPosts: 7 },
    { id: 4, name: "Alice Brown", email: "alice@example.com", totalPosts: 12 },
    { id: 5, name: "Charlie White", email: "charlie@example.com", totalPosts: 9 },
    { id: 6, name: "Emma Green", email: "emma@example.com", totalPosts: 6 },
    { id: 7, name: "Liam Black", email: "liam@example.com", totalPosts: 11 },
    { id: 8, name: "Olivia Blue", email: "olivia@example.com", totalPosts: 8 }
  ]);

  return (
    <div className="mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">User List</h2>
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-4 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="p-2 text-left text-gray-800 dark:text-white">ID</th>
              <th className="p-2 text-left text-gray-800 dark:text-white">Name</th>
              <th className="p-2 text-left text-gray-800 dark:text-white hidden md:table-cell">Email</th>
              <th className="p-2 text-left text-gray-800 dark:text-white">Total Posts</th>
              <th className="p-2 text-center text-gray-800 dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="p-2 text-gray-800 dark:text-white">{user.id}</td>
                <td className="p-2 flex items-center gap-2 text-gray-800 dark:text-white">
                  <FiUser /> {user.name}
                </td>
                <td className="p-2 text-gray-800 dark:text-white hidden md:table-cell">{user.email}</td>
                <td className="p-2 text-gray-800 dark:text-white">{user.totalPosts}</td>
                <td className="p-2 text-center">
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700">
                    <FiEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
