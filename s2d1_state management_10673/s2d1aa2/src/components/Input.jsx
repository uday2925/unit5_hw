import { useState } from "react"



export function Input({getdata})
{
    const [text,setText]=useState("");
    
    return (
        <div>
            <input onChange={(e)=>{setText(e.target.value)}} type="text" />
            <button onClick={()=>{getdata(text)}}>+</button>
        </div>
    )
}