import { Navigate } from "react-router-dom";

const ProtectedDashboard = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedDashboard;
