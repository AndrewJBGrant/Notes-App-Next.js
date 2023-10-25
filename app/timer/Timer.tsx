"use client";
import { useState, useEffect } from "react";

const Timer: React.FC = () => {
  const [time, setTime] = useState(1500);
  const [timeLeft, setTimeLeft] = useState(time);
  const [running, setIsRunning] = useState(false);




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
    <div className="bg-[#DA775D] text-[#FAF5ED] rounded m-8 w-full max-w-sm border">
      <div className="flex flex-col justify-center p-8">
        <h1 className="flex justify-center text-8xl">
          {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </h1>

        <button
          className="px-8 text-3xl flex justify-center transition-colors duration-150 bg focus:shadow-outline border border-indigo-600 hover:bg-indigo-800"
          onClick={() => setIsRunning(!running)}
        >
          {running ? "Pause" : "Start"}
        </button>
      </div>


{/* <div className="inline-flex" role="group" aria-label="Button group">
  <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-l-lg focus:shadow-outline hover:bg-indigo-800">Left</button>
  <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800">Middle</button>
  <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-r-lg focus:shadow-outline hover:bg-indigo-800">Right</button>
</div> */}






      <div className="text-xl grid grid-cols-3 divide-x">
        <button className="transition-colors duration-150 bg focus:shadow-outline hover:bg-indigo-800"
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
