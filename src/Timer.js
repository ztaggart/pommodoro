import React from "react";
import "./index.css";
import ReactPropTypes from "react";

function Timer({ time, startClick, stopClick, resetClick, going }) {
  function format(time) {
    if (time < 10) {
      return "0" + time.toString();
    } else {
      return time;
    }
  }

  function startStopClick() {
    if (going) {
      stopClick();
    } else {
      startClick();
    }
  }

  const startStop = going ? "Stop" : "Start";

  return (
    <div className="timer">
      <div style={{ height: "10%", margin: "100px" }}>
        <p style={{ fontSize: "70px" }}>
          {format(Math.floor(time / 60))}:{format(time % 60)}
        </p>
      </div>
      <div>
        <button onClick={startStopClick}>{startStop}</button>
        <button onClick={resetClick}>Reset</button>
      </div>
    </div>
  );
}

Timer.propTypes = {
  time: ReactPropTypes.number,
  startClick: ReactPropTypes.function,
  stopClick: ReactPropTypes.function,
  resetClick: ReactPropTypes.function,
  going: ReactPropTypes.boolean,
};
export default Timer;
