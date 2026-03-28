import {useRef,useEffect,useState} from 'react';

export default function RenderCounter(){
    const [input,setInput]=useState('');
    const [regularInput,setRegularInput]=useState('');
const count=useRef(0);

useEffect(()=>{
    count.current+=1;
        });

//     count.current+=1;
return(

    <>
    <input
     value={input}
     onChange={(e)=>setInput(e.target.value)}
     />
     <p>Render count:{count.current}</p>
    </>

    )
    }