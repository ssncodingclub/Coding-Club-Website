import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Navbar from "./Components/Navbar";
import styles from "../styles/Blog.module.css";
import BlogTitleCard from "./Components/BlogTitleCard";
import BlogCards from "./Components/BlogCards";
import cards from "../data/blogcards";

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

      <main className={styles.blog_main_container}>
        <div className={styles.header}>
          <h1>Blog</h1>
        </div>
        <div className={styles.subcontainer}>
          <h2 className={styles.subheader}>
            {/*Get immersed in knowledge with our blogs!*/}
            {cards.length > 0 ? "while (i=inspiration):\n\tprint (“scroll down”)":"Coming Soon! 😉"}
          </h2>
        </div>
        {cards.length > 0 ? (
          <>
            <div className={styles.blog_container}>
              <BlogTitleCard cards={cards} id={0} />
            </div>

            <div className={styles.blog_container}>
              <BlogCards cards={cards} />
            </div>
          </>
        ) : (
          <></>
        )}

        {/* <Footer /> */}
      </main>
    </div>
  );
}
