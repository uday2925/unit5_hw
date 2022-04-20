import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"


export const Navbar=()=>{

    const {isAuth,Statuschange}=useContext(AuthContext)
    
    return(
        <nav>
            <button onClick={Statuschange}>{isAuth?"login":"logout"}</button>           
        </nav>
    )
}