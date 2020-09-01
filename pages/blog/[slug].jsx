import Head from "next/head";
import MainLayout from "../../components/layouts/main";
import { getAll, getBySlug } from "../../api/blogs";
import Post from "../../components/blog/post";

const Blog = ({ blog }) => {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <Post blog={blog} />
    </>
  );
};

Blog.layout = MainLayout;

export async function getStaticPaths() {
  const blogs = await getAll();

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blog = await getBySlug(params.slug);
  return { props: { blog } };
}

export default Blog;
