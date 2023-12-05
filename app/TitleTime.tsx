
import { useContext } from "react";
import { TimerContext } from "./timer/TimeContext";

function TitleTime() {
  const time = useContext(TimerContext);

  return (
    <TimerContext.Provider value={time}>

    </TimerContext.Provider>
  );
}

export default TitleTime;
