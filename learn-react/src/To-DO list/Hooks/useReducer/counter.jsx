import {useReducer} from "react";
import Practice from './practice/Practice.jsx'
import CounterWithStep from './counterWithStep.jsx'
import TrafficLight from './TrafficLight.jsx'


const initialState={count:0};
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return{...state,count:state.count+1};
          case 'decrement':
              return{...state,count:state.count-1}
                case 'reset':
                    return initialState;
                default:
                    throw new Error("Unknown action:"+action.type);
        }
    }

export default function CounterUsingReducer(){
    const [state,dispatch]=useReducer(reducer,initialState );

const handlerIncrement=()=>{
    dispatch({type:'increment'})
    }
const handlerDecrement=()=>{
    dispatch({type:'decrement'})
    }
const handleReset =()=>{
    dispatch({type:'reset'})
    }


    return(
        <>
{/*         <h2>Count:{state.count}</h2> */}
{/*         <button onClick={handlerIncrement}>Add</button> */}
{/*         <button onClick={handlerDecrement}>minus</button> */}
{/*         <button onClick={handleReset}>Reset</button> */}
        <TrafficLight/>
        </>
        )
    }