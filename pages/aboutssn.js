import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import styles from "../styles/about.module.css"

export default function About(props) {
    const [isAppleDevice, setIsAppleDevice] = useState(false);

    function handle(theme) {
        setTheme(theme);
    }

    useEffect(() => {
        setIsAppleDevice(/Firefox|iPhone|iPad|iPod/i.test(navigator.userAgent));
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>SSN Coding Club</title>
                <meta name="description" content="Official SSN Coding Club Website" />
                <link rel="icon" href="/favicon.ico" />

                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
                />
            </Head>
            <Navbar transfer={props.theme} setTheme={props.setTheme} />
            <main
                className={props.theme ? styles.about_main_container_light : styles.about_main_container}
            >
                {isAppleDevice ? (
                    <div className={styles.appleHeader}>
                        <h1>About SSN</h1>
                    </div>
                ) : (
                    <div className={styles.header}>
                        <h1>About SSN</h1>
                    </div>
                )}
                <div className={styles.subcontainer}>

                    <div className={styles.box}>
                        <img className={styles.ssnimg} src="\ssntower.jpg" alt="ssn" />
                        <p className={props.theme ? styles.para_light_main : styles.para_main}>
                            SSN Institutions, established by Mr. Shiv Nadar, Founder-Chairman, HCL Technologies, stands out as a
                            premier center of higher learning with a mission of pursuing excellence in education and research. With
                            an aim to support and foster the thriving coding culture on campus, SSN strives to provide a platform
                            for students to hone their technical skills by encouraging them to pursue cutting-edge technology and
                            software. It serves as a forum for creative output and facilitates exciting opportunities to innovate,
                            collaborate and nurture a zeal for programming . A committed team of faculty and staff play an integral
                            role in the realization of the institution's quest for educational distinction in computing and emerging
                            fields.
                            <div className={styles.main}>
                                <div>Dr. T.T. Mirnalinee - Honorary Member </div>
                                <div> Dr. Chitra Babu - Club Incharge</div>
                                <div>Dr. V. Balasubramanian - Club Incharge  </div>
                            </div>
                        </p>
                    </div>
                </div>
            </main>
                
            <div className={styles.placeholder}>
                <Footer theme={props.theme} about={true} />
            </div>
        </div>
            );
}