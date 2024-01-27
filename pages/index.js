import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";


const Home = () => {
  return (
    <>
      <Head>
        <title>Entagle</title>
        <meta
          name="description"
          content="Landing page for the entagle project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      {/* <Footer /> */}
    </>
  );
}

export default Home;