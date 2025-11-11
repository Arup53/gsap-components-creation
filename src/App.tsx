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

import { Gradient } from "./components/LedgerSiteComponent/Gradient";
import { Products } from "./components/LedgerSiteComponent/Products";
import WalletMechanism from "./components/LedgerSiteComponent/WalletMechanism";
import SupportedCoins from "./components/LedgerSiteComponent/SupportedCoins";
import LedgerWalletInfo from "./components/LedgerSiteComponent/LedgerWalletInfo";
import FAQ from "./components/LedgerSiteComponent/FAQ";
import Ad from "./components/LedgerSiteComponent/Ad";
import Newsletter from "./components/LedgerSiteComponent/Newsletter";
import Footer from "./components/LedgerSiteComponent/Footer";
import Hero from "./components/LedgerSiteComponent/Hero";
import First from "./components/CEX/Hero/First";
import Middle from "./components/CEX/middleAd/Middle";
import Features from "./components/CEX/Features/Features";
import FourthCard from "./components/CEX/Features/FourthCard";

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
      {/* <Hero />
      <Products />
      <WalletMechanism />
      <SupportedCoins />
      <LedgerWalletInfo />
      <Gradient />
      <FAQ />
      <Ad />
      <Newsletter />
      <Footer /> */}
      <First />
      <Middle />
      <Features />
    </main>
  );
}

export default App;
