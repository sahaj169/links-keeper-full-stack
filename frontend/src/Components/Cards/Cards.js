import React from "react"
import Styles from "./Cards.module.css";
import { BsInfoCircleFill } from "react-icons/bs"
import { FiLink } from "react-icons/fi"

const Card = ()=>{
    return(
        <div className={Styles.majorContainer}>
            <div className={Styles.nameHolder}>
                <BsInfoCircleFill />
                <p>Name</p>
            </div>
            <div className={Styles.nameHolder}>
                <FiLink />
                <p>Link</p>
            </div>
            <div className={Styles.buttonCtn}>
                <button style={{color:"red"}}>
                    Delete                    
                </button>
                <button style={{color:"#F87000"}}>
                    Edit                  
                </button>
            </div>
        </div>
    )
}

export default Card;