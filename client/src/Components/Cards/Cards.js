import React, { useState } from "react";
import LinkCard from "./LinkCard";
import Edit from "./EditCard";

const Card = ({ data, change, setchange }) => {
  const [edit, setedit] = useState(false);

  return (
    <>
      {edit ? (
        <Edit setedit={setedit} data={data} change={change} setchange={setchange} />
      ) : (
        <LinkCard setedit={setedit} data={data} change={change} setchange={setchange} />
      )}{" "}
    </>
  );
};

export default Card;
