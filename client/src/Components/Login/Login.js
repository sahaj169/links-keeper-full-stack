import React, { useState } from "react";
import Logo from "../../Assets/logo.svg";
import style from "./Login.module.css";
import { MdOutlinePersonOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

function Login() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const Login = (e) => {
    e.preventDefault();
    if (name && email) {
      console.log(name);
      console.log(email);
      localStorage.setItem("name", name);
      localStorage.setItem("Username", email);
      window.location.replace("/");
    } else {
      alert("Please provide valid credentials");
    }
  };
  return (
    <div className={style.Logincontainer}>
      <div className={style.logo}>
        <img src={Logo} alt="site" />
        <p style={{ fontSize: "30px" }}>
          {" "}
          <b> LINKS </b>KEEPER
        </p>
      </div>{" "}
      <form
        className={style.form}
        onSubmit={(e) => {
          Login(e);
        }}
      >
        <div className={style.holder}>
          {" "}
          <MdOutlinePersonOutline />{" "}
          <input
            className={style.name}
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={style.holder}>
          {" "}
          <AiOutlineMail />{" "}
          <input
            className={style.name}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit </button>{" "}
      </form>
    </div>
  );
}

export default Login;
