import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export async function usersLoader({ params }) {
  try {
    if (params.userId) {
      //single user
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${params.userId}`
      );
      const data = [res.data];

      return data;
    } else {
      //All users
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    }
  } catch (error) {
    throw new Response("Failed to load users", { status: 500 });
  }
}

const Users = () => {
  const users = useLoaderData();
  const Navigate = useNavigate();
  const { userId } = useParams();
  const [userIdInput, setUserIdInput] = useState("");

  return (
    <div>
      <h2>Users Info</h2>
      <div>
        <input
          type="number"
          placeholder="Enter User ID..."
          value={userIdInput}
          onChange={(e) => {
            setUserIdInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (userIdInput) {
              Navigate(`/dashboard/users/${userIdInput}`);
            }
          }}
        >
          Get User by ID
        </button>
        {userId && (
          <button
            onClick={() => {
              Navigate(`/dashboard/users`);
            }}
          >
            Show all users
          </button>
        )}
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            {user.userName}
            <br />
            Email: {user.email}
            <br />
            Phone: {user.phone}
            <br />
            Website: {user.website}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
