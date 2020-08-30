import { getAll } from "../api/blogs";
import classnames from "classnames";
import Page from "../components/general/page";
import Content from "../components/general/content";
import Header from "../components/general/header";
import Tags from "../components/home/tags";
import Searchbar from "../components/home/searchbar";
import Blogs from "../components/home/blogs";

const Home = ({ error, blogs }) => {
  const contentClassNames = classnames({ "vh-100": error });

  return (
    <Page>
      <Content className={contentClassNames}>
        <Header text="blog" />
        <Tags />
        <Searchbar />
        <Blogs error={error} blogs={blogs} />
      </Content>
    </Page>
  );
};

export async function getStaticProps(context) {
  try {
    var blogs = await getAll();
  } catch (err) {
    console.log(err);
    var error = {
      message: "Something went wrong on the server. Please try again later.",
    };
  }

  return {
    props: {
      blogs: blogs ? blogs : null,
      error: error ? error : null,
    },
  };
}

export default Home;
