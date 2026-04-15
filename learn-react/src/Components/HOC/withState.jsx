import {useState} from 'react';

function withCounter(WrappedComponent){




    return function WithCounter(props){
        const [count,setCount]=useState(0);
           function incrementCounter(){
                setCount((c)=>c+1);
                }

            function decrementCounter(){
                    setCount((c)=>c-1);
                    }
        return(
            <WrappedComponent
            count={count}
            increment={incrementCounter}
            decrement={decrementCounter}
            {...props}
            />
            )

        }


    }

function Count({count,increment,decrement}){

    return(
        <>
        <button onClick={increment}>increment</button>
        <h1>{count}</h1>
        <button onClick={decrement}>decrement</button>

        </>

        )

    }

export default withCounter(Count);