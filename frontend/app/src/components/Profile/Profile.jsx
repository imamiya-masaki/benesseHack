import React from "react";
import styles from "./Profile.module.css";
import Navbar from "../Navbar/Navbar";
import Hissyoukun from "../../images/hissyou_kun.png";
import Log from "../../images/log.png";

const Profile = (props) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className="ui two column grid">
                <div className="column">
                    <h1 className={styles.username}>ベネッセ 太郎</h1>
                    <div className={styles.userimage}>
                        <img src={Hissyoukun} className={styles.hissyou} alt="必勝くん" />
                    </div>
                    <div className={styles.status}>
                        <h2>ステータス</h2>
                        <div className={styles.status_contents}>
                            <ul>
                                <li>攻撃（勉強量）：？？？</li>
                                <li>防御（ログイン回数）：？？？</li>
                                <li>HP（進研模試偏差値）：？？？</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className={styles.log}>
                    <img src={Log} className={styles.log} alt="棒グラフ" />
                    </div>
                    <div className={styles.post}>
                        <button className="ui primary button">ノートを撮影</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Profile;