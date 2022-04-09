import React,{useState} from "react"
import Styles from "./NAvbar.module.css"
import Logo from "../../Assets/logo.svg"
// import { AiOutlineLogout } from "react-icons/ai"

const Navbar = ()=>{
    const [Name, setName] = useState("User")
    return(
        <div className={Styles.majorContainer}>
            <div>
                <img src={Logo} alt="site"/>
                <p style={{fontSize:"30px"}}><b>LINK</b>KEEPER</p>
            </div>
            <div>
                <p>{Name}</p>
                
            </div>
        </div>
    )
}

export default Navbar;