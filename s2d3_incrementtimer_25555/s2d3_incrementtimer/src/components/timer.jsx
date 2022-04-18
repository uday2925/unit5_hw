const { useState, useEffect } = require("react");


export function Timer(prop)
{
    const [timer,setInttime]=useState(prop.intialtime);
    const [endingtime,setEndingtime]=useState(prop.endingtime);
    const [startbutton,setstartbutton]=useState(false)
    
    //as it should fetch after the button is clicked
     

    //it will render multple times for evey setInttime
    // setInterval(()=>{
    //     setInttime(inttime-1);
    // },1000)
    useEffect(()=>{
        const id=setInterval(()=>{
            //after 1st useeffect the inttime will point to garbage value beacuse of which we get stooped at 1 only so we write function inside setintime
            setInttime((prevalue)=>{//here set times gives the curent value of inttime for every increase
                if(prevalue+1===endingtime)
                {
                    clearInterval(id);                    
                }
                return prevalue+1;
            })
            },1000)

            return function cleanup()
            {
                clearInterval(id);
            }            
    },[startbutton])       
     

    return (
        <div>                      
            Timer:{timer}<br></br>
            <button onClick={()=>{
                setstartbutton(!startbutton)
                console.log(startbutton);
            }} >Start</button>
        </div>
    )
} 