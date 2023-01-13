import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./index.css";

function Timer({goals, setGoals}: {goals: number[], setGoals: Dispatch<SetStateAction<number[]>>}) {
  const [breakCount, setBreakCount] = useState(0);
  const [time, setTime] = useState(0);
  const [going, setGoing] = useState(false);

  function format(time: number) {
    if (time < 10) {
      return "0" + time.toString();
    } else {
      return time;
    }
  }

  useEffect(() => {
    changeGoals();
  });

  function changeGoals() {
    // goals[0] is the goals index
    let goal = goals[goals[0]];
    console.log(goals[0]);
    if (breakCount >= 4) {
      goals[0] = 3;
      setBreakCount(0);
    }
    if (time > goal && goal !== 0) {
      //TODO: maybe could put an alarm here when switching to the next timer?

      //go to next timer goal
      goals[0] = (goals[0] + 1) % (goals.length - 1);
      if (goals[0] === 0) {
        // skip metadata for goal index
        goals[0] += 1;
      }

      console.log("goal index: " + goals[0]);

      if (goals[0] === 2) {
        // if a break, increment break counter
        setBreakCount(breakCount + 1);
      }
      setTime(1);
    } else if (going === true) {
      setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    }
  }

  const startClick = () => {
    setGoing(true);
  };

  const stopClick = () => {
    setGoing(false);
  };

  const resetClick = () => {
    setGoing(false);
    setTime(0);
    goals[0] = 1; // TODO: huh?
  };

  return (
    <div className="timer">
      <div style={{ height: "10%", margin: "100px" }}>
        <p style={{ fontSize: "70px" }}>
          {format(Math.floor(time / 60))}:{format(time % 60)}
        </p>
      </div>
      <div>
        <button onClick={startClick}>Start</button>
        <button onClick={stopClick}>Stop</button>
        <button onClick={resetClick}>Reset</button>
      </div>
    </div>
  );
}
export default Timer;
