import { useState } from "react"
import {Timer} from "./timer.jsx"

export function Input1(getdata)
{
    
    const [st,setSt]=useState(0);
    const [et,setet]=useState(0);
    const [start,setStart]=useState(false); 
     
    return(
        <div>
            <input type="text" placeholder="starttime" onChange={(e)=>{setSt(e.target.value)}}/>
            <input type="text" placeholder="endtime" onChange={(e)=>{setet(e.target.value)}} /> 
            {start?<Timer intialtime={st} endingtime={et}/>:null}
            <button onClick={()=>{setStart(!start)}}>stop/start</button>
        </div>
    )
}