import "./index.css";
import Timer from "./Timer";
import React, { useState, useEffect } from "react";

function App() {
  const WORK = 3;
  const SHORT_BREAK = 2;
  const LONG_BREAK = 10;

  const [goals, setGoals] = useState([1, WORK, SHORT_BREAK, LONG_BREAK]);

  return (
    <div className="app">
      <Timer goals={goals} setGoals={setGoals}></Timer>
    </div>
  );
}
export default App;
