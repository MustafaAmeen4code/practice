import useCounter from "./useCounter";

const CustomCounter = () => {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          decrement();
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          increment(5);
        }}
      >
        +5
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default CustomCounter;
