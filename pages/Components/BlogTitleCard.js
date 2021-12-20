import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Blog.module.css";
import { Container, Row } from "react-bootstrap";
import Link from "next/link";

const BlogTitleCard = () => {
  let domain = "Software Development",
    publishDate = "December 18, 2021",
    title = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    summary =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis sunt fuga dignissimos \
          ducimus rem doloribus, veritatis aut laborum esse eos reiciendis ipsam quisquam eveniet\
          soluta, debitis repellat! Quasi quidem eos natus quibusdam. Architecto dolor quis, sint\
          eaque nobis accusantium maioresLorem ipsum dolor sit.",
    authorName = "Post Creator",
    authorPic = "./BlogPage/profilepic.png",
    authorDomain = "Post Creator Specialization";

  if (summary.length > 360) summary = summary.substring(0, 356) + "...";
  if (title.length > 60) title = title.substring(0, 57) + "...";

  return (
    <div className={styles.blog_title_element_container}>
      <div className={styles.blog_title_image_container}>
        <img src="./BlogPage/dummyimage.jpg" alt="BlogTitle" className={styles.blog_title_image} />
      </div>
      <div className={styles.blog_title_text_container}>
        <div className={styles.post_info}>
          <div className={styles.post_domain}>{domain}</div>
          <div className={styles.info_divider}></div>
          <div className={styles.post_date}>{publishDate}</div>
        </div>
        <Link href="/blog" className={styles.post_title_link}>
          <h1 className={styles.post_title}>{title}</h1>
        </Link>
        <div className={styles.post_summary}>{summary}</div>
        <div className={styles.post_creator}>
          <img src={authorPic} alt="Post Creator Name" className={styles.post_creator_image} />
          <div className={styles.post_creator_details}>
            <div className={styles.post_creator_name}>
              <Link href="/blog">{authorName}</Link>
            </div>
            <div className={styles.post_creator_specialization}>{authorDomain}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitleCard;
