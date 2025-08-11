import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
      >
        About
      </NavLink>

      <NavLink
        to="/dashboard"
        style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
      >
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Navigation;
