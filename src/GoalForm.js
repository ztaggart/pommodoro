import React, {useState} from 'react';

const GoalForm = (props) => {
    const[tempMin, setTempMin] = useState(0);
    const[tempSec, setTempSec] = useState(0);

    let {goal, setGoal} = props;

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
          Current Goal is: {goal} seconds.
          <form onSubmit={submitForm} style={{fontSize: '20px', display: 'block'}}>
              <div id='submitDiv'>
                <input id='txtSubmitMinutes' className='timeTxt' onChange={changeMinutes} value={tempMin}/>
                <label style={{marginRight: '15px'}}> minutes </label>
                <input id='txtSubmitSeconds' className='timeTxt' onChange={changeSeconds} value={tempSec}/>
                <label> seconds </label>
              </div>
              <button id='btnSubmitTime' type='submit' style={{fontSize: '20px', color: '#282c34', marginTop: '10px'}}> Submit </button>
          </form>
        </div>
    )
}


export default GoalForm;