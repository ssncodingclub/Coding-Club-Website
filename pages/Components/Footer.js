import React from "react";
import styles from "../../styles/Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footer}>
              <div className={styles.footerText}>
                <h1>Join us today!</h1>
                <h2>Try! Catch! Show!</h2>
              </div>
            <div className={styles.social_media}>
                <a 
                  href="https://www.linkedin.com/company/ssn-coding-club/?originalSubdomain=in" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`fa fa-linkedin ${styles.social_icon}`}
                ></a> 
                <a 
                  href="https://github.com/ssncodingclub"
                  target="_blank" 
                  rel="noreferrer" 
                  className={`fa fa-github ${styles.social_icon}`}
                ></a>
                <a 
                  href="https://www.instagram.com/ssn_coding_club/"
                  target="_blank" 
                  rel="noreferrer"
                  className={`fa fa-instagram ${styles.social_icon}`}
                ></a>
          </div>
            </div>
        </footer>
    );
}

export default Footer;