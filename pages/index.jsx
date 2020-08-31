import MainLayout from "../components/layouts/main";
import { getAll } from "../api/blogs";
import classnames from "classnames";
import Page from "../components/general/page";
import Content from "../components/general/content";
import Header from "../components/general/header";
import Tags from "../components/home/tags";
import Searchbar from "../components/home/searchbar";
import Blogs from "../components/home/blogs";

const Home = ({ error, blogs }) => {
  return (
    <>
      <Header text="blog" />
      <Tags />
      <Searchbar />
      <Blogs error={error} blogs={blogs} />
    </>
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

Home.layout = MainLayout;

export default Home;
