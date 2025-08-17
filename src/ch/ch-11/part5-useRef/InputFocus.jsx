import { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click Button to focus me"
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default InputFocus;
