import React, { useEffect, useState } from "react";
import styles from "../styles/projects.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Navbar from "./Components/Navbar";
import Projects from "../data/projects.json";
import Link from "next/link";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "./Components/Footer";

const RightCard = ({ id, modalIsOpen, closeModal }) => {
  if (id !== null) {
    const { name, projectDescription, projectLink } = Projects[id];
    return (
      <div className={styles.RightCard}>
        {modalIsOpen ? (
          <CloseIcon
            className={styles.rightcard_modalclose}
            onClick={() => closeModal()}
          ></CloseIcon>
        ) : (
          ""
        )}
        <div className={styles.imageContainer}>
          <img src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29kZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
        </div>
        <div className={styles.subheader}>
          <h1>{name}</h1>
        </div>
        <p className={styles.project_desc}>{projectDescription}</p>
        <div className={styles.project_link}>
          <Link href={projectLink}>Check it out</Link>
        </div>
      </div>
    );
  } else {
    return <h2 className={styles.defaulttext_rightcard}>Select any of the Projects!</h2>;
  }
};

const ProjectCard = ({ name, techStack, domain, projectImage, id, width, showDescription }) => {
  const classNamePrefix = "projectcard_item_",
    className = classNamePrefix + id;

  return (
    <div className={`${styles.project_card} ${className}`} onClick={() => showDescription(id)}>
      <div className={styles.projects_card_item_image}>
        <img src={projectImage} alt="ProjectTitle" className={styles.projects_card_image} />
      </div>
      <div className={styles.projects_card_text_container}>
        <div className={styles.project_domain}>{domain}</div>
        <button
          href="/projects"
          className={styles.project_card_title_link}
          onClick={() => {
            console.log("clicked");
          }}
        >
          <h2 className={styles.project_card_title}>{name}</h2>
        </button>
        <div className={styles.project_card_summary}>{techStack}</div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [projectId, setprojectId] = useState(null);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  useEffect(() => {
    Modal.setAppElement("body");
    setWindowWidth(window.screen.width);
    setIsAppleDevice(/iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  const showDescription = (id) => {
    setprojectId(id);
    if (windowWidth <= 425) showModal();
  };
  const disableScrolling = () => {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  };
  const enableScrolling = () => {
    window.onscroll = function () {};
  };
  const showModal = () => {
    disableScrolling();
    setmodalIsOpen(true);
  };
  const closeModal = () => {
    enableScrolling();
    setmodalIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>SSN Coding Club</title>
        <meta name="description" content="Official SSN Coding Club Website" />
        <link rel="icon" href="/favicon.ico" />
        {/* for fontawesome */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Navbar />
      <main className={styles.projects_main_container}>
        {isAppleDevice ? (
          <div className={styles.appleHeader}>
            <h1>Projects</h1>
          </div>
        ) : (
          <div className={styles.header}>
            <h1>Projects</h1>
          </div>
        )}
        {/*
        <div className={styles.subcontainer}>
          <h2 className={styles.subheader}>
            Get immersed in knowledge with our blogs! Catchy Text
          </h2>
        </div> */}

        {Projects.length > 0 ? (
          <div className={styles.project_submain_container}>
            <div className={styles.left_pane}>
              {Projects.map((project, i) => (
                <ProjectCard
                  showDescription={showDescription}
                  width={windowWidth}
                  id={i}
                  name={project.name}
                  domain={project.domain}
                  techStack={project.techStack}
                  projectImage={project.projectImage}
                />
              ))}
            </div>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Project Description"
            >
              <RightCard id={projectId} modalIsOpen={modalIsOpen} closeModal={closeModal} />
            </Modal>
            <div className={styles.right_pane}>
              <RightCard id={projectId} modalIsOpen={modalIsOpen} closeModal={closeModal} />
            </div>
          </div>
        ) : (
          <div className={styles.coming_soon}>Coming Soon 😉</div>
        )}
      </main>
      <div className={styles.placeholder}>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
