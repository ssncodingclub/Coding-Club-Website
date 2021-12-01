/* eslint-disable @next/next/no-img-element */
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { Col, Row, Button, Container, Card } from "react-bootstrap";
import { BsChevronDoubleDown } from "react-icons/bs";
import styles from '../styles/Home.module.css';
import Navbar from './Components/Navbar';
import cardDetails from '../data/cardInfo.json';
export default function Home() {
  return (
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
        <Container className={styles.infoContainer}>
          <Row>
            {
              cardDetails.map((cardInfo, i) => {
                return <Col md="6" sm="12" lg="4" >
                  <Card className={styles.infoContainerCard}>
                    <Card.Img variant="top" src={cardInfo.img} />
                    <Card.Body>
                      <Card.Title className={styles.infoContainerCardTitle}>{cardInfo.title}</Card.Title>
                      <Card.Text> {cardInfo.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              })
            }

          </Row>
        </Container>
      </div>
      <div>
        <div className={styles.thrivingCommunityHeaderContainer}>
          <img src="./HomePage/TC_1.svg" alt="Title-part-1" />
          <img src="./HomePage/TC_2.svg" alt="Title-part-2" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tellus quis lacus laoreet commodo. Vivamus velit dolor, tempor id venenatis id, viverra quis velit. </p>
          <Button className={styles.joinUsButton}><a href="#" >Join Us</a></Button>
        </div>
        <Container >
          <img src="./HomePage/discord.png" alt="Discord screenshot" className={styles.discordImage} />
        </Container>
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
          <Col s
            m="12" md="5" className={styles.domainImgContainer}>
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
      <div >
        {/* non stop events+footer */}
      </div>
    </div>
  )
}
