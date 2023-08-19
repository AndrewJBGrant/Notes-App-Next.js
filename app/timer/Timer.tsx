"use client";
import { useState, useEffect } from "react";

const Timer: React.FC = () => {
const [time, setTime] = useState(1500);
const [timeLeft, setTimeLeft] = useState(time);
const [running, setIsRunning] = useState(false);

useEffect(() => {
  if (running) {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft -1);
    }, 1000);

return () => clearInterval(timer);
  }
}, [running]);

const handleTimeOption = (time: number) => {
  setTime(time);
  setTimeLeft(time);
};

return(

 <div className="bg-[#DA775D] text-[#FAF5ED] rounded m-8">
       <div className="flex flex-col justify-center p-8">
       <h1 className=" flex justify-center text-8xl">
        {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
       </h1>

       <button
         className="px-8 text-3xl flex justify-center"
         onClick={() => setIsRunning(!running)}
       >
         {running ? "Pause" : "Start"}
       </button>
 </div>
       <div className="text-xl grid grid-cols-3 divide-x">
         <button onClick={() => handleTimeOption(1500)}> Focus</button>
         <button onClick={() => handleTimeOption(300)}> Short Break</button>
         <button onClick={() => handleTimeOption(900)}> Long Break</button>
       </div>
     </div>
   );
}

 export default Timer;
