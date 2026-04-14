import {useParams} from 'react-router-dom';

export default function DynamicRoute(){
    const {id}=useParams();

    return(
<h1> Dynamic route id is {id}</h1>
        );

    }