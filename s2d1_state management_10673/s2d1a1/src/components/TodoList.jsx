import { Todo } from "./Todo";
import { nanoid } from 'nanoid'
import "./tolist.css"
const { useState } = require("react")


export const Todolist=()=>{
    const [todolist,setTodolist]=useState([]);

    const takedata=(data)=>{
        const payload={
            title:data,
            status:false,
            id:nanoid(5),            
            }        
        setTodolist([...todolist,payload]);
        console.log(todolist)
    }

    const handlechange=(ids)=>{
      var datas=todolist.map((e)=>{
            console.log({e});
            if(e.id===ids)
            {
                e.status=!e.status;
            }
            return e;
        })        
        setTodolist(datas);        
    }

return(
    <div>     
        {/* displaying tasks */}
        {todolist.map((e)=>{
            return (
                    <div className="list">                        
                        Work:{e.title}, status: {e.status?"Done":"Not done"}  
                        {/* <div>id:{e.id}</div> */}
                        <button onClick={()=>handlechange(e.id)}> + </button>                         
                    </div>
                    )                  
             
        })}

        {/* input taking */}
        <Todo getdata={takedata}/>
        
    </div>
)
}