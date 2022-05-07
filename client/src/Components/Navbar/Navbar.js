import React from "react"
import Styles from "./NAvbar.module.css"
import Logo from "../../Assets/logo.svg"
// import { AiOutlineLogout } from "react-icons/ai"

const Navbar = ({name,userName})=>{
    // const [Name, setName] = useState("")

    // useEffect(() => {
    //     const name = localStorage.getItem("name");
    //     setName(name);
    // }, [])
    return(

            <div className={Styles.majorContainer}>
                <div className={Styles.logo} >
                    <img src={Logo} alt="site"/>
                    <p className={Styles.mainname}><b>LINKS</b>KEEPER</p>
                </div>
                <div className={Styles.userinfo} >
                    <p><b>Name: </b>{name}</p>
                    <p><b>Email: </b>{userName}</p>
                </div>
            </div>
    )
}

export default Navbar;