import blogsApi from "../../api/blogs";
import Page from "../../components/general/page";
import Content from "../../components/general/content";
import Post from "../../components/blog/post";

const Blog = ({ blog }) => {
  return (
    <Page>
      <Content>
        <Post blog={blog} />
      </Content>
    </Page>
  );
};

export async function getStaticPaths() {
  const blogs = await blogsApi.getAll();

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blog = await blogsApi.getBySlug(params.slug);
  return { props: { blog } };
}

export default Blog;
