import React,{Component} from 'react';

export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
            };
        }

    handleClick=()=>{
        this.setState({count:this.state.count+1});
        }

    render(){
        return(
            <div>
                <p> Count:{this.state.count} </p>
                <button onClick={this.handleClick}>handleClick</button>
                </div>
            )

        }

    }

// Your Counter class extends Component, meaning Counter is a child class and React.Component is the parent class.
//  In JavaScript, when a child class has a constructor, it must call super() before it can use this.
//     constructor(props) {
//         super(props);  // calls React.Component's constructor
//         this.state = { count: 0 };
//     }
// Think of it this way — this does not exist yet when the constructor starts. It only comes into existence
//  after the parent class (React.Component) sets it up. super(props) triggers that setup.
//  Specifically, passing props to super() ensures this.props is available inside the constructor itself. If you skip props and just write super(),
//  then this.props will be undefined inside the constructor and can cause bugs.
//  In short:
//
//  super() → calls the parent class constructor so this exists
//
//  super(props) → also makes this.props accessible immediately inside the constructor
//
// setState is not just updating data — it also tells React to re-render
// the component so the screen reflects the new value. Direct mutation skips this notification entirely.
// setState is not a keyword. It is a method (a built-in function) that comes from React.Component.So when you write this.setState(...), you are calling a method that React gave your class through inheritance
//  — not using any special JavaScript keyword.

