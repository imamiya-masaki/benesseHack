import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import profile from "../../images/profile.png";
import battlebutton from "../../images/battlebutton.png";
import stampsheet from "../../images/stampsheet.png";
import logo from "../../images/logo.png";
const Navbar = (props) => {
    return (
        <div className={styles.menubar}>
            <div className={styles.namebox}>
                <Link to="/">
                    <h1 className={styles.title}>
                        StudyPocket
                    </h1>
                </Link>
            </div>
            <div >
                <nav>
                <li className={styles.home_menu}><Link to="/"><img src={logo} className={styles.widthlogo}/>ホーム</Link></li>
                <ul className={styles.menu}>
                <li><Link to="/profile"><img src={profile} className={styles.width60}/>プロフィール</Link></li>
                    <li><Link to="/stamp"><img src={stampsheet} className={styles.width60}/>スタンプ</Link></li>
                    <li><Link to="/battle"><img src={battlebutton} className={styles.width60}/>バトル</Link></li>
                 </ul>
                </nav>
            </div>

        </div>
    );
};

export default Navbar;