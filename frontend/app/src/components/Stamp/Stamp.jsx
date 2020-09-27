import React, { useState } from "react";
import styles from "./Stamp.module.css";
import Navbar from "../Navbar/Navbar";
import stampsheet from "../../images/stampsheet.png";
const Stamp = (props) => {
    var [stamp, SetStamp] = useState("")
    return (
        <div className={styles.container}>
            <Navbar />
            <img src={stampsheet}/>
        </div>
    );
};

export default Stamp;