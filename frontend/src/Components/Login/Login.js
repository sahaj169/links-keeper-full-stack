import React, { useState } from "react"
import Logo from '../../Assets/logo.svg'
import style from './Login.module.css'
import { MdOutlinePersonOutline } from "react-icons/md"
import { AiOutlineMail } from "react-icons/ai"
import axios from "axios";

function Login() {
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    // const localusername = localStorage.getItem("Username")
    const Login = async () => {
        if (name && username) {
            console.log("in login")
            axios.post("/api/addUser", { name, username }).then(res => {
                console.log(res.data.user)
                console.log(res.data)
                localStorage.setItem("Username", res.data.user.username)
                localStorage.setItem("Email", res.data.user.name)
            }
            ).catch(err => console.log(err))
        } else {
            alert("Please Fill All The Fields")
        }

    }
    return (
        <div className={style.Logincontainer}>
            <div className={style.logo}>
                <img src={Logo} alt="site" />
                <p style={{ fontSize: "30px" }}><b>LINK</b>KEEPER</p>
            </div>
            <div className={style.form}>
                <div className={style.holder}><MdOutlinePersonOutline /><input className={style.name} placeholder="Name" onChange={(e) => { setName(e.target.value) }} /></div>
                <div className={style.holder}><AiOutlineMail /><input className={style.name} placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} /></div>
                <button onClick={() => {
                    Login()
                }}>
                    Submit
                </button>
            </div>

        </div>
    )
}

export default Login
