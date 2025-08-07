import { useState, useEffect } from "react";

function UseEffectWithDeeps() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // Effect runs only when 'count' changes

  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]); // Effect runs only when 'name' changes

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
      <p>name: {name}</p>
      <button
        onClick={() =>
          setName((prevName) => (prevName === "John" ? "Doe" : "John"))
        }
      >
        Toggle Name
      </button>
    </div>
  );
}

export default UseEffectWithDeeps;
