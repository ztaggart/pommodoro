import React, {useState} from 'react'
import ButtonArray from './ButtonArray.js'
function Timer() {
    const [time, setTime] = useState(0);
    const [going, setGoing] = useState(false);
  
    let timeout = null;

    timer();
  
    function timer() {
        if (going === true) {
            timeout = setTimeout(() => {setTime(time+1)}, 100);
        }
    }
  
    const startClick = () => {
      setGoing(true);
    }
  
    const stopClick = () => {
      setGoing(false);
      clearTimeout(timeout);
      
    }
  
    const resetClick = () => {
      setGoing(false);
      setTime(0);
    }
  
    return (
      <div>
        <p>
            Time:
            <br></br>
            {Math.floor(time/60)} m, {time%60} s
        </p>
        <ButtonArray startClick={startClick} stopClick={stopClick} resetClick={resetClick}></ButtonArray>
      </div>
    )
  
}
export default Timer