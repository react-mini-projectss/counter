"use client";

import { useState } from "react";

interface CounterProps {
  initial: number;
}

export default function Counter({ initial }: CounterProps) {
  const [count, setCount] = useState(initial);

  return (
    <div className="counter-box">
      <h3 className="counter-title">Type-Safe Counter</h3>

      <p className="counter-value">Current Count: {count}</p>

      <div className="counter-button-row">
        <button className="counter-btn" onClick={() => setCount(count + 1)}>
          Increment (+)
        </button>

        <button className="counter-btn" onClick={() => setCount(count - 1)}>
          Decrement (-)
        </button>
      </div>

      <p className="initial-text">
        Initial value was: <b>{initial}</b>
      </p>
    </div>
  );
}
