import React, { useState } from 'react';
import timelineData from '../data/meets.json'
import styles from "../styles/meets.module.css";
/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { Dropdown } from "react-bootstrap";
import Navbar from "./Components/Navbar";

const TimelineItem = ({ data }) => (
    <div className={styles.timelineItem}>
        <div className={styles.timelineItemContent}>
            <span className={styles.tag} style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            <a
                    href={data.link.url}
                    target="_blank"
                    rel="noreferrer"
                >
                {data.link.text}
            </a>
            <span className={styles.circle} />
        </div>
    </div>
);

const Timeline = (filter) =>    {
    if (filter === "All")   {
        return ( 
            <div className={styles.timelineContainer}>
            {
                timelineData.map((data) => (
                <TimelineItem data={data} />
            ))}
        </div>
        );
    }
    else    {
        return(
        <div className={styles.timelineContainer}>
            {
                timelineData.filter((data) => data.category.tag == filter).map((result) => (
                    <TimelineItem data={result} />
                ))
            }
        </div>);
    }
}

// const Timeline = () =>
//     timelineData.length > 0 && (
//         <div className={styles.timelineContainer}>
//             {timelineData.map((data) => (
//                 <TimelineItem data={data}/>
//             ))}
//         </div>
//     );


export default function Meets()     {
    const [filter, setfilter] = useState("All");

    return ( 
        <div className={styles.container}>
            <Head>
                <title>SSN Coding Club</title>
                <meta name="description" content="Official SSN Coding Club Website" />
                <link rel="icon" href="/favicon.ico" />
                {/* for fontawesome */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <Navbar />
            <Dropdown style={{"margin-left": "90%"}}>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    filters
                </Dropdown.Toggle>
                <Dropdown.Menu style={{"background-color": "#070707"}}>
                    <Dropdown.Item><button className={styles.filterButton} onClick={() => setfilter("All")}>All</button></Dropdown.Item>
                    <Dropdown.Item><button className={styles.filterButton} onClick={() => setfilter("CP")}>CP</button></Dropdown.Item>
                    <Dropdown.Item><button className={styles.filterButton} onClick={() => setfilter("AI/ML")}>ML/AI</button></Dropdown.Item>
                    <Dropdown.Item><button className={styles.filterButton} onClick={() => setfilter("SD")}>SDev</button></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Meets Timeline</h1>
                </div> 
                {Timeline(filter)}
            </div>
        </div>
    )
}