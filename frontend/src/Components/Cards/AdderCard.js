import React, { useState } from "react"
import Styles from "./Cards.module.css";
import { BsInfoCircleFill} from "react-icons/bs"
import { FiLink } from "react-icons/fi"

const Adder = ({ hideAdderCard, submit })=>{

    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    return(
        <div className={Styles.majorContainer}>
            <div className={Styles.nameHolder}>
                <BsInfoCircleFill />
                <input type="text" className={Styles.input} value={name} placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className={Styles.nameHolder}>
                <FiLink />
                <input type="text" className={Styles.input} value={link} placeholder="Link" onChange={(e)=>{setLink(e.target.value)}}/>
            </div>
            <div className={Styles.buttonCtn}>
                <button onClick={()=>{
                    submit(name, link)
                }}>
                    Submit                    
                </button>
                <button onClick={()=>{hideAdderCard()}}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default Adder;