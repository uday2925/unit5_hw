
import { createContext, useState } from "react";
const axios = require('axios');

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
   const [isAuth,setIsauth]=useState(false);
   const [token,setToken]=useState("");
   const Statuschange=()=>{
       setIsauth(!isAuth)

       if(isAuth===true)
       {
        axios.post('https://reqres.in/api/login', {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        })
            .then(function (response) {
                console.log(response);
                setToken(response.data.token)
            })
            .catch(function (error) {
                console.log(error);
            })
       }
       else{
        setToken("");        
       }
        
   }
   

   
   
    


    
    return(
        <AuthContext.Provider value={{isAuth,Statuschange,token}}>{children}</AuthContext.Provider>
    ) 
}



