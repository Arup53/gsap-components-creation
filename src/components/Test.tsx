import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Test = () => {
  useGSAP(() => {
    gsap.from(".img-hero", {
      y: 100,
      opacity: 0,
      ease: "power1.inOut",
      duration: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <div className="relative h-[100vh] bg-[url('https://www.phonepe.com/static/gradient-desktop-67db057845f6e6447ae80d5ec7617aeb.png')] bg-cover bg-no-repeat flex-center  overflow-hidden ">
      <h1>hello there</h1>

      <img
        src="https://www.apple.com/v/apple-pay/u/images/overview/hero__b48dkf54iseu_xlarge.png" // Replace with actual path
        alt="Mobile"
        className="img-hero absolute -bottom-[80%]  w-[600px] md:w-[600px] z-0"
      />
    </div>
  );
};

export default Test;
