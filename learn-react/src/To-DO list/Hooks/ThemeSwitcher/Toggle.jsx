import {useContext} from 'react';
import {ThemeContext} from './index.jsx'
export default function Toggle(){
    const mode=useContext(ThemeContext);
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