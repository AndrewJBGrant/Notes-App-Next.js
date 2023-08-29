"use client";
import { useState, useEffect } from "react";

const Timer: React.FC = () => {
  const sum = (a: number, b: number) => {
    return a + b;
  };

  const multiply = (a: number, b: number) => {
    return a * b;
  };

  const [time, setTime] = useState(1500);
  const [timeLeft, setTimeLeft] = useState(time);
  const [running, setIsRunning] = useState(false);

  const [color, setColor] = useState("green");

  const click = (color: string) => {
    setColor(color);
  };

  useEffect(() => {
    if (running) {
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [running]);

  const handleTimeOption = (time: number) => {
    setTime(time);
    setTimeLeft(time);
  };
  // console.log("hello there");

  return (
    <div className="bg-[#DA775D] text-[#FAF5ED] rounded m-8">
      <div className="flex flex-col justify-center p-8">
        <h1 className="flex justify-center text-8xl border-2 border-indigo-600">
          {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </h1>

        <button
          className="px-8 text-3xl flex justify-center"
          onClick={() => setIsRunning(!running)}
        >
          {running ? "Pause" : "Start"}
        </button>
      </div>
      <div className="text-xl grid grid-cols-3 divide-x">
        <button
          onClick={(event) => {
            console.log("function 1", sum(5, 5));
            console.log("function 2", multiply(5, 5));
          }}
        >
          sums
        </button>
        <button
          onClick={(event) => {
            console.log("hello");
            handleTimeOption(1500);
          }}
        >
          {" "}
          Focus
        </button>
        <button onClick={() => handleTimeOption(300)}> Short Break</button>
        <button onClick={() => handleTimeOption(900)}> Long Break</button>
      </div>
    </div>
  );
};

export default Timer;
