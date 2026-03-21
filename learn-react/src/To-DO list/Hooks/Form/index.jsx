    import {useState} from 'react';

    export default function form(){

    const [inputValue,setInputValue]=useState('');
    const  [inputOnSubmit ,setInputOnSubmit ]=useState('');


    const handleType=(e)=>{
    setInputValue(e.target.value);
      }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setInputOnSubmit(inputValue)
        }





        return(
            <form onSubmit={handleSubmit}>
              <input value={inputValue} onChange={handleType} />
                <button type='submit'>Submit</button>
                <p>{inputOnSubmit}</p>
                </form>

            );


        }