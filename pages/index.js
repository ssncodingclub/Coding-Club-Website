/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsChevronDoubleDown } from "react-icons/bs";
import cardDetails from "../data/cardInfo.json";
import styles from "../styles/Home.module.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Tile from "./Components/Tile";
import ReactGA from "react-ga";
ReactGA.initialize("UA-217065873-1");

export default function Home() {
  const [isAppleDevice, setIsAppleDevice] = useState(false);
  const [theme, setTheme] = useState(false);


  function handle(theme) {
    setTheme(theme);
  }
  
  useEffect(() => {
    setIsAppleDevice(/Firefox|iPhone|iPad|iPod/i.test(navigator.userAgent));
    ReactGA.send("pageview");
  }, []);

  return (
    <div className={styles.parallax}>
      <div className={theme ? styles.container_light : styles.container}>
        <Head>
          <title>SSN Coding Club</title>
          <meta name="description" content="Official SSN Coding Club Website" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <Navbar theme={handle} hide={true} />
        <main className={styles.main}>
          <div className={styles.headerSection}>
            {isAppleDevice ? (
              <img
                src="./Title.png"
                className={styles.responsive}
                alt="Title"
              />
            ) : (
              <div className={styles.header}>
                <h1>SSN Coding Club</h1>
              </div>
            )}
            <h1 className={theme ? styles.h1Text_light : styles.h1Text}>
              More than just a club.
            </h1>
            <a href="#info">
              {theme ? (
                <BsChevronDoubleDown
                  color="black"
                  size="45"
                ></BsChevronDoubleDown>
              ) : (
                <BsChevronDoubleDown
                  color="white"
                  size="45"
                ></BsChevronDoubleDown>
              )}
            </a>
          </div>
        </main>
        <div id="info">
          <Container className={styles.infoContainer}>
            <Row>
              {cardDetails.map((cardInfo, i) => {
                return (
                  <Col md="6" sm="12" lg="4">
                    <Card className={theme ? styles.infoContainerCard_light:styles.infoContainerCard}>
                      <Card.Img variant="top" src={cardInfo.img} />
                      <Card.Body>
                        <Card.Title className={theme ? styles.infoContainerCardTitle_light:styles.infoContainerCardTitle}>
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
          <div className={theme ?styles.thrivingCommunityHeaderContainer_light: styles.thrivingCommunityHeaderContainer}>
            {isAppleDevice ? (
              <>
                <img src="./HomePage/TC_1.svg" alt="Title-part-1" />
                <img src="./HomePage/TC_2.svg" alt="Title-part-2" />{" "}
              </>
            ) : (
              <div className={styles.thrivingCommunityHeader}>
                <div className={styles.thrivingCommunityHeader1}>thriving</div>
                <div className={styles.thrivingCommunityHeader2}>community</div>
              </div>
            )}
            <p>
              We are the biggest ever community in SSN. What, you don't believe
              us? We hit 1000+ members on our discord channel in 1 year. Talk
              about speed. Wait there's more - we are what we are because of our
              unrivaled community.
              <br />
              <br /> We engage with everyone and the community chooses what we
              should focus on next. We are present on several platforms and we
              are looking forward to interact with you!{" "}
            </p>
            <Button
              className={
                theme ? styles.joinUsButton_light : styles.joinUsButton
              }
            >
              <a href="https://linktr.ee/ssncc" target="_blank">
                Join Us
              </a>
            </Button>
          </div>
          <Container>
            {/* Request you not to change this screenshot :) */}
            <img
              src="./HomePage/discord.jpg"
              alt="Discord screenshot"
              className={styles.discordImage}
            />
          </Container>
        </div>
        <div className={styles.domainSection}>
          {/* lots of domains */}
          <Row>
            <Col sm="12" md={`${isAppleDevice ? 8 : 12}`}>
              {isAppleDevice ? (
                <img
                  src="./HomePage/LoD.png"
                  className={styles.domainHeaderApple}
                  alt="Title"
                />
              ) : (
                <div className={styles.domainHeader}>
                  <div className={styles.domainHeader1}>Lots of</div>
                  <div className={styles.domainHeader2}>Domains</div>
                </div>
              )}
            </Col>
          </Row>
          <Row className={styles.domainRow}>
            <Col sm="12" md="5" className={styles.domainImgContainer}>
              <img
                src="./HomePage/cp.png"
                className={styles.domainImages}
                alt="Title"
              />
              <h4
                className={theme ? styles.domainName_light : styles.domainName}
              >
                Competitive Programming
              </h4>
            </Col>
            <Col sm="12" md="7" className={styles.domainInfoContainer}>
              <p
                className={theme ? styles.domainInfo_light : styles.domainInfo}
              >
                Join us on a journey to master the tricks of the trade - popular
                CP concepts, algorithms and stratagems, boosting your cognitive,
                logical reasoning and enhancing your coding interview skills
                along the way. We also hold contests where you can compete with
                your peers and challenge yourself. We are available 24/7 to
                clarify your doubts and for any other assistance you may need.
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
              <p
                className={theme ? styles.domainInfo_light : styles.domainInfo}
              >
                Rome wasn't built in a day, and neither was our website. Learn
                state-of-the-art app building and end-to-end full-stack
                development with zero compromises. Do you have anything in
                particular you want to learn? No problem! Our team of developers
                have experience in various fields, and can help out whenever
                required.
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
              <h4
                className={theme ? styles.domainName_light : styles.domainName}
              >
                Software Development
              </h4>
            </Col>
          </Row>
          <Row className={styles.domainRow}>
            <Col s m="12" md="5" className={styles.domainImgContainer}>
              <img
                src="./HomePage/ml.png"
                className={styles.domainImages}
                alt="Title"
              />
              <h4
                className={theme ? styles.domainName_light : styles.domainName}
              >
                Machine Learning
              </h4>
            </Col>
            <Col sm="12" md="7" className={styles.domainInfoContainer}>
              <p
                className={theme ? styles.domainInfo_light : styles.domainInfo}
              >
                What if you were told that 15 years from now, the code that you
                currently write "manually", will learn to write itself
                automatically. Interesting, right? That's barely scratching the
                surface. Come learn about the future with us where we teach and
                code machine learning from scratch. We also provide a roadmap so
                everyone can learn at their own pace.
              </p>
            </Col>
          </Row>
        </div>
        <div className={styles.opensourceSection}>
          <div className={styles.gradientDiv}>
            <div className={styles.opensourceDiv}>
              <h1>Oops! We do</h1>
              <h1>Open Source too!</h1>
              <h6>
                Take a look at <br />
                the projects on our GitHub!
              </h6>
              <button
                className={styles.openSourceButton}
                onClick={() => {
                  location.href = "https://github.com/ssncodingclub";
                }}
              >
                Check it out
              </button>
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
              <Col xs="12" sm="6" md="3" className={styles.tileContainer}>
                <Tile tileColor="blueBG" tileImage="sudoku.jpeg" />
              </Col>
              <Col xs="12" sm="6" md="3" className={styles.tileContainer}>
                <Tile tileColor="greenBG" tileImage="flutter.jpeg" />
              </Col>
              <Col xs="12" sm="6" md="3" className={styles.tileContainer}>
                {/*TODO: Can pass required content for tiles as props */}
                <Tile tileColor="purpleBG" tileImage="mlrecap.jpeg" />
              </Col>
              <Col xs="12" sm="6" md="3" className={styles.tileContainer}>
                <Tile tileColor="redBG" tileImage="induction.jpeg" />
              </Col>

              <Col
                xs="12"
                sm="6"
                md="3"
                className={styles.tileContainer + " " + styles.row2}
              >
                <Tile tileColor="greenBG" tileImage="dp.jpeg" />
              </Col>
              <Col
                xs="12"
                sm="6"
                md="3"
                className={styles.tileContainer + " " + styles.row2}
              >
                <Tile tileColor="redBG" tileImage="pipeline.jpeg" />
              </Col>
              <Col
                xs="12"
                sm="6"
                md="3"
                className={styles.tileContainer + " " + styles.row2}
              >
                <Tile tileColor="blueBG" tileImage="git.jpeg" />
              </Col>

              <Col
                xs="12"
                sm="6"
                md="3"
                className={styles.tileContainer + " " + styles.row2}
              >
                <Tile tileColor="purpleBG" tileImage="devintro.jpeg" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className={styles.placeholder}>
        <Footer theme={theme} />
      </div>
    </div>
  );
}
