"use client";
import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number | NodeJS.Timer | undefined;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="bg-[#DA775D] text-[#FAF5ED] rounded m-8">
      <div className="flex flex-col justify-center p-8">
      <h1 className=" flex justify-center text-8xl">
        {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, "0")}
      </h1>

      <button
        className="px-8 text-3xl flex justify-center"
        onClick={toggleTimer}
      >
        {isActive ? "Pause" : "Start"}
      </button>
</div>
      <div className="text-xl grid grid-cols-3 divide-x">
        <button onClick={toggleTimer}> Focus</button>
        <button onClick={toggleTimer}> Short Break</button>
        <button onClick={toggleTimer}> Long Break</button>
      </div>
    </div>
  );
}

export default Timer;
