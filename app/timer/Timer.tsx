"use client";

import { useState, useEffect, SetStateAction } from "react";
import { GlobalStyles } from "../theme/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { focus, short, long } from "../theme/Theme.styled";

// import useSound from "use-sound";
// import { TimerEnd } from "../sounds/TimerEnd.mp3";

import { ThemeContainer } from "../theme/ThemeSwitching.styled";

const Timer: React.FC = () => {
  const [time, setTime] = useState(1500);
  const [timeLeft, setTimeLeft] = useState(time);
  const [running, setIsRunning] = useState(false);

  // Theme Switching
  const [selectedTheme, setSelectedTheme] = useState(focus);

  // export const LevelContext = createContext(timeLeft);

  const HandleThemeChange = (
    theme: SetStateAction<{
      name: string;
      colors: { background: string; border: string };
    }>
  ) => {
    setSelectedTheme(theme);
  };

  const handleTimeOption = (time: number) => {
    setTime(time);
    setTimeLeft(time);
  };

  useEffect(() => {
    if (running) {
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [running]);


// const timeEnd = () => {

//   const [play] = useSound("../sounds/TimerEnd.mp3");
// }


  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <ThemeContainer>
        <div className="flex flex-col justify-center p-6 rounded">
          {time === 300 ? (
            <h1 className="flex justify-center text-8xl">
              0{Math.floor(timeLeft / 60)}:
              {(timeLeft % 60).toString().padStart(2, "0")}
            </h1>
          ) : (
            <h1 className="flex justify-center text-8xl">
              {Math.floor(timeLeft / 60)}:
              {(timeLeft % 60).toString().padStart(2, "0")}
            </h1>
          )}

          <button
            className="px-8 text-3xl flex justify-center transition-colors duration-150 bg focus:shadow-outline border border-indigo-600 hover:bg-indigo-800"
            onClick={() => {setIsRunning(!running); ; alert("starting timer")}}
          >
            {running ? "Pause" : "Start"}
          </button>
        </div>

        <div className="text-xl grid grid-cols-3 divide-x">
          <button
            className={`focus ${selectedTheme === focus ? "active" : ""}`}
            onClick={() => {
              {
                handleTimeOption(1500);
                HandleThemeChange(focus);
              }
            }}
          >
            Focus
          </button>
          <button
            className={`short ${selectedTheme === short ? "active" : ""}`}
            onClick={() => {
              handleTimeOption(300);

              HandleThemeChange(short);
            }}
          >
            Short Break
          </button>

          <button
            className={`long ${selectedTheme === long ? "active" : ""}`}
            onClick={() => {
              handleTimeOption(900);
              HandleThemeChange(long);
            }}
          >
            {" "}
            Long Break
          </button>
        </div>
      </ThemeContainer>
    </ThemeProvider>
  );
};

export default Timer;
