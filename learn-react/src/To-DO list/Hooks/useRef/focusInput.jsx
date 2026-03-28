import {useRef} from 'react';

export default function FocusInput(){
    const inputRef=useRef(null);

    const handleClick=()=>{
        inputRef.current.focus();
        }

    return(
        <>
        <input type='text' ref={inputRef}/>
        <button  onClick={handleClick}>Focus Input</button>
        </>
        );
}
