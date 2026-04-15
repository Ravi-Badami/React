 function withBorder(WrappedComponent){
    return function NewComponent(props){

        const user={name:"ravi",role:"admin",message:"This was added by the HOC"}
        return(
                <div style={ {border:"1px solid black"}}>
                    <WrappedComponent {...props} user={user}/>
                </div>
                )
        }
}

function Greeting({name , user}){
    return(
        <h1>Hello {name} and {user.message}</h1>
        )
    }
export default withBorder(Greeting);