import { useState } from "react";
import {Input} from "./Input.jsx" 
import { nanoid } from 'nanoid';
import "./Todo.css";

export function Todo()
{
    const [todolist,setTodolist]=useState([]);

    const handledata=(data)=>{
        const dataintake={
            title:data,
            status:false,
            id:nanoid(3)
        }
        setTodolist([...todolist,dataintake])
    }

    const changestatus=(id)=>{
        var datas=todolist.map((e)=>{
            if(e.id===id)
            {
                e.status=!e.status
            }
            return e;
        })
        setTodolist(datas)
    }
    return (
        <div>
            <Input getdata={handledata}/>
            {todolist.map((e)=>{
                return(
                <div>
                    <div className={e.status?"greenc":"redc"}>{e.title}:{e.status?"Done":"Not Done"}::<button onClick={()=>{changestatus(e.id)}}>Toggle</button></div>
                    
                </div>
            )})}
            
        </div>
    )
}