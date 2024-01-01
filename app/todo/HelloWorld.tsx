"use client"

// const HelloWorld = () => {
//   return <div data-testid="hello-world">Hello World</div>;
// };
// export default HelloWorld;

import { useState } from "react";
const Counter = ({ count }: { count: number}) => {
  const [increment, setIncrement] = useState(0);
  const handleIncrement = () => {
    setIncrement(increment + 1);
  };
  return (
    <div>
      {" "}
      <p>{count}</p>
      <p>Increment: {increment}</p>{" "}
      <button onClick={handleIncrement}>Increment</button>{" "}
    </div>
  );
};
export default Counter;
