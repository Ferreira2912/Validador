import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li>
                    <Link to="/" className={styles.navLink}>Home</Link>
                </li>
                <li>
                    <Link to="/contato" className={styles.navLink}>Contato</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;