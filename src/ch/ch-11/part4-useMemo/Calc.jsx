import React, { useMemo, useState } from "react";
function expensiveCalculation(num) {
  console.log("Expensive Calculation Running...");
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += i % num;
  }
  return result;
}

const Calc = () => {
  const [count, setCount] = useState(1);
  const [other, setOther] = useState(false);

  const memoizedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);
  console.log("Memoized Value:", memoizedValue);

  return (
    <div>
      <p>Look at the console to see the expensive calculation in action!</p>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
      <p>Memoized Value: {memoizedValue}</p>
      <p>Other State: {other.toString()}</p>
      <button
        onClick={() => {
          setOther(!other);
        }}
      >
        Toggle Other State
      </button>
    </div>
  );
};

export default Calc;
