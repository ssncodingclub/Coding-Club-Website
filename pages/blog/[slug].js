import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Remarkable } from "remarkable";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";


export default function Post({ frontmatter: { title, publishDate, postImage, authorName, authorPic, authorDomain }, slug, content }) {
  const md = new Remarkable();
  return (
    <div className={styles.PostPageMain}>
      <div className={styles.back}>
        <Link href="./" className={styles.btn}><FaArrowLeft size={50} className={styles.backBtn} /></Link>
        <p className={styles.backText}>back to blogs</p>
      </div>
      <div className={styles.postPage}>
        <div><h1 style={{"font-size": "3rem", "margin": "15px"}}>{title}</h1></div>
        <div style={{"text-align": "left"}} className={styles.creator_info}>
          <div className={styles.post_creator}>
            <img src={authorPic} alt="Post Creator" className={styles.post_creator_image} />
            <div className={styles.post_creator_details}>
              <div className={styles.post_creator_name}>
                <Link href="./">{authorName}</Link>
              </div>
              <div className={styles.post_creator_specialization}>{authorDomain}</div>
            </div>
          </div>
        </div>
        <img src={postImage} alt="Blog Image" className={styles.postImage} />
        <div className={styles.postBody}>
          <div dangerouslySetInnerHTML={{ __html: md.render(content) }}></div>
        </div>
        <div className={styles.postDate}>{publishDate}</div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("_posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log(slug);
  const markdownWithMeta = fs.readFileSync(path.join("_posts", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);
  console.log(frontmatter);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
