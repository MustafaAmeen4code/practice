import UserCard from "./1-user-card";
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Viewer" },
];
const UsersInfo = () => {
  return (
    <section>
      <h3>Users List</h3>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <p style={{ fontStyle: "italic" }}>Total Users: {users.length}</p>
    </section>
  );
};

export default UsersInfo;
