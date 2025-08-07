import { useState, useEffect } from "react";

function UseEffectCleanup() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("Initializing Interval");
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(interval);
      console.log("Clearing Interval ....");
    };
  }, []); // run once on mount

  //     }, 1000);

  //     // Cleanup function
  //     return () => {
  //       clearInterval(interval);
  //       console.log("Clearing Interval ....");
  //     };
  //   }, []); // run once on mount

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
      <p>Current Time: {time}</p>
    </div>
  );
}

export default UseEffectCleanup;
