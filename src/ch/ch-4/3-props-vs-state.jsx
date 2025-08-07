import { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const handleReset = () => {
    setCount(initialCount);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h3>Counter Component</h3>
      <p>Initial Count (from props): {initialCount}</p>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

const PropsVsState = () => {
  return (
    <div>
      <Counter initialCount={0} />
      <Counter initialCount={10} />
    </div>
  );
};

export default PropsVsState;
