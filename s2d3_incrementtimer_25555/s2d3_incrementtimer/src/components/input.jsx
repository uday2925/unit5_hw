import { useEffect, useState } from "react"
import {Timer} from "./timer.jsx"

export function Input1(getdata)
{
    
    const [st,setSt]=useState(0);
    const [et,setet]=useState(0); 
    useEffect(()=>{
        
    },[])  
    return(
        <div>
            <input type="text" placeholder="starttime" onChange={(e)=>{setSt(e.target.value)}}/>
            <input type="text" placeholder="endtime" onChange={(e)=>{setet(e.target.value)}} />            
            <Timer intialtime={st} endingtime={et} />            
        </div>
    )
}