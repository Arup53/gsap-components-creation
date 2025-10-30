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
import WalletMechanism from "./components/testComponent/WalletMechanism";
import SupportedCoins from "./components/testComponent/SupportedCoins";
import LedgerWalletInfo from "./components/testComponent/LedgerWalletInfo";
import FAQ from "./components/testComponent/FAQ";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

function App() {
  return (
    <main className="space-b-24">
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
      <WalletMechanism />
      <SupportedCoins />
      <LedgerWalletInfo />
      <Gradient />
      <FAQ />
    </main>
  );
}

export default App;
