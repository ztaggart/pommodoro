import "./index.css";
import Timer from "./Timer.js";
import React, { useState, useEffect } from "react";

function App() {
  const WORK = 3;
  const SHORT_BREAK = 2;
  const LONG_BREAK = 10;

  const [breakCount, setBreakCount] = useState(0);
  const [goals, setGoals] = useState([1, WORK, SHORT_BREAK, LONG_BREAK]);
  const [time, setTime] = useState(0);
  const [going, setGoing] = useState(false);

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

  const setGoal = (goal, index) => {
    if (index <= 0 || index > goals.length()) {
      console.log("bad index in setGoal");
      return;
    }

    goals[index] = goal;
    setGoals(goals);
  };

  const startClick = () => {
    setGoing(true);
  };

  const stopClick = () => {
    setGoing(false);
  };

  const resetClick = () => {
    setGoing(false);
    setTime(0);
    goals[0] = 1;
  };

  return (
    <div className="app">
      <Timer
        time={time}
        startClick={startClick}
        stopClick={stopClick}
        resetClick={resetClick}
        breakCount={breakCount}
      ></Timer>
    </div>
  );
}
export default App;
