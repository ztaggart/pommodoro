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
export default ButtonArray;