// Build a traffic light that cycles: Red → Green → Yellow → Red.
//
// State: { color: 'red' }
//
// One button: Next
//
// Action: NEXT_COLOR
//
// Goal: Practice state transitions based on previous state.

import {useReducer} from 'react';

const initialState={color:'red'};

const nextColor={red:'green',green:'yellow',yellow:'red'};
const reducer=(state,action)=>{
    switch(action.type){
        case 'next_light':
            return{...state, color:nextColor[state.color] };
        }

    }

export default function TrafficLight(){
    const [state,dispatch]=useReducer(reducer,initialState);

const handleNext=()=>{
    dispatch({type:'next_light'});
    }
    return(
        <>
        <p>{state.color}</p>
        <button onClick={handleNext}>Next light </button>
        </>
        );

    }


