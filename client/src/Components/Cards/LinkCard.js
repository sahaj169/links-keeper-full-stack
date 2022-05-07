import React from 'react'

import Styles from "./Cards.module.css";
import { BsInfoCircleFill } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import axios from "axios";
function LinkCard({ setedit, data, change, setchange }) {



    const Delete = (id) => {
        axios.delete(`/api/deleteLink/${id}`).then((res) => {
            console.log(res);
            setchange(!change);
        });
    };

    return (
        <div className={Styles.majorContainer}>
            <div className={Styles.nameHolder}>
                <BsInfoCircleFill />
                <p> {data.title} </p>{" "}
            </div>{" "}
            <div className={Styles.nameHolder}>
                <FiLink />
                <p>
                    {" "}
                    <a href={data.link} target="_blank" rel="noreferrer">
                        {" "}
                        {data.link}{" "}
                    </a>{" "}
                </p>{" "}
            </div>{" "}
            <div className={Styles.buttonCtn}>
                <button
                    style={{ color: "red" }}
                    onClick={() => {
                        Delete(data._id);
                    }}
                >
                    Delete{" "}
                </button>{" "}
                <button
                    style={{ color: "#F87000" }}
                    onClick={() => {
                        setedit(true);
                    }}
                >
                    Edit{" "}
                </button>{" "}
            </div>{" "}
        </div>
    )
}

export default LinkCard
