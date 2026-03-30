import {createContext,useState} from 'react';
import Toggle from './Toggle.jsx'

export const ThemeContext=createContext();

export default function ThemeSwitcher(){
    const [mode,setMode]=useState(false);

    const handleClick=()=>{
        setMode(!mode);
        }
    return(
        <ThemeContext.Provider value={mode}>
        <div>
            <button onClick={handleClick}>Click me</button>
              <Toggle/>
        </div>
        </ThemeContext.Provider>

        )

    }

