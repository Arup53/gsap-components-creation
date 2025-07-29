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

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Test />
      {/* <Hero /> */}
      <SubHero />
      <Art />
      <About />
      <TickerSection />
      <AdSection />
    </main>
  );
}

export default App;
