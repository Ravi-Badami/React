import { useState, useRef, useEffect } from 'react';
import Practice from './practice.jsx';

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

//   In your code: time goes on screen → useState. The interval ID never goes on screen → useRef

  const handleStart = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 10);
    }, 10);
console.log(intervalRef.current)
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    console.log(intervalRef.current)
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    console.log(intervalRef.current)
    setTime(0);
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const millis  = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(millis).padStart(2, '0')}`;
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
{/*       <h1>{formatTime(time)}</h1> */}
{/*       <button onClick={handleStart}>Start</button> */}
{/*       <button onClick={handleStop}>Stop</button> */}
{/*       <button onClick={handleReset}>Reset</button> */}
<Practice/>
    </div>
  );
}