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
        <title>Entagled</title>
        <meta
          name="description"
          content="Landing page for the entagled project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Entagled"
        title=" Why choose us">
        Placeholder
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Footer />
    </>
  );
}

export default Home;