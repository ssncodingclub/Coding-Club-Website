/* eslint-disable @next/next/no-img-element */
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { Col, Row, Button, Container, Card } from "react-bootstrap";
import { BsChevronDoubleDown } from "react-icons/bs";
import styles from '../styles/Home.module.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Tile from './Components/Tile';
import cardDetails from '../data/cardInfo.json';
export default function Home() {
  return (
    <div className={styles.parallax}>
      <div className={styles.container}>
        <Head>
          <title>SSN Coding Club</title>
          <meta name="description" content="Official SSN Coding Club Website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main className={styles.main}>
          <div className={styles.headerSection}>
            <img src="./Title.png" className={styles.responsive} alt="Title" />
            <h1 className={styles.h1Text}>More than just a club.</h1>
            <BsChevronDoubleDown color="white" size="45"></BsChevronDoubleDown>
          </div>
        </main>
        <div >
          {/* events,upskill,community section */}
        </div>
        <div >
          {/* thriving community */}
        </div>
        <div className={styles.domainSection}>
          {/* lots of domains */}
          <Row>
            <Col sm="12" md="6">
              <img src="./HomePage/LoD.png" className={styles.domainHeader} alt="Title" />
            </Col>
          </Row>
          <Row className={styles.domainRow}>
            <Col sm="12" md="5" className={styles.domainImgContainer}>
              <img src="./HomePage/cp.png" className={styles.domainImages} alt="Title" />
              <h4 className={styles.domainName}>Competitive Programming</h4>
            </Col>
            <Col sm="12" md="7" className={styles.domainInfoContainer}>
              <p className={styles.domainInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tellus quis lacus laoreet commodo. Vivamus velit dolor, tempor id venenatis id, viverra quis velit. <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tellus quis lacus laoreet commodo. Vivamus velit dolor, tempor id venenatis id, viverra quis velit. </p>
            </Col>
          </Row>
          <Row>
            <Col xs={{ order: "last" }} sm={{ order: "last" }} md={{ span: 7, order: "first" }} className={styles.domainInfoContainer}>
              <p className={styles.domainInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tellus quis lacus laoreet commodo. Vivamus velit dolor, tempor id venenatis id, viverra quis velit. <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tellus quis lacus laoreet commodo. Vivamus velit dolor, tempor id venenatis id, viverra quis velit. </p>
            </Col>
            <Col xs={{ order: "first" }} sm={{ order: "first" }} md={{ span: 5, order: "last" }} className={styles.domainImgContainer}>
              <img src="./HomePage/sd.png" className={styles.domainImages} alt="Title" />
              <h4 className={styles.domainName}>Software Development</h4>
            </Col>

          </Row>
          <Row className={styles.domainRow}>
            <Col sm="12" md="5" className={styles.domainImgContainer}>
              <img src="./HomePage/ml.png" className={styles.domainImages} alt="Title" />
              <h4 className={styles.domainName}>Machine Learning</h4>
            </Col>
            <Col sm="12" md="7" className={styles.domainInfoContainer}>
              <p className={styles.domainInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tellus quis lacus laoreet commodo. Vivamus velit dolor, tempor id venenatis id, viverra quis velit. <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tellus quis lacus laoreet commodo. Vivamus velit dolor, tempor id venenatis id, viverra quis velit. </p>
            </Col>
          </Row>
        </div>
        <div >
          {/* open source */}
        </div>
        <div className={styles.tileSection}>
          <Container fluid>
            <Row className={styles.tileRow}>
              <Col sm="12" md="3" className={styles.tileContainer}>
                {/*TODO: Can pass required content for tiles as props */}
                <Tile tileColor="darkseagreen" />
              </Col>
              <Col sm="12" md="3" className={styles.tileContainer}>
                <Tile tileColor="azure" />
              </Col>
              <Col sm="12" md="3" className={styles.tileContainer}>
              <Tile tileColor="pink" />
              </Col>
              <Col sm="12" md="3" className={styles.tileContainer}>
                <Tile tileColor="lightblue" />
              </Col>
              <Col sm="12" md="3" className={styles.tileContainer}>
                <Tile tileColor="azure" />
              </Col>
              <Col sm="12" md="3" className={styles.tileContainer}>
                <Tile tileColor="lightblue" />
              </Col>
              <Col sm="12" md="3" className={styles.tileContainer}>
              <Tile tileColor="darkseagreen" />
              </Col>
              <Col sm="12" md="3" className={styles.tileContainer}>
                <Tile tileColor="pink" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className={styles.placeholder}></div>
      <Footer />
    </div>
  )
}
