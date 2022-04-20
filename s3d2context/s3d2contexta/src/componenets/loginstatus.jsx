import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"


export const Loginstatus=()=>{
   const {token}=useContext(AuthContext) 

    return(        
        <div>
            Status:{token===""?"false":"True"}<br/>
         Token:{token===""?"Please login topper devendra":token}   
        </div>
    )
}