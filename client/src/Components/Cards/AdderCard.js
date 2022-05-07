import React, { useState } from "react"
import Styles from "./Cards.module.css";
import { BsInfoCircleFill } from "react-icons/bs"
import { FiLink } from "react-icons/fi"
import axios from "axios";

const Adder = ({ hideAdderCard, change, setchange }) => {

    const [title, setTitle] = useState();
    const [link, setLink] = useState();
    const username = localStorage.getItem('Username')
    const name = localStorage.getItem('name')

    const submit = (e, title, link) => {
        e.preventDefault()
        if (title && link) {

            axios.post(`/api/addLink`, {
                name: name,
                link: link,
                username: username,
                title: title
            }).then(res => {
                console.log(res)

                setchange(!change)
                hideAdderCard()
                alert("New Link Added")
            })
        } else {
            alert("Please Put Valid Title and Link")
        }
    }

    return (
        <form className={Styles.majorContainer} onSubmit={(e) => {
            submit(e, title, link)
        }}>
            <div className={Styles.nameHolder}>
                <BsInfoCircleFill />
                <input type="text" className={Styles.input} value={title} placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} />
            </div>
            <div className={Styles.nameHolder}>
                <FiLink />
                <input type="text" className={Styles.input} value={link} placeholder="Link" onChange={(e) => { setLink(e.target.value) }} />
            </div>
            <div className={Styles.buttonCtn}>
                <button type="submit">
                    Submit
                </button>
                <button onClick={() => { hideAdderCard() }}>
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default Adder;