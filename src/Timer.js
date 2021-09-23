import React, {useState} from 'react'
import ButtonArray from './ButtonArray.js'
function Timer() {
    const [time, setTime] = useState(0);
    const [going, setGoing] = useState(false);
  
    let timeout = null;
  
    /*setTimeout(
      () => {
        increment(time + 1)
      }, 1000
    )*/
    test();
  
    function test() {
      if(going == true) {
        timeout = setTimeout(() => {setTime(time+1)}, 1000);
        console.log("timeoutID: " + timeout);
      }
    }
    
  
    const startClick = () => {
      setGoing(true);
      console.log("start " + time + " " + going);
    }
  
    const stopClick = () => {
      setGoing(false);
      console.log("timeout is: " + timeout);
      clearTimeout(timeout);
      console.log("stop " + time + " " + going);
      
    }
  
    const resetClick = () => {
      setGoing(false);
      setTime(0);
      console.log("reset " + time + " " + going);
    }
  
    return (
      <div>
        <p>
            Time:
            <br></br>
            {Math.floor(time)} s
            <ButtonArray startClick={startClick} stopClick={stopClick} resetClick={resetClick}></ButtonArray>
        </p>
      </div>
    )
  
}
export default Timer