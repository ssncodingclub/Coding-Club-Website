import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Blog.module.css";
import { Container, Row } from "react-bootstrap";
import Link from "next/link";

const BlogTitleCard = () => {
  return (
    <div className={styles.blog_title_element_container}>
      <div className={styles.blog_title_image_container}>
        <img src="./BlogPage/dummyimage.jpg" alt="BlogTitle" className={styles.blog_title_image} />
      </div>
      <div className={styles.blog_title_text_container}>
        <div className={styles.post_info}>
          <div className={styles.post_domain}>Software Development</div>
          <div className={styles.info_divider}></div>
          <div className={styles.post_date}>December 18, 2021</div>
        </div>
        <Link href="/blog" className={styles.post_title_link}>
          <h1 className={styles.post_title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
        </Link>
        <div className={styles.post_summary}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis sunt fuga dignissimos
          ducimus rem doloribus, veritatis aut laborum esse eos reiciendis ipsam quisquam eveniet
          soluta, debitis repellat! Quasi quidem eos natus quibusdam. Architecto dolor quis, sint
          eaque nobis accusantium maiores.
        </div>
        <div className={styles.post_creator}>
          <img
            src="./BlogPage/profilepic.png"
            alt="Post Creator Name"
            className={styles.post_creator_image}
          />
          <div className={styles.post_creator_details}>
            <div className={styles.post_creator_name}>Post Creator</div>
            <div className={styles.post_creator_specialization}>Post Creator Specialization</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitleCard;
