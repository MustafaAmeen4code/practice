const UserCard = (Props) => {
  const { name, email, role } = Props.user;
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default UserCard;
