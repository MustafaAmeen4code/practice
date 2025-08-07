import { useState, useEffect } from "react";

function UseEffectBasics() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect called , Component rendered or updated");
    if (count > 0) {
      document.title = `New Messages (${count})`;
    }
  });

  return (
    <div>
      <h2>useEffect Basics</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
    </div>
  );
}

export default UseEffectBasics;
