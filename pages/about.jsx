import Head from "next/head";
import MainLayout from "../components/layouts/main";
import Header from "../components/general/header";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Ronny Liu</title>
      </Head>
      <Header text="about" />
    </>
  );
};

About.layout = MainLayout;

export default About;
