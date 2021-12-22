import React, { useState } from "react";
import styles from "../styles/projects.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Navbar from "./Components/Navbar";

const ExpandedCard = () => {};

const ProjectCard = ({ name, techStack, domain, projectImage, id }) => {
  const classNamePrefix = "projectcard_item_",
    className = classNamePrefix + id;

  return (
    <div className={`${styles.project_card} ${className}`}>
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

const Projects = () => {
  const projects = [
    {
      name: "Genuine Genie",
      techStack: "Node.js",
      domain: "Software Development",
      projectImage: "./Projects/dummyimage.jpeg",
    },
    {
      name: "Genuine Genie",
      techStack: "Node.js",
      domain: "Software Development",
      projectImage: "./Projects/dummyimage.jpeg",
    },
    {
      name: "Genuine Genie",
      techStack: "Node.js",
      domain: "Software Development",
      projectImage: "./Projects/dummyimage.jpeg",
    },
    {
      name: "Genuine Genie",
      techStack: "Node.js",
      domain: "Software Development",
      projectImage: "./Projects/dummyimage.jpeg",
    },
    {
      name: "Genuine Genie",
      techStack: "Node.js",
      domain: "Software Development",
      projectImage: "./Projects/dummyimage.jpeg",
    },
    {
      name: "Genuine Genie",
      techStack: "Node.js",
      domain: "Software Development",
      projectImage: "./Projects/dummyimage.jpeg",
    },
  ];

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
            {projects.map((project, i) => (
              <ProjectCard
                id={i}
                name={project.name}
                domain={project.domain}
                techStack={project.techStack}
                projectImage={project.projectImage}
              />
            ))}
          </div>

          <div className={styles.right_pane}></div>
        </div>

        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Projects;
