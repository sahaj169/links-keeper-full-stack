import React from 'react'
import Styles from "./Cards.module.css";
import { BsInfoCircleFill } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import axios from "axios";
import { useState } from "react"
function EditCard({ setedit, data, change, setchange }) {


    const [title, setTitle] = useState(data.title);
    const [link, setLink] = useState(data.link);
    const username = localStorage.getItem("Username");
    const name = localStorage.getItem("name");

    const submit = (e, title, link) => {
        e.preventDefault();
        if (title && link) {
            axios
                .put(`/api/updateLink/${data._id}`, {
                    name: name,
                    link: link,
                    userName: username,
                    title: title,
                })
                .then((res) => {
                    console.log(res);
                    setchange(!change);
                    setedit(false);
                });
        } else {
            alert("Please Fill Valid Title and Link");
        }
    }

    return (
        <form
            className={Styles.majorContainer}
            onSubmit={(e) => {
                submit(e, title, link);
            }}
        >
            <div className={Styles.nameHolder}>
                <BsInfoCircleFill />
                <input
                    type="text"
                    className={Styles.input}
                    value={title}
                    placeholder="Title"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />{" "}
            </div>{" "}
            <div className={Styles.nameHolder}>
                <FiLink />
                <input
                    type="text"
                    className={Styles.input}
                    value={link}
                    placeholder="Link"
                    onChange={(e) => {
                        setLink(e.target.value);
                    }}
                />{" "}
            </div>{" "}
            <div className={Styles.buttonCtn}>
                <button type="submit"> Submit </button>{" "}
                <button
                    onClick={() => {
                        setedit(false);
                    }}
                >
                    Cancel{" "}
                </button>{" "}
            </div>{" "}
        </form>
    )
}

export default EditCard
