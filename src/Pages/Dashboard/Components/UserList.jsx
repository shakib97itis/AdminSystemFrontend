import { useState } from "react";
import EditUser from "./EditUser";

const initialUsers = [
  {
    id: 1,
    name: "Andrew Mike",
    email: "andrew@gmail.com",
    date: "04/10/2014",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@gmail.com",
    date: "06/09/2015",
    role: "Manager",
    status: "Active",
  },
  {
    id: 3,
    name: "Micheal Holz",
    email: "micheal@gmail.com",
    date: "09/05/2016",
    role: "Publisher",
    status: "Inactive",
  },
];

const UserList = () => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSave = (updatedUser) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u)),
    );
    setSelectedUser(null);
  };

  return (
    <div className="bg-BGWhite rounded-lg relative">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-TextGray">
            <th>Name</th>
            <th>Email</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Button</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-GrayBorder text-TextBlack last:border-none">
              <td className="py-2">{user.name}</td>
              <td>{user.email}</td>
              <td>{user.date}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button
                  onClick={() => setSelectedUser(user)}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit User Modal */}
      {selectedUser && (
        <EditUser
          user={selectedUser}
          onSave={handleSave}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default UserList;
