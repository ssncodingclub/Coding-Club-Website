import React from "react";
import styles from "../../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

function Footer() {
    return (
        <footer className={styles.footerContainer}>

            <div className={styles.footer}>
            <h1>Join us today!</h1>
            <h2>Try! Catch! Show!</h2>
            <div className={styles.social_media}>
                <a 
                  href="https://www.linkedin.com/company/ssn-coding-club/?originalSubdomain=in"
                  target="_blank" 
                  rel="noreferrer" 
                ><FaLinkedin className={styles.social_icon} /></a>
                <a 
                  href="https://github.com/ssncodingclub"
                  target="_blank" 
                  rel="noreferrer" 
                ><FaGithub className={styles.social_icon} /></a>
                <a 
                  href="https://www.instagram.com/ssn_coding_club/"
                  target="_blank" 
                  rel="noreferrer"
                ><FaInstagram className={styles.social_icon} /></a>
            </div>  
            </div>
          
        </footer>
    );
}

export default Footer;