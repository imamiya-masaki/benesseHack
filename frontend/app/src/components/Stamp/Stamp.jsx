import React, { useState,useEffect } from "react";
import styles from "./Stamp.module.css";
import Navbar from "../Navbar/Navbar";
import stampsheet from "../../images/stampsheet.png";
import axios from "axios";
const Stamp = (props) => {
    var [stamp, SetStamp] = useState("")
    var [selected, SetSelected] = useState(false)
    var [selectId, SetSelectId] = useState(1)
    var [reload, SetReload] = useState(false)
    useEffect( () => {
        if (!reload) {
            getApi()
            console.log("check", stamp)
        }
    });
    var getApi = function () {
        axios.get("http://localhost:8080/api/user_stamp/" + "1")
        .then((res) => {
            console.log("data", res)
            SetStamp(res.data)
            SetReload(true)
        })
        console.log("stamp", stamp)
    }
    var setter = function (e, selectId) {
        console.log("checkaa", selectId)
        SetSelectId(selectId)
        SetSelected(true)
    }
    var output = function () {
        var set = []
        if (!selected) {
            for (var obj of stamp) {
                console.log("check", obj)
            set.push(<img src={stampsheet} onClick={(res) => setter(res, obj.stamp_type)} className={styles.flex}/>)
            }
        } else if (!!stamp){
            var info = []
            for (let key of Object.keys(stamp[selectId - 1])) {
                console.log('check!!', key, stamp, selectId)
                if (stamp[selectId-1].hasOwnProperty(key) && stamp[selectId-1][key]) {
                    if (key == "user_id" || key == "id")  {
                        continue
                    }
                    let value = "スタンプ数"
                    if (key == "stamp_type") {
                        value = "スタンプ種類"
                    }
                    console.log('check', stamp[selectId-1])
                    info.push(<h1>{value} : {stamp[selectId-1][key]}</h1>)
                }
            }
            var infoDOM = []
            console.log("info", info, stamp)
        set.push(<li><img src={stampsheet} className={styles.big}/>{info}</li>)
        }
        console.log("aa", set, stamp)
        return (<div className={styles.flex}>  {set}  </div>);
    }
    return (
        <div className={styles.container}>
            <div className="ui center aligned grid">
            <Navbar />
            <div className={styles.flex}>
            {output()}
            </div>
            </div>
        </div>
    );
};

export default Stamp;