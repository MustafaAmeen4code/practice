import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = (step = 1) => setCount((c) => c + step);
  const decrement = (step = 1) => setCount((c) => c - step);
  const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
};

export default useCounter;
