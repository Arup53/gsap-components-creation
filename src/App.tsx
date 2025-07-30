import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Test from "./components/Test";
import TickerSection from "./components/TickerSection";
import AdSection from "./components/AdSection";
import SubHero from "./components/SubHero";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      {/* <Navbar /> */}
      <Navbar2 />
      <Test />
      {/* <Hero /> */}
      <SubHero />
      <Art />
      <About />
      <TickerSection />
      <AdSection />
      <Footer />
    </main>
  );
}

export default App;
