import { useState } from 'react';
import { useStopwatch } from 'react-timer-hook';

function TimerHook({obliviate}) {
  
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  if(minutes >=1)
  {
    // alert("Oops time's up")
    obliviate(true);

  }
  return (
    <div style={{textAlign: 'center'}}>
     <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

export default TimerHook;