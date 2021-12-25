import React, { useEffect, useState } from "react";
import styles from "../styles/projects.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Navbar from "./Components/Navbar";
import Projects from "../data/projects.json";
import Link from "next/link";
import Modal from "react-modal";

const RightCard = ({ id }) => {
  console.log(id);
  const { name, projectDescription, projectLink } = Projects[id];
  return (
    <div className={styles.RightCard}>
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
};

const ContributorList = ({ contributors }) => {
  return (
    <div className={styles.ContributorList}>
      <h3>Contributors to this project</h3>
      <div>
        {contributors.map((contributor) => (
          <div className={styles.contributorItem}>
            <img src={contributor.picture} />
            <div className={styles.contributorInfo}>
              <h4>{contributor.name}</h4>
              <p>{contributor.role}</p>
            </div>
            <a
              href="https://github.com/shashankp4nda"
              className={`fa fa-github ${styles.social_icon}`}
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        ))}
      </div>
    </div>
  );
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
  const [projectId, setprojectId] = useState(0);
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  useEffect(() => {
    setWindowWidth(window.screen.width);
  }, []);

  const showDescription = (id) => {
    if (windowWidth <= 425) {
      setprojectId(id);
      showModal();
    }
  };

  const showModal = () => {
    setmodalIsOpen(true);
  };
  const closeModal = () => {
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
        <div className={styles.header}>
          <h1>Projects</h1>
        </div>
        {/*
        <div className={styles.subcontainer}>
          <h2 className={styles.subheader}>
            Get immersed in knowledge with our blogs! Catchy Text
          </h2>
        </div> */}

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
            <RightCard id={projectId} />
          </Modal>
          <div className={styles.right_pane}>
            <RightCard id={projectId} />
          </div>
        </div>

        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default ProjectsPage;
