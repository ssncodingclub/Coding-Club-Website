import React from "react";
import styles from "../../styles/Footer.module.css";


function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footer}>
            <h1>Join us today!</h1>
            <h2>Try! Catch! Show!</h2>
            </div>
        </footer>
    );
}

export default Footer;