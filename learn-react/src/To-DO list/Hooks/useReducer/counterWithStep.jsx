import {useReducer} from 'react';


const initialState={count:0,inputVal:''};
const reducer=(state,action)=>{
    switch(action.type){

        case 'Incremnet':
            return {...state,count:state.count+1};
        case 'Decrement':
            return{...state,count:state.count-1};
        case 'Set_input':
        return{...state,inputVal:action.payload};
        case 'Add_by_step':
            return{...state,count:state.count+Number(state.inputVal)}
        }
    }

export default function  CounterWithStep(){
    const[state,dispatch]=useReducer(reducer,initialState);
    const handleIncrement=()=>{
        dispatch({type:"Incremnet"})
        }
    const handleInput=(e)=>{
        dispatch({type:'Set_input',payload:e.target.value})
        }

    const handleClickWithInput=()=>{
        dispatch({type:'Add_by_step'})
        }
    return(
        <>
        <p>count{state.count}</p>
        <button onClick={handleIncrement}>Add</button>
        <input
        value={state.inputVal}
        onChange={handleInput}
        />
        <button onClick={handleClickWithInput}>Add </button>
        </>
        )

    }