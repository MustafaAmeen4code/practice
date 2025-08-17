import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Toolbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const style = {
    background: theme === "light" ? "#eee" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };
  return (
    <div style={style}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Toolbar;
