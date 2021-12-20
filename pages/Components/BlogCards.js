import React from "react";
import styles from "../../styles/Blog.module.css";
import cards from "../../data/blogcards.json";
import Link from "next/link";

const BlogCard = ({
  domain,
  publishDate,
  title,
  summary,
  authorName,
  authorPic,
  authorDomain,
  id,
}) => {
  const classNamePrefix = "blogcard_item_",
    className = classNamePrefix + id;
  return (
    <div className={`${className} ${styles.blogcard_item}`}>
      <div className={styles.blogcard_item_image}>
        <img src="./BlogPage/dummyimage.jpg" alt="BlogTitle" className={styles.blogcard_image} />
      </div>
      <div className={styles.blogcard_text_container}>
        <div className={styles.post_info}>
          <div className={styles.post_domain}>Software Development</div>
          <div className={styles.info_divider}></div>
          <div className={styles.post_date}>December 18, 2021</div>
        </div>
        <Link href="/blog" className={styles.post_card_title_link}>
          <h2 className={styles.post_card_title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
        </Link>
        <div className={styles.post_card_summary}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis sunt fuga dignissimos
          ducimus rem doloribus, veritatis aut laborum esse eos reiciendis ipsam quisquam eveniet
          soluta, debitis repellat! Quasi quidem eos natus quibusdam. Architecto dolor quis, sint
          eaque nobis accusantium maiores.
        </div>
        <div className={styles.post_card_creator}>
          <img
            src="./BlogPage/profilepic.png"
            alt="Post Creator Name"
            className={styles.post_creator_image}
          />
          <div className={styles.post_creator_details}>
            <div className={styles.post_card_creator_name}>Post Creator</div>
            <div className={styles.post_card_creator_specialization}>
              Post Creator Specialization
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCards = () => {
  return (
    <div className={styles.blogcards_container}>
      {cards.map((card, i) => (
        <BlogCard
          key={i}
          id={i}
          domain={card.domain}
          publishDate={card.publishDate}
          title={card.title}
          summary={card.summary}
          authorName={card.authorName}
          authorPic={card.authorPic}
          authorDomain={card.authorDomain}
        />
      ))}
    </div>
  );
};

export default BlogCards;
