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

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Test />
      {/* <Hero /> */}
      <Cocktails />
      <Art />
      <About />
    </main>
  );
}

export default App;
