'use client'
import { useState, useEffect } from 'react';


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
    <div className="border-solid border-2 border-indigo-600 w-1/2">
      <h1>{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</h1>
      <button onClick={toggleTimer}>Start</button>
      <button onClick={toggleTimer}> Pause</button>
    </div>
  );
}

export default Timer;
