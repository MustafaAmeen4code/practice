import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);
  const handleReset = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <h3>Parent Component</h3>
      <p>Parent Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Parent
      </button>
      <p>Other Count: {other}</p>
      <button
        onClick={() => {
          setOther(other + 1);
        }}
      >
        Change Other State
      </button>
      <Child value={count} onClick={handleReset} />
    </div>
  );
};

export default Parent;
