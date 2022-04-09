import React from "react"
import Styles from "./Cards.module.css";
import { IoMdAddCircle } from "react-icons/io"

const AddCard = (props)=>{
    const {
        showAdderCard
    } = props;

    return(
        <div className={Styles.AddContainer} onClick={()=>{
            showAdderCard()
        }}>
            <IoMdAddCircle />
            <p>Add New Link</p>
        </div>
    )
}

export default AddCard;