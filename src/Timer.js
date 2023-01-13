import React from "react";
import "./index.css";
import ReactPropTypes from "react";

function Timer({ time, startClick, stopClick, resetClick }) {
  function format(time) {
    if (time < 10) {
      return "0" + time.toString();
    } else {
      return time;
    }
  }

  return (
    <div className="timer">
      <div style={{ height: "10%", margin: "100px" }}>
        <p style={{ fontSize: "70px" }}>
          {format(Math.floor(time / 60))}:{format(time % 60)}
        </p>
      </div>
      <div>
        <button onClick={startClick}>Start</button>
        <button onClick={stopClick}>Stop</button>
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
};
export default Timer;
