import './App.css';
import React, {useState} from 'react'

function App() {
  const [time, increment] = useState(0);

  setTimeout(
    () => increment(time+1), 
    1000
  )

  return (
    <div className="App">
      <header className="App-header">
        <Timer></Timer>
      </header>
    </div>
  );
}

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

function ButtonArray(props) {
  const {startClick, stopClick, resetClick} = props;

  


  return (
    <div>
      <button onClick={startClick}>Start</button>
      <button onClick={stopClick}>Stop</button>
      <button onClick={resetClick}>Reset</button>  
    </div>
  )
}
export default App;
