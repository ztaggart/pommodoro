import React from 'react';

const TimerDone = (props) => {
    const done = props.done;
    if(done) {
        return <h1>The Timer has finished!</h1>
    } else {
        return null;
    }
}


export default TimerDone;