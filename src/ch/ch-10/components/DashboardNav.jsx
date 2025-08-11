import { NavLink } from "react-router-dom";
const DashboardNav = () => {
  return (
    <nav>
      <NavLink
        to="/dashboard/post"
        style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
      >
        Posts
      </NavLink>

      <NavLink
        to="/dashboard/users"
        style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
      >
        Users
      </NavLink>
    </nav>
  );
};

export default DashboardNav;
