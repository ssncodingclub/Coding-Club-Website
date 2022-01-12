import React, { useEffect, useState } from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const [isAppleDevice, setIsAppleDevice] = useState(false);
  useEffect(() => {
    setIsAppleDevice(/iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={isAppleDevice ? styles.appleFooterText : styles.footerText}>
          <h1>Join us today!</h1>
          <h2>Try! Catch! Show!</h2>
        </div>
        <div className={styles.social_media}>
          <a href="https://in.linkedin.com/company/ssn-coding-club" className={styles.linkedin}>
            <FaLinkedin className={styles.social_icon} />
          </a>
          <a href="https://github.com/ssncodingclub" className={styles.github}>
            <FaGithub className={styles.social_icon} />
          </a>
          <a
            href="https://www.instagram.com/ssn_coding_club/"
            target="_blank"
            rel="noreferrer"
            className={`fa fa-instagram ${styles.social_icon}`}
          ></a>
          <a href="https://discord.com/invite/hSGEaRUnws" className={styles.discord}>
            <FaDiscord className={styles.social_icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
