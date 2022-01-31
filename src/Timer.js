import React, {useEffect, useState} from 'react'
import ButtonArray from './ButtonArray.js'
import GoalForm from './GoalForm.js'
import './Timer.css'

function Timer() {
    // first number in array is the current goal, 1 indexed
    // e.g. the first goal has an index of 1 in this array
    const WORK = 3;
    const SHORT_BREAK = 2;
    const LONG_BREAK = 10;
    const [breakCount, setBreakCount] = useState(0);
    const [goals, setGoals] = useState([1, WORK, SHORT_BREAK, LONG_BREAK]);
    const [time, setTime] = useState(0);
    const [going, setGoing] = useState(false);

    useEffect(
      () => {
        changeGoals();
      }
    )
    
    
    function changeGoals() {
      let goal = goals[goals[0]];
      console.log(goals[0])
      if (breakCount >= 4) {
        goals[0] = 3;
        setBreakCount(0);
      }
      if(time > goal && goal !== 0) {
        //TODO: maybe could put an alarm here when switching to the next timer?
        
        //go to next timer goal
        goals[0] = ((goals[0] + 1) % (goals.length - 1));
        console.log("goal index: " + goals[0])
        if(goals[0] === 0) { // skip metadata for goal index
          goals[0]+=1;
        }
        if(goals[0] === 2) { // if a break, increment break counter
          setBreakCount(breakCount + 1);
        }
        setTime(1);
      }
      else if (going === true) {
        setTimeout(() => {setTime(time+1)}, 1000);
      }
    }

    const startClick = () => {
      setGoing(true);
    }
  
    const stopClick = () => {
      setGoing(false);
    }
  
    const resetClick = () => {
      setGoing(false);
      setTime(0);
      goals[0] = 1;
    }
    
    const setGoal = (goal) => {
      goals[goals[0]] = goal;
      setGoals(goals);
    }
  
    return (
      <div>
        <p>
            Time:
            <br></br>
            {Math.floor(time/60)} m, {time%60} s
        </p>
        <ButtonArray startClick={startClick} stopClick={stopClick} resetClick={resetClick}></ButtonArray>
        <p> Current Goal is: {goals[goals[0]]} seconds.</p>
        <GoalForm setGoal={setGoal}></GoalForm>
      </div>
    )
  
}
export default Timer