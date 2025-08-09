import { useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();
  return <div>User {userId}</div>;
};

export default Profile;
