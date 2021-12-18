import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Navbar from "./Components/Navbar";
import styles from "../styles/Blog.module.css";
import BlogTitleCard from "./Components/BlogTitleCard";

export default function Blog() {
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

      <main>
        <div className={styles.header}>
          <h1>Blog</h1>
        </div>
        <div className={styles.subcontainer}>
          <h2 className={styles.subheader}>
            {/*Get immersed in knowledge with our blogs!*/}Catchy Text
          </h2>
        </div>
        <div>
          <BlogTitleCard />
        </div>

        {/* <Footer /> */}
      </main>
    </div>
  );
}
