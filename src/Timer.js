import React, {useState} from 'react'
import ButtonArray from './ButtonArray.js'
import TimerDone from './TimerDone.js'
import './Timer.css'

function Timer() {
    const [time, setTime] = useState(0);
    const [going, setGoing] = useState(false);
    const [done, setDone] = useState(false);
    const [goal, setGoal] = useState(10);

    timer();
  
    function timer() {
      if(time >= goal && done !== true) {
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
    
    const submitForm = (event) => {
      // prevent default form submission behavior
      event.preventDefault();

      // will break if id of input changes
      //console.log(event.target.children);
      let secondsValue = parseFloat(event.target.children.submitDiv.children.txtSubmitSeconds.value);
      let minutesValue = parseFloat(event.target.children.submitDiv.children.txtSubmitMinutes.value);
      let totalSeconds = (minutesValue * 60) + secondsValue;
      /*console.log('seconds value: ' + secondsValue);
      console.log('minutes value: ' + minutesValue);
      console.log('total seconds value: ' + totalSeconds);*/
 
      // < 0 or decimal check
      if (secondsValue + minutesValue < 1 || secondsValue % 1 !== 0 || minutesValue % 1 !== 0) {
        alert("The entered seconds value must be a whole number greater than zero.");
      } else {
        setGoal(totalSeconds);
      }
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
        <div>
          <p>
            Current Goal is: {goal} seconds.
            <form onSubmit={submitForm} style={{fontSize: '20px', display: 'block'}}>
              <div id='submitDiv'>
                <input id='txtSubmitMinutes' className='timeTxt'/>
                <label style={{marginRight: '15px'}}> minutes </label>
                <input id='txtSubmitSeconds' className='timeTxt'/>
                <label> seconds </label>
              </div>
              <button id='btnSubmitTime' type='submit' style={{fontSize: '20px', color: '#282c34', marginTop: '10px'}}> Submit </button>
            </form>
          </p>
        </div>
      </div>
    )
  
}
export default Timer