import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
// import cards from "../../data/blogcards";

const BlogTitleCard = (props) => {
  let domain = "Software Development",
    publishDate = "December 18, 2021",
    title = "All About GSOC: Get started on your GSOC journey",
    summary =
      "  GSoC - Google Summer of Code is a global open source program conducted by Google where programmers are paired up with mentors of their favorite open source organizations to work on a real-world project for a certain period of time. The code you contribute to the organization will be used by people all over the world!",
    authorName = "Lokesh",
    authorPic = "./profiles/Dev/lokesh.jpeg",
    postImage = "./BlogPage/GSoC_card.png",
    authorDomain = "Software Dev";
  // let { domain, publishDate, title, summary, authorName, authorPic, authorDomain } = cards[id];

  if (summary.length > 360) summary = summary.substring(0, 356) + "...";
  if (title.length > 60) title = title.substring(0, 57) + "...";

  return (
    <div className={styles.blog_title_element_container}>
      <div className={styles.blog_title_image_container}>
        <img src={postImage} alt="BlogTitle" className={styles.blog_title_image} />
      </div>
      <div className={styles.blog_title_text_container}>
        <div className={styles.post_info}>
          <div className={props.transfer ? styles.post_domain_light:styles.post_domain}>{domain}</div>
          <div className={props.transfer?styles.info_divider_light:styles.info_divider}></div>
          <div className={props.transfer?styles.post_date_light:styles.post_date}>{publishDate}</div>
        </div>
        <Link href="/blog/all-about-gsoc" className={styles.post_title_link}>
          <h1 className={props.transfer? styles.post_title_light:styles.post_title}>{title}</h1>
        </Link>
        <div className={props.transfer? styles.post_summary_light:styles.post_summary}>{summary}</div>
        <div className={styles.post_creator}>
          <img src={authorPic} alt="Post Creator Name" className={styles.post_creator_image} />
          <div className={styles.post_creator_details}>
            <div className={styles.post_creator_name}>
              <a href="blog/"style={props.transfer? {color:"black"}:{color:"white"}}>{authorName}</a>
            </div>
            <div className={styles.post_creator_specialization}>{authorDomain}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitleCard;
