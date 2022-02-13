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
import { withRouter } from 'next/router';


function About({ router: { query } }) {

  let neww = false;
  if(query.currTheme === "light")
  {
    neww = true;
  }
  const [isAppleDevice, setIsAppleDevice] = useState(false);
  const [theme, setTheme] = useState(neww);
  

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
      <Navbar theme={handle} hide={true} transfer={theme} />

      <main className={theme? styles.about_main_container_light : styles.about_main_container}>
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
          <h2 className={theme ? styles.subheader_light :styles.subheader}>What is SSN Coding Club?</h2>
          <p className={theme ?styles.para_light:styles.para}>
            We are a community of coders specialised in domains like Competitive Coding, Machine
            Learning, Web and App Development etc. We aim to support and nurture future developers
            and ensure equity in coding!
          </p>
        </div>
        <div> 
          <h2 className={theme ? styles.subheader_light :styles.subheader}>What do we do?</h2>
          <Container className="mt-10" className={styles.departmentContainer}>
            <Row>
              {departments.map((department, index) => {
                return <Department key={index} department={department} theme={theme} />;
              })}
            </Row>
          </Container>
        </div>
        <div className={styles.content}>
          <h2 className={theme ? styles.subheader_light :styles.subheader}>Meet the team!</h2>
          {domains.map((domain, i) => {
            return <Domain key={i} domain={domain} theme={theme} />;
          })}
        </div>
        <div className={styles.faq}>
          <h2 className={theme ? styles.subheader_light :styles.subheader}>Frequently Asked Questions</h2>
          <Container className={styles.faqContainer}>
            <Faq theme={theme}/>
          </Container>
        </div>
      </main>
      <div className={styles.placeholder}>
        <Footer theme={theme} />
      </div>
    </div>
  );
}
export default withRouter(About);