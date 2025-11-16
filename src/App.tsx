import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import First from "./components/CEX/Hero/HeroCEX";
import Middle from "./components/CEX/middleAd/Middle";
import Features from "./components/CEX/Features/Features";
import LastAd from "./components/CEX/LastAd/LastAd";
import Faq from "./components/CEX/FAQ/Faq";
import Footer from "./components/CEX/Footer/Footer";
import HeroCEX from "./components/CEX/Hero/HeroCEX";
import Navbar from "./components/CEX/Navbar/Navbar";

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
      <Navbar />
      <HeroCEX />
      <Middle />
      <Features />
      <LastAd />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;
