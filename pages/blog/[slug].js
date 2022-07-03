import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Remarkable } from 'remarkable';
import styles from '../../styles/BlogPost.module.css';
import Head from 'next/head';
import BlogNavBar from '../Components/BlogNav';
import Footer from '../Components/Footer';
export default function Post(props) {
  const md = new Remarkable();
  return (
    <div className={props.theme ? styles.container_light : styles.container}>
      <Head>
        <title>Blog: {props.frontmatter.title}</title>
        <meta name="description" content="Official SSN Coding Club Website" />
        <link rel="icon" href="/favicon.ico" />
        {/* for fontawesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <BlogNavBar transfer={props.theme} setTheme={props.setTheme} />

      <main
        className={
          props.theme
            ? styles.blog_main_container_light
            : styles.blog_main_container
        }
      >
        <div
          className={
            props.theme
              ? styles.breadcrumb_container_light
              : styles.breadcrumb_container
          }
        >
          <button
            className={props.theme ? styles.light_text : styles.dark_text}
            onClick={() => (window.location.href = '/blog')}
          >
            Blog
          </button>

          <div>&gt;</div>
          <div className={styles.breadcrumb_post_title}>
            {props.frontmatter.title}
          </div>
        </div>
        <div className={styles.postImageContainer}>
          <img
            src={props.frontmatter.postImage}
            alt="Blog Image"
            className={styles.postImage}
          />
        </div>
        <div className={styles.blog_title_element_container}>
          <div>
            <h1
              style={{ fontSize: '2.5rem', margin: '15px' }}
              className={props.theme ? styles.title_light : ' '}
            >
              {props.frontmatter.title}
            </h1>
          </div>
          <div
            style={({ textAlign: 'left' }, { minWidth: 'fit-content' })}
            className={styles.creator_info}
          >
            <div className={styles.post_creator}>
              <img
                src={props.frontmatter.authorPic}
                alt="Post Creator"
                className={styles.post_creator_image}
              />
              <div className={styles.post_creator_details}>
                <div className={styles.post_creator_name}>
                  <a href="./" style={props.theme ? { color: 'black' } : null}>
                    {props.frontmatter.authorName}
                  </a>
                </div>
                <div
                  className={
                    props.theme
                      ? styles.post_creator_specialization_light
                      : styles.post_creator_specialization
                  }
                >
                  {props.frontmatter.authorDomain}
                </div>
                <div
                  className={
                    props.theme
                      ? styles.post_creator_specialization_light
                      : styles.post_creator_specialization
                  }
                >
                  {props.frontmatter.publishDate}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={props.theme ? styles.postBody_light : styles.postBody}>
          <div
            dangerouslySetInnerHTML={{ __html: md.render(props.content) }}
          ></div>
        </div>
      </main>
      <div className={styles.placeholder}>
        <Footer theme={props.theme} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('_posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('_posts', slug + '.md'),
    'utf-8'
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
