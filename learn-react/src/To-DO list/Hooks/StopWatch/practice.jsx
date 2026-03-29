import {useState,useEffect,useRef} from 'react';

export default function Practice(){
    const[time,setTime]=useState(0);
    const intervalRef=useRef(null);

    const handleStart=()=>{
        if(intervalRef.current) return;
        intervalRef.current=setInterval(()=>{
            setTime(prev=>prev+9);
            },10)
        }
    const handleStop=()=>{
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        }
    const handleReset=()=>{
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        setTime(0);
        }

const formatTime=(ms)=>{
    const minutes=Math.floor(ms/60000);
    const seconds=Math.floor((ms%60000)/1000);
    const mili=Math.floor((ms%1000)/10);
    return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}:${String(mili).padStart(2,'0')}`;
    
    }

    useEffect(()=>{
        return()=>clearInterval(intervalRef.current);
        },[]);

return(

    <div>
           <h1>{formatTime(time)}</h1>
              <button onClick={handleStart}>Start</button>
              <button onClick={handleStop}>Stop</button>
              <button onClick={handleReset}>Reset</button>
        </div>
    )


    }

