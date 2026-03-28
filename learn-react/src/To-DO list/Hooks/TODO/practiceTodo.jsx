import {useState} from 'react';

export default function practiceTODO(){
    const [inputValue, setInputValue]=useState('');
    const[list,setList]=useState([]);
    const [id,setId]=useState(0);
    const [editId,setEditId]=useState(null);
    const[editValue,setEditValue]=useState();



    const handleOnClick=(e)=>{
        e.preventDefault();
        const trimmed=inputValue.trim();
        if(!trimmed) return;

        const newId=id+1;
        setId(newId);
        const element={
            id:newId,
            name:inputValue
            }

        setList([...list,element]);
        setInputValue('');
    }

const handleDelete=(id)=>{
    setList(list.filter((item)=>{
       return item.id!=id
        })
    )
    }

const handleEditFocus=(id)=>{
    const item=list.find((item)=>item.id===id);
    if(item){
        setEditId(id);
       setEditValue(item.name);
        }

    }

const handleEditSave=()=>{
    if(!inputValue.trim()) return;
    setList(list.map((item)=>{
        if(item.id===editId){
          return {...item,name:editValue}
            }else{
                return item
             }
        }

    ))
setEditId(null);
setEditValue('');
    }

const handleEditCancel=()=>{
    setEditId(null);
    }

    return(
        <div>
        <form onSubmit={handleOnClick}>
            <input
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            />
            <button type='submit'>Add</button>
        </form>


        {list.map((item)=>
            <div key={item.id}>
                {editId===item.id?(
                    <>
                    <input
                    value={editValue}
                    onChange={(e)=>setEditValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleEditSave();
                    if (e.key === "Escape") handleEditCancel();
                  }}
                    />
                 <button onClick={handleEditSave}>Save</button>
                 <button onClick={handleEditCancel}>Cancel</button>
                 </>
                    ):(
                      <div>
                              <p>{item.name}</p>
                               <button onClick={()=>handleDelete(item.id)}>Delete</button>
                               <button onClick={()=>handleEditFocus(item.id)}>edit</button>
                        </div>
                        )
                    }
          </div>
           )
       }
        </div>

        )

    }