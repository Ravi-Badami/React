import {useContext,useState} from 'react';

export default function ThemeSwitcher(){
    const [mode,setMode]=useState(false);

    const handleClick=()=>{
        setMode(!mode);
        }
    return(
        <div>
            <button onClick={handleClick}>Click me</button>
              <Toggle  mode={mode}/>
        </div>

        )

    }

function Toggle({mode}){
    return(
        <>
        {mode?(
            <p>On</p>
            ):(
                <p>Off</p>)

        }
    </>
        )

    }