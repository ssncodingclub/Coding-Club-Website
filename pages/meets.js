import React from 'react';
import timelineData from '../data/meets.json'
import styles from "../styles/meets.module.css";
/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsChevronDoubleDown } from "react-icons/bs";
import cardDetails from "../data/cardInfo.json";
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

const Timeline = () =>
    timelineData.length > 0 && (
        <div className={styles.timelineContainer}>
            {timelineData.map((data) => (
                <TimelineItem data={data} />
            ))}
        </div>
    );

export default function Meets()     {
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
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Meets Timeline</h1>
                </div>
                <Timeline />
            </div>
        </div>
    )
}