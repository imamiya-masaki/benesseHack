import React, { useState, useEffect } from "react";
import posed from 'react-pose';
import styles from "./Battle.module.css";
import Navbar from "../Navbar/Navbar";
//import Stampkun from "../../images/stamp_kun.png";
import SomeStampkun from "../../images/somestamp.png";
import Hissyoukun from "../../images/hissyou_kun.png";
import Vs from "../../images/vs.png";
import axios from "axios";

    return (
        <div className={styles.container}>
            <Navbar />
            <div className="ui center aligned grid">
                <img src={SomeStampkun} className={styles.somestamp} alt="複数スタンプ" />
                <img src={Hissyoukun} className={styles.hissyoukun} alt="必勝くん" />
                <img src={Vs} className={styles.vs} alt="VSマーク" />

                <div className={styles.status}>
                    <ul>
                        <li>攻撃（勉強量）：？？？</li>
                        <li>防御（ログイン回数）：？？？</li>
                        <li>HP（進研模試偏差値）：？？？</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Battle;