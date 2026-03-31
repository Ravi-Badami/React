import {useMemo,useState} from 'react';

export default function Counter(){
    const [count,setCount]=useState(0);
const calculate=useMemo(()=>CalculateValue(),[]);
console.log(calculate);



    const handleClick=()=>{
        setCount(count+1+calculate);
        }

    return(
        <>
        <p>{count}</p>
            <p>{calculate}</p>
        <button onClick={handleClick}> add</button>
        </>

        )

    }
const CalculateValue=()=>{
    let sum=0;
        for(let i=0;i<1000000000;i++){
        sum+=1
        }
    return sum;
    }