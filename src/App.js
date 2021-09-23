import './App.css';
import Timer from './Timer.js'
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
export default App;
