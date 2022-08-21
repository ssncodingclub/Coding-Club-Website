import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/about.module.css";
import Navbar from "./Components/Navbar";
import Domain from "./Components/Domain";
import Department from "./Components/Department";
import domains from "../data/domains.json";
import Faq from "./Components/Faq";
import departments from "../data/departments.json";
import { Container, Row } from "react-bootstrap";
import Footer from "./Components/Footer";

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
        {/* for fontawesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Navbar transfer={props.theme} setTheme={props.setTheme} />

      <main
        className={props.theme ? styles.about_main_container_light : styles.about_main_container}
      >
        {isAppleDevice ? (
          <div className={styles.appleHeader}>
            <h1>About Us</h1>
          </div>
        ) : (
          <div className={styles.header}>
            <h1>About Us</h1>
          </div>
        )}
        <div className={styles.subcontainer}>
          <h2 className={props.theme ? styles.subheader_light : styles.subheader}>
            About SSN
          </h2>
          <p className={props.theme ? styles.para_light_main : styles.para_main}>
            SSN Institutions, established by Mr. Shiv Nadar, Founder-Chairman, HCL Technologies, stands out as a
            premier center of higher learning with a mission of pursuing excellence in education and research. With
            an aim to support and foster the thriving coding culture on campus, SSN strives to provide a platform
            for students to hone their technical skills by encouraging them to pursue cutting-edge technology and
            software. It serves as a forum for creative output and facilitates exciting opportunities to innovate,
            collaborate and nurture a zeal for programming . A committed team of faculty and staff play an integral
            role in the realization of the institution’s quest for educational distinction in computing and emerging
            fields.

            <div className="left">
              Dr. T.T. Mirnalinee - Honorary Member
            </div>
            <div className="center">
              Dr. Chitra Babu - Club Incharge
            </div>
            <div className="right">
              Dr. V. Balasubramanian - Club Incharge
            </div>
          </p>
          <h2 className={props.theme ? styles.subheader_light : styles.subheader}>
            What is SSN Coding Club?
          </h2>
          <p className={props.theme ? styles.para_light : styles.para}>
            We are a community of coders specialised in domains like Competitive Coding, Machine
            Learning, Web and App Development etc. We aim to support and nurture future developers
            and ensure equity in coding!
          </p>
        </div>
        <div>
          <h2 className={props.theme ? styles.subheader_light : styles.subheader}>
            What do we do?
          </h2>
          <Container className={`mt-10` + " " + styles.departmentContainer}>
            <Row>
              {departments.map((department, index) => {
                return <Department key={index} department={department} theme={props.theme} />;
              })}
            </Row>
          </Container>
        </div>
        <div className={styles.content}>
          <h2 className={props.theme ? styles.subheader_light : styles.subheader}>
            Meet the team!
          </h2>
          {domains.map((domain, i) => {
            return <Domain key={i} domain={domain} theme={props.theme} />;
          })}
        </div>
        <div className={styles.faq}>
          <h2 className={props.theme ? styles.subheader_light : styles.subheader}>
            Frequently Asked Questions
          </h2>
          <Container className={styles.faqContainer}>
            <Faq theme={props.theme} />
          </Container>
        </div>
      </main>
      <div className={styles.placeholder}>
        <Footer theme={props.theme} />
      </div>
    </div>
  );
}
