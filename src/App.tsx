import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navbar2 from "./components/exchangeApp/Navbar2";
import Test from "./components/exchangeApp/Test";
import SubHero from "./components/exchangeApp/SubHero";
import Art from "./components/exchangeApp/Art";
import About from "./components/exchangeApp/About";
import TickerSection from "./components/exchangeApp/TickerSection";
import AdSection from "./components/exchangeApp/AdSection";
import Footer from "./components/exchangeApp/Footer";
import { Gradient } from "./components/testComponent/Gradient";
import { Products } from "./components/testComponent/Products";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      {/* <Navbar /> */}
      {/* <Navbar2 />
      <Test /> */}
      {/* <Hero /> */}
      {/* <SubHero />
      <Art />
      <About />
      <TickerSection />
      <AdSection />
      <Footer /> */}
      <Products />
      <Gradient />
    </main>
  );
}

export default App;
