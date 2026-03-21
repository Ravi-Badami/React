import {useState} from 'react';

export default function Toggle(){
    const [isToggle,setIsToggle]=useState(true);


    const handleClick=()=>{

        setIsToggle(!isToggle);
        }


    return(
        <div>
        <h1>Toggle</h1>
        <p>{isToggle ? 'ON':'OFF'}</p>
        <button
        onClick={handleClick}
        >
            toggle
            </button>


        </div>

        )
    }