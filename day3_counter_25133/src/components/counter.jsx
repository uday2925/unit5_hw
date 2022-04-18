import "./counter.css";

const { useState } = require("react");

function Counter({value})
{
    
    console.log(value)
    const [counter,setCounter]=useState(value);
    //console.log({counter});    
    function handlechange(values)
    {
        setCounter(counter+values);
    }
    function doublefunction()
    {
       setCounter(counter*2);
    }


    return(
        <div>             
            <p className={counter%2===0?"greentxt":"redtxt"}>counter:{counter}</p>
            <button onClick={()=>{handlechange(1)}}>Increment</button>
            <button onClick={()=>{handlechange(-1)}}>decrement</button>
            <button onClick={()=>{doublefunction()}}>Double</button>
        </div>
    )
    
}

export default Counter;



