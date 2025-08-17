import React from "react";
const Child = ({ value, onClick }) => {
  console.log("Child Rendered"); //Track Rerender
  return (
    <div>
      <h4>Child Component</h4>
      <p>Look at the Console</p>
      <p>Value: {value}</p>
      <button onClick={onClick}>Increase</button>
    </div>
  );
};

export default React.memo(Child);
