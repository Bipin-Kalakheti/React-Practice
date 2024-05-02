//React hook = Special function that allows functional compnents to use React features without writing class components.
//              (useState, useEffect, useContext, useReducer, useCallback, and more......)

// useState() = A React hook that allows the creation of a stateful variable AND a setter function to update its value in the Virtual DOM.
//              [name, setName]

import React, { useState } from "react";
import "./CSS/Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
