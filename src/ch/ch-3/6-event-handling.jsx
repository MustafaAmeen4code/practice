import { useState } from "react";

function EventHandling() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleAdd = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Add 1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => handleAdd(5)}>Add 5</button>
    </div>
  );
}

export default EventHandling;
