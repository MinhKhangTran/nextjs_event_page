import type { NextPage } from "next";
import About from "../components/about";
import Anreise from "../components/anreise";
import Hero from "../components/hero";
import Mitwirkende from "../components/mitwirkende";
import Schedule from "../components/schedule";
import Sponsor from "../components/sponsor";
import Countdown from "../components/countdown";
import CTA from "../components/cta";

const Home: NextPage = () => {
  return (
    <>
      <Hero/>
      <Countdown />
      <About />
      <Mitwirkende />
      <Sponsor />
      <Schedule />
      <Anreise />
      <CTA />
    </>
  );
};

export default Home;
