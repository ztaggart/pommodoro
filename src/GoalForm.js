import React, {useState} from 'react';
import './index.css';

const GoalForm = ({setGoal}) => {
    const[tempMin, setTempMin] = useState(0);
    const[tempSec, setTempSec] = useState(5);


    const submitForm = (event) => {
        // prevent default form submission behavior
        event.preventDefault();
  
        // will break if id of input changes
        let secondsValue = tempSec===''? 0:parseFloat(tempSec);
        let minutesValue = tempMin===''? 0:parseFloat(tempMin);

        if (Number.isNaN(minutesValue) && Number.isNaN(secondsValue)) {
            alert("No time was entered.");
        } else if (secondsValue + minutesValue < 1) {
            alert("The total time value must greater than zero.");
        } else if (!Number.isNaN(secondsValue) && secondsValue % 1 !== 0) {
            alert("The entered seconds value is not a whole number.");
        } else if (!Number.isNaN(minutesValue) && minutesValue % 1 !== 0) {
            alert("The entered minutes value is not a whole number.");
        } else {
            let totalSeconds = (minutesValue * 60) + secondsValue;
            setGoal(totalSeconds);
        }
    }

    const changeMinutes = (event) => {
        setTempMin(event.target.value);
    }

    const changeSeconds = (event) => {
        setTempSec(event.target.value);
    }

    
    return(
        <div>
          <form onSubmit={submitForm} class='goal_container'>
              <div id='submitDiv'>
                <input class='goal_input' onChange={changeMinutes} value={tempMin}/>
                <label style={{marginRight: '15px'}}> minutes </label>
              </div>
              <div id='submitDiv'>
                <input id='txtSubmitSeconds' className='timeTxt' onChange={changeSeconds} value={tempSec}/>
                <label> seconds </label>
              </div>
              <div>
                <button id='btnSubmitTime' type='submit' style={{alignContent: 'center', fontSize: '20px', marginTop: '10px', marginLeft: '35%'}}> Submit </button>
              </div>
          </form>
        </div>
    )
}


export default GoalForm;