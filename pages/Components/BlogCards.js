import React from "react";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import cards from "../../data/blogcards.json";

const BlogCard = ({
  domain,
  publishDate,
  title,
  summary,
  authorName,
  authorPic,
  authorDomain,
  postImage,
  theme,
  id
}) => {
  const classNamePrefix = "blogcard_item_",
    className = classNamePrefix + id;

  if (summary.length > 360) summary = summary.substring(0, 356) + "...";
  if (title.length > 60) title = title.substring(0, 57) + "...";

  return (
    <div className={`${className} ${styles.blogcard_item}`}>
      <div className={styles.blogcard_item_image}>
        <img src={postImage} alt="BlogTitle" className={styles.blogcard_image} />
      </div>
      <div className={styles.blogcard_text_container}>
        <div className={styles.post_info}>
          <div className={theme? styles.post_domain_light:styles.post_domain}>{domain}</div>
          <div className={theme?styles.info_divider_light:styles.info_divider}></div>
          <div className={theme?styles.post_date_light:styles.post_date}>{publishDate}</div>
        </div>
        {/* hardcoded for gsoc organizations */}
        <Link href="blog/gsoc-organizations" className={styles.post_card_title_link}>
          <h2 className={theme? styles.post_card_title_light:styles.post_card_title}>{title}</h2>
        </Link>
        <div className={theme?styles.post_card_summary_light:styles.post_card_summary}>{summary}</div>
        <div className={styles.post_card_creator}>
          <img src={authorPic} alt="Post Creator Name" className={styles.post_creator_image} />
          <div className={styles.post_creator_details}>
            <div className={styles.post_card_creator_name}>
              <a href="/blog" style={theme?{color:"black"}:{color:"white"}} className={styles.namee}>{authorName}</a>
            </div>
            <div className={styles.post_card_creator_specialization}>{authorDomain}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCards = (props) => {
  return (
    <div className={styles.blogcards_container}>
      {cards
        .filter((card, i) => {
          if (i == 0) return false;
          return true;
        })
        .map((card, i) => (
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
            postImage={card.postImage}
            theme = {props.transfer}
          />
        ))}
    </div>
  );
};

export default BlogCards;
