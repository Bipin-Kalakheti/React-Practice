//useEfect() = React Hook that tells React DO SOME CODE WHEN (Pick one):
//                This Component re-renders
//                This component mounts
//                The state of a value

//useEffect(function, [dependencies] )

// 1.useEffect(() => {})                    // Runs after every re-render
// 2. useEffect(() => {}, []);           //Runs only on mount
// 3. useEffect(() => {}, [value]);     //Runs on mount + when value changes

// Uses
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, { useState, useEffect } from "react";

function UseEffect_example() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listener Added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener Removed");
    };
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}

export default UseEffect_example;
