import Head from "next/head";
import { getAll } from "../api/blogs";
import MainLayout from "../components/layouts/main";
import Header from "../components/general/header";
import Tags from "../components/home/tags";
import Searchbar from "../components/home/searchbar";
import Blogs from "../components/home/blogs";

const Home = ({ error, blogs }) => {
  return (
    <>
      <Head>
        <title>Ronny Liu</title>
      </Head>
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
