
const { useState } = require("react");


export const Todo=({getdata})=>{
    
    const [Text,setText]=useState("")

    return (
        <div>
            <input type="text" placeholder="Write Something" onChange={(e)=>{
                console.log(e.target.value);
                setText(e.target.value)
            }}/>
            <button onClick={()=>{
                getdata(Text)
            }}>+</button>
        </div>
    )
}