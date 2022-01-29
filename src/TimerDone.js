import React from 'react';

const TimerDone = (props) => {
    const {done1, done2} = props;
    
    if(done1) {
        return <h1>Timer1 has finished!</h1>
    } else if(done2) {
        return <h1>Timer2 has finished!</h1>
    } else {
        return null;
    }
}


export default TimerDone;