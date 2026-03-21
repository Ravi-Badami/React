import {useState} from 'react';

export default function Todo(){
    const [list,setList]=useState([]);
    const [inputValue,setInputValue]=useState('');

    const handleInput=(e)=>{

        setInputValue(e.target.value);

        }
const handleSubmit=(e)=>{
    e.preventDefault();
    setList([...list,inputValue]);
    }

    return(
        <div>
    <form onSubmit={handleSubmit}>
    <input
    value={inputValue}
    onChange={handleInput}
    />
    <button type="submit">add</button>
    </form>
    <div>
        {list.map((val)=>(
            <p>{val}</p>
            )
            )}
        </div>
    </div>


        )

    }