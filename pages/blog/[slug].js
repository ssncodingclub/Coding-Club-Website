import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Remarkable } from "remarkable";

export default function Post({ frontmatter: { title, date, cover_image }, slug, content }) {
  const md = new Remarkable();
  return (
    <>
      <div className="card card-page">
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: md.render(content) }}></div>
        </div>
      </div>
    </>
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
