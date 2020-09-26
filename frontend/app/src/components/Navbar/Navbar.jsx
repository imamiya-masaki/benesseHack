import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={styles.menubar}>
            <div className={styles.namebox}>
                <Link to="/">
                    <h1 className={styles.title}>
                        BenesseHack
                    </h1>
                </Link>
            </div>
            <div className={styles.menu}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                ホーム
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                マイプロフィール
                            </Link>
                        </li>
                        <li>
                            <Link to="/battle">
                                バトル
                            </Link>
                        </li>
                        <li>
                            <Link to="/stamp">
                                スタンプラリー
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default Navbar;