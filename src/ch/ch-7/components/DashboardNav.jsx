import { NavLink } from "react-router-dom";
const DashboardNav = () => {
  return (
    <nav>
      <NavLink
        to="/dashboard/post"
        style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
      >
        Post
      </NavLink>

      <NavLink
        to="/dashboard/Profile"
        style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
      >
        Profile
      </NavLink>
    </nav>
  );
};

export default DashboardNav;
