/* eslint-disable @next/next/no-img-element */
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { BsChevronDoubleDown } from "react-icons/bs";
import styles from '../styles/Home.module.css';
import Navbar from './Components/Navbar';
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
        {/* events,upskill,community section */}
      </div>
      <div >
        {/* thriving community */}
      </div>
      <div >
        {/* lots of domains */}
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
