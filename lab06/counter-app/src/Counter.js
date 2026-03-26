import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Counter Application</h2>

      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button
        onClick={() => count > 0 && setCount(count - 1)}
      >
        Decrement
      </button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;