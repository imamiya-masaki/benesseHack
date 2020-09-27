import React, { useState } from "react";
import styles from "./Login.module.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { createStore } from 'redux';
import reducer from './../../reducer';
import { Link } from "react-router-dom";
const store = createStore(reducer)
const Login = (props) => {
    // var status = "login"
    var [status, setState] = useState("login")
    var [loginId, setLoginId] = useState("test1")
    var [passId, setpassId] = useState("pass1")
    var [beneseId, setBeneseId] = useState("")
    var switchng = function () {
      console.log("status", status)
      if (status=="login") {
        // status = "register"
        setState("register")
      } else {
        // status = "login"
        setState("login")
      }
    }
    const getApi = function () {
      console.log("check", status)
      if (status=="register") {
        axios.post("/api/regist", {
          login_id: loginId,
          login_pass: passId,
          benese_id: ""
        })
      }
      axios.post("http://localhost:8080/api/login", {
        login_id: loginId,
          login_pass: passId,
          benese_id: ""
      })
      .then(res => {
        console.log("check", res)
        if (res.data.Login_pass.length > 0) {
         
        }
      })
    }
    const onLogin = function (get) {
      // console.log("get", get)
      setLoginId(get.target.value)
    }
    const onPass = function (get) {
      // console.log("get", get)
      setpassId(get.target.value)
    }
    const onBenesse = function (get) {
      // console.log("get", get)
      setBeneseId(get.target.value)
    }
    var login = (
    <div className={styles.container}>
      <div className="ui middle aligned center aligned grid">
          <div className="column">
              <h2 className="ui teal image header">
                  {status}
              </h2>
              <form className="ui large form">
              <div className="ui stacked segment">
                  <div className="field">
                  <div className="ui left icon input">
                      <i className="user icon"></i>
                      <input type="text" name="email" value={loginId} onChange={onLogin} placeholder="E-mail address"/>
                  </div>
                  </div>
                  <div className="field">
                  <div className="ui left icon input">
                      <i className="lock icon"></i>
                      <input type="password" name="password"  value={passId} onChange={onPass} placeholder="Password"/>
                  </div>
                  </div>
                  <Link to="/"><div className="ui fluid large teal submit button" onClick={getApi}>{status}</div></Link>
              </div>

              <div className="ui error message"></div>
              </form>
              <div className="ui message" onClick={switchng}><a>registet?</a></div>
          </div>
      </div>
    </div>
    );
    var regist = (
      <div className={styles.container}>
      <div className="ui middle aligned center aligned grid">
          <div className="column">
              <h2 className="ui teal image header">
              {status}
              </h2>
              <form className="ui large form">
              <div className="ui stacked segment">
                  <div className="field">
                  <div className="ui left icon input">
                      <i className="user icon"></i>
                      <input type="text" name="email" placeholder="E-mail address"/>
                  </div>
                  </div>
                  <div className="field">
                  <div className="ui left icon input">
                      <i className="lock icon"></i>
                      <input type="password" name="password" placeholder="Password"/>
                  </div>
                  </div>
                  <div className="ui fluid large teal submit button">{status}</div>
              </div>

              <div className="ui error message"></div>
              </form>
              <div className="ui message" onClick={switchng}><a>login?</a></div>
          </div>
      </div>
    </div>
    );
    var output = function () {
      console.log("check", status, loginId)
        if (status=="login") {
          return login
        } else {
          return regist
        }
    }

    return (
      <div className={styles.container}>
          {output()}
      </div>
  );
};

export default Login;