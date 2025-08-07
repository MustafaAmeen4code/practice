import { useState, useEffect } from "react";

function UseEffectCleanupWithDeeps() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("Setting Interval For count : ", count);
    const interval = setInterval(() => {
      console.log("Interval running for count : ", count);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(interval);
      console.log("Clearing Interval for count : ", count);
    };
  }, [count]); // Dependency array to control when the effect runs

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
    </div>
  );
}
export default UseEffectCleanupWithDeeps;
