/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Badge, Dropdown } from "react-bootstrap";
import timelineData from "../data/meets.json";
import styles from "../styles/meets.module.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { FaPlayCircle,FaFileAlt} from "react-icons/fa";
import { withRouter } from 'next/router';

const TimelineItem = ({ data }) => (
  <div className={styles.timelineItem}>
    <div className={styles.timelineItemContent}>
      <span className={styles.tag} style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <Badge className={styles.meetStatus} bg={data.status==="finished"?"success":"secondary"}>{data.status}</Badge>
      <h4 className={styles.meetTitle}>{data.text}</h4>
      <div className={styles.meetDesc}>{data.description}</div>
      <span ><a href={data.link.url} target="_blank" rel="noreferrer" title="session recordings">
        <FaPlayCircle size={28} style={{ color: data.category.color }}></FaPlayCircle>
      </a>
      {data.resource ? (
        <a href={data.resource.url} target="_blank" rel="noreferrer" title="resources">
          <FaFileAlt className={styles.res_icons} size={28}  style={{ color: data.category.color }}></FaFileAlt>
        </a>
        
      ) : null}</span>

      <span className={styles.circle} />
    </div>
  </div>
);

const Timeline = (filter) => {
  if (filter === "All") {
    return (
      <div className={styles.timelineContainer}>
        {timelineData.map((data) => (
          <TimelineItem data={data} />
        ))}
      </div>
    );
  } else {
    return (
      <div className={styles.timelineContainer}>
        {timelineData
          .filter((data) => data.category.tag == filter)
          .map((result) => (
            <TimelineItem data={result} />
          ))}
      </div>
    );
  }
};

function Meets({ router: { query } }) {
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
  const [filter, setfilter] = useState("All");

  return (
    <>
      <div className={theme? styles.container_light : styles.container}>
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
        {isAppleDevice ? (
          <div className={styles.appleHeader}>
            <h1>Meets Timeline</h1>
          </div>
        ) : (
          <div className={theme ? styles.header_light : styles.header}>
            <h1>Meets Timeline</h1>
          </div>
        )}
        <div className={theme ? styles.dropdownContainer_light  : styles.dropdownContainer}>
          <Dropdown
            style={{ "z-index": "10", position: "relative" }}
            className={theme ? styles.filterDropdown_light :styles.filterDropdown}
          >
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Filters
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ "background-color": "#070707" }}>
              <Dropdown.Item>
                <button className={styles.filterButton} onClick={() => setfilter("All")}>
                  All
                </button>
              </Dropdown.Item>
              <Dropdown.Item>
                <button className={styles.filterButton} onClick={() => setfilter("CP")}>
                  CP
                </button>
              </Dropdown.Item>
              <Dropdown.Item>
                <button className={styles.filterButton} onClick={() => setfilter("AI/ML")}>
                  ML/AI
                </button>
              </Dropdown.Item>
              <Dropdown.Item>
                <button className={styles.filterButton} onClick={() => setfilter("SD")}>
                  SDev
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className={theme ? styles.main_light :styles.main}>
          <div className={theme?styles.subheader_light:styles.subheader}>
            <h1>{filter} meets</h1>
          </div>
          {Timeline(filter)}
        </div>
      </div>
      <div className={styles.placeholder}>
        <Footer theme={theme} />
      </div>
    </>
  );
}
export default withRouter(Meets);
