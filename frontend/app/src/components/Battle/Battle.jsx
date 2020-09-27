import React, { useState, useEffect } from "react";
import styles from "./Battle.module.css";
import Navbar from "../Navbar/Navbar";
//import Stampkun from "../../images/stamp_kun.png";
import SomeStampkun from "../../images/somestamp.png";
import Hissyoukun from "../../images/hissyou_kun.png";
import Vs from "../../images/vs.png";
import axios from "axios";




const Battle = (props) => {
    var [flag, SetFlag] = useState(false)
    
    var onclickEvent = function () {
        console.log('true!!', flag)
        SetFlag(true)
    }
    var doDom = function () {
        if (flag) {
            return (<div class="ui modal">
            <div class="header">Header</div>
            <div class="image content">
              <img class="image"/>
              <div class="description">
                <p></p>
              </div>
            </div>
          </div>);
        }
    }
    var doDomStamps = function () {
        if (!false) {
            return (<img src={SomeStampkun} className={styles.somestamp} alt="複数スタンプ" />);
        }　else {
            return (<div></div>);
        }
    }
    var doDomVic = function () {
        if (flag) {
            return (<div>勝利!!</div>);
        }　else {
            return (<div></div>);
        }
    }
    var getDom = function () {
        return (<div className={styles.container}>
            <Navbar />
            <div className="ui center aligned grid">
                {doDom}
                {doDomStamps}
                <img src={SomeStampkun} className={styles.somestamp}  alt="複数スタンプ" />
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
            {doDomVic}
            <button onClick={onclickEvent} className="ui button">バトル！！</button>
        </div>);
    }
    return (
        <div className={styles.container}>
            <Navbar />
            <div className="ui center aligned grid">
                {doDom}
                {doDomStamps}
                <img src={SomeStampkun} className={styles.somestamp}  alt="複数スタンプ" />
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
            {doDomVic}
            <button onClick={onclickEvent} className="ui button">バトル！！</button>
        </div>
    );
};

export default Battle;