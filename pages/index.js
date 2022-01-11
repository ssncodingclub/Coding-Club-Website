/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsChevronDoubleDown } from "react-icons/bs";
import cardDetails from "../data/cardInfo.json";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Tile from "./Components/Tile";
import styles from "../styles/Home.module.css";

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
            <a href="#info">
              <BsChevronDoubleDown
                color="white"
                size="45"
              ></BsChevronDoubleDown>
            </a>
          </div>
        </main>
        <div id="info">
          <Container className={styles.infoContainer}>
            <Row>
              {cardDetails.map((cardInfo, i) => {
                return (
                  <Col md="6" sm="12" lg="4">
                    <Card className={styles.infoContainerCard}>
                      <Card.Img variant="top" src={cardInfo.img} />
                      <Card.Body>
                        <Card.Title className={styles.infoContainerCardTitle}>
                          {cardInfo.title}
                        </Card.Title>
                        <Card.Text> {cardInfo.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <div>
          <div className={styles.thrivingCommunityHeaderContainer}>
            <img src="./HomePage/TC_1.svg" alt="Title-part-1" />
            <img src="./HomePage/TC_2.svg" alt="Title-part-2" />
            <p>
              We are the biggest ever community in SSN. What, you don't believe
              us? We hit 1000+ members on our discord channel in 1 year. Talk
              about speed. Wait there's more - we are what we are because of our
              unrivaled community.
              <br />
              <br /> We engage with everyone and the community chooses what we
              should focus on next. We are present on several platforms and we
              are looking to interact with you!{" "}
            </p>
            <Button className={styles.joinUsButton}>
              <a href="https://linktr.ee/ssncc" target="_blank">Join Us</a>
            </Button>
          </div>
          <Container>
            <img
              src="./HomePage/discord.png"
              alt="Discord screenshot"
              className={styles.discordImage}
            />
          </Container>
        </div>
        <div className={styles.domainSection}>
          {/* lots of domains */}
          <Row>
            <Col sm="12" md="6">
              <img
                src="./HomePage/LoD.png"
                className={styles.domainHeader}
                alt="Title"
              />
            </Col>
          </Row>
          <Row className={styles.domainRow}>
            <Col sm="12" md="5" className={styles.domainImgContainer}>
              <img
                src="./HomePage/cp.png"
                className={styles.domainImages}
                alt="Title"
              />
              <h3 className={styles.domainName}>Competitive Programming</h3>
            </Col>
            <Col sm="12" md="7" className={styles.domainInfoContainer}>
              <p className={styles.domainInfo}>
                We assist you in learning the best practices for competitive
                programming. Through these experiences, you will also get better
                at thinking on your feet.{" "}
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ order: "last" }}
              sm={{ order: "last" }}
              md={{ span: 7, order: "first" }}
              className={styles.domainInfoContainer}
            >
              <p className={styles.domainInfo}>
                We will assist you in building your profile. You can learn the
                best industry practices by building projects. We will also
                enable collaboration in projects.{" "}
              </p>
            </Col>
            <Col
              xs={{ order: "first" }}
              sm={{ order: "first" }}
              md={{ span: 5, order: "last" }}
              className={styles.domainImgContainer}
            >
              <img
                src="./HomePage/sd.png"
                className={styles.domainImages}
                alt="Title"
              />
              <h3 className={styles.domainName}>Software Development</h3>
            </Col>
          </Row>
          <Row className={styles.domainRow}>
            <Col s m="12" md="5" className={styles.domainImgContainer}>
              <img
                src="./HomePage/ml.png"
                className={styles.domainImages}
                alt="Title"
              />
              <h3 className={styles.domainName}>Machine Learning</h3>
            </Col>
            <Col sm="12" md="7" className={styles.domainInfoContainer}>
              <p className={styles.domainInfo}>
                We teach and code machine learning from scratch, providing a
                roadmap for everyone to follow at their own pace.{" "}
              </p>
            </Col>
          </Row>
        </div>
        <div className={styles.opensourceSection}>
          <div className={styles.gradientDiv}>
            <div className={styles.opensourceDiv}>
              <h1>Oops! We do</h1>
              <h1>Open Source too</h1>
              <h6>
                Lorem ipsum dolor sit amet, <br />
                consectetur epsit.
              </h6>
              <button className={styles.openSourceButton}>Check it out</button>
              <img
                src="./HomePage/guy1.png"
                alt="Title"
                className={styles.openSourceImg1}
              />
              <img
                src="./HomePage/guy2.png"
                alt="Title"
                className={styles.openSourceImg2}
              />
            </div>
          </div>
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
  );
}
