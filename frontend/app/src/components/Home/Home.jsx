import React, {useState, useEffect} from "react";
import styles from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import Hissyoukun from "../../images/hissyou_kun.png";
import MotivonGif from "../../images/stamppush_onetime.gif";
import axios from "axios";
const Home = (props) => {
    const [ moveMotivon, setMoveMotivon] = useState(true);
    var [info, SetInfo] = useState()
    var [reload, SetReload] = useState(false)
    useEffect( () => {
        if (!reload) {
            getApi()
            console.log("check", info)
        }
    });
    var getApi = function () {
        axios.get("http://localhost:8080/api/user_study/" + "1")
        .then((res) => {
            console.log("data", res)
            SetInfo(res.data[0].english_score)
            SetReload(true)
        })
    }
    return (
        <div className={styles.container}>
            <Navbar />
            {moveMotivon && (
                <img src={MotivonGif} className={styles.gif} alt="もちぼん" onClick={() => setMoveMotivon(!moveMotivon)} />
            )}
            
            <div class={styles.bodybox}>
            <div class="ui stackable equal width grid">
                
                <div class="column">
                    <img class={styles.content2} src={Hissyoukun} alt="必勝くん" width="400"></img>
                </div>
                <div class="column">
                    <div class={styles.balloon_left}>
                        <ul>
                            <li>今日もログインしてくれてありがとう！</li>
                            <li>今日の勉強量は {info/10}</li>
                            <li>今日のスタンプ獲得数は　２　</li>
                            <li>だよ！</li>
                        </ul>
                    </div>
                    <div class={styles.dummy_box}></div>
                    <div class="column">
                        <h1>同じクラスの勉強量</h1>
                        <div class={styles.ranking_box}>
                            <ul>
                                <li>１位：８スタ（Aさん）</li>
                                <li>２位：６スタ（Bさん）</li>
                                <li>３位：５スタ（あなた）</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="column">
                        <h1>今日のクエスト</h1>
                        <div class={styles.ranking_box}>
                            <ul>
                                <li>○週の勉強量 ５ 超え</li>
                                <li>○スタンプ獲得数 ５ 超え</li>
                            </ul>
                        </div>
                    </div>
                    <div class={styles.dummy_box}></div>
                    <div class={styles.dummy_box}></div>
                <div class="column">
                    <h1>週間スタンプランキング</h1>
                    <div class={styles.ranking_box}>
                        <ul>
                            <li>１位：５こ（Aさん）</li>
                            <li>２位：４こ（Bさん）</li>
                            <li>３位：２こ（あなた）</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;