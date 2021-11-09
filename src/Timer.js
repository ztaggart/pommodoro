import React, {useState} from 'react'
import ButtonArray from './ButtonArray.js'
import TimerDone from './TimerDone.js'
import GoalForm from './GoalForm.js'
import './Timer.css'

function Timer() {
    const [time, setTime] = useState(0);
    const [going, setGoing] = useState(false);
    const [done, setDone] = useState(false);
    const [goal, setGoal] = useState(0);

    timer();
  
    function timer() {
      if(time >= goal && goal !== 0 && done !== true) {
        setDone(true);
        setGoing(false);
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
      setDone(false);
    }
  
    return (
      <div>
        <TimerDone done={done}/>
        <p>
            Time:
            <br></br>
            {Math.floor(time/60)} m, {time%60} s
        </p>
        <ButtonArray startClick={startClick} stopClick={stopClick} resetClick={resetClick}></ButtonArray>
        <GoalForm goal={goal} setGoal={setGoal}></GoalForm>
      </div>
    )
  
}
export default Timer