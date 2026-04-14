import { Routes, Route,Link,useNavigate } from 'react-router-dom';
import {useState} from 'react';
import Footer from './Components/Footer.jsx';
import Head from './Components/Head.jsx';
import Body from './Components/Body.jsx';
import Dynamic from './Components/DynamicRoute.jsx'

export default function App() {
const [inputValue,setInputValue]= useState("");
const navigate=useNavigate();

    const handleInputValue=(e)=>{
        setInputValue(e.target.value)
        }

    function handleOnClick(){
        navigate(`/dynamic/${inputValue}`);
        }


  return (
      <>
      <Link to='/footer' >
      <button>go to footer </button>
      </Link>
      <Link to='/body' >
      <button>go to body </button>
      </Link>

      <Link to='/head' >
      <button>go to head </button>
      </Link>

       <input  value={inputValue}
        onChange={(e)=>handleInputValue(e)}
        />
       <button onClick={handleOnClick} > Submit</button>


    <Routes>
      <Route path='/footer' element={<Footer />} />
      <Route path='/body' element={<Body />} />
      <Route path='/head' element={<Head />} />
      <Route path='/dynamic/:id' element={<Dynamic />} />
    </Routes>
    </>
  );
}
