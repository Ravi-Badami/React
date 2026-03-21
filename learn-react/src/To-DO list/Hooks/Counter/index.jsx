import {useState} from 'react';

export default function counter(){
    const [count,setCount]=useState(0);
    const handleClick=(val)=>{

        setCount(val+1);
        }
    const handleDelete=()=>{
        setCount(count-1)
        return count;
        }


    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>handleClick(count)}>add </button>
            <button onClick={()=>{
                const result=handleDelete();
                 console.log(result);
                }}>remove </button>


       </div>
        );

    }
