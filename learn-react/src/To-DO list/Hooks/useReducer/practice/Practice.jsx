import {useReducer} from 'react';

const initialState ={count:0};
const reducer=(state,action)=>{
    switch(action.type){

        case 'Increment':
        return {...state,count:state.count+1};
        case 'Decrement':
            return{...state,count:state.count-1};

        case 'reset':
            return initialState ;
            default:
                    throw new Error('Unknown type',action.type);

    }}

export default function Counter(){
    const [state,dispatch]=useReducer(reducer,initialState );
    const handleIncrement=()=>{
        dispatch({type:'Increment'});
        };
    const handleDecrement=()=>{
            dispatch({type:'Decrement'});
            };
        const handleReset=()=>{
            dispatch({type:'reset'});
            }



    return(
        <>
        <p> Count{state.count} </p>
        <button onClick={handleIncrement}> Add</button>
        <button onClick={handleDecrement}> Remove</button>
        <button onClick={handleReset}>Reset </button>

        </>
        )

    }


