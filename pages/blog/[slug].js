import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Remarkable } from "remarkable";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";


export default function Post(props) {
  const md = new Remarkable();
  return (
    <div className={props.theme? styles.PostPageMain_light:styles.PostPageMain}>
      <div className={styles.back}>
        <Link href="./" className={styles.btn}><FaArrowLeft size={50} className={styles.backBtn} /></Link>
        <p className={props.theme? styles.backText_light:styles.backText}>back to blogs</p>
      </div>
      <div className={props.theme?styles.postPage_light:styles.postPage}>
        <div><h1 style={{fontSize: "3rem", margin: "15px"}} className={props.theme? styles.title_light:" "}>{props.frontmatter.title}</h1></div>
        <div style={{textAlign: "left"}} className={styles.creator_info}>
          <div className={styles.post_creator}>
            <img src={props.frontmatter.authorPic} alt="Post Creator" className={styles.post_creator_image} />
            <div className={styles.post_creator_details}>
              <div className={styles.post_creator_name}>
                <a href="./" style={props.theme?{color:"black"}:null}>{props.frontmatter.authorName}</a>
              </div>
              <div className={props.theme?styles.post_creator_specialization_light:styles.post_creator_specialization}>{props.frontmatter.authorDomain}</div>
            </div>
          </div>
        </div>
        <img src={props.frontmatter.postImage} alt="Blog Image" className={styles.postImage} />
        <div className={props.theme?styles.postBody_light:styles.postBody}>
          <div dangerouslySetInnerHTML={{ __html: md.render(props.content) }}></div>
        </div>
        <div className={props.theme?styles.postDate_light:styles.postDate}>{props.frontmatter.publishDate}</div>
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

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params: { slug }}) {
  const markdownWithMeta = fs.readFileSync(path.join("_posts", slug + ".md"), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
