import { FiUserCheck } from "react-icons/fi";
import { SlLock } from "react-icons/sl";

const Hero = () => {
  return (
    <div className="py-20">
      <div className="row">
        <div className="row flex items-center">
          {/* left */}
          <div className="flex flex-col gap-2">
            <div className="relative inline-block p-4 w-fit -left-2">
              <div className="bg-[#D4A0FF4D] text-white text-xs font-semibold uppercase tracking-wider px-4 py-1">
                LEDGER crypto WALLETS
              </div>

              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-1 h-px bg-[#D4A0FF4D] top-3 left-3"></div>
                <div className="absolute w-px h-1 bg-[#D4A0FF4D] top-3 left-3"></div>

                <div className="absolute w-1 h-px bg-[#D4A0FF4D] top-3 right-3"></div>
                <div className="absolute w-px h-1 bg-[#D4A0FF4D] top-3 right-3"></div>

                <div className="absolute w-1 h-px bg-[#D4A0FF4D] bottom-[20%] left-3"></div>
                <div className="absolute w-px h-1 bg-[#D4A0FF4D] bottom-[20%] left-3"></div>

                <div className="absolute w-1 h-px bg-[#D4A0FF4D]  bottom-[20%] right-3"></div>
                <div className="absolute w-px h-1 bg-[#D4A0FF4D]  bottom-[20%] right-3"></div>
              </div>
            </div>
            <div>
              <h1 className="heading-3 font-bold">
                Freedom never felt so good
              </h1>
            </div>
            <div>
              <p className="text-lg font-bold w-4/5">
                Take control of more than just your crypto with Ledger Nano™
                Gen5 signer and the all-in-one Ledger Wallet™ app
              </p>
            </div>

            <div className="flex items-center gap-2 my-6">
              <div>
                <button className="flex items-center gap-6 py-4 px-12  text-base rounded-full bg-[#FF5300]">
                  <span className="block font-bold">
                    Discover Ledger Wallet
                  </span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
              <p className="flex justify-between items-center gap-2 text-white text-base ml-2">
                <span className="block font-bold">Discover Ledger Wallet </span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </p>
            </div>

            <div className="flex gap-6  items-center px-6 py-6">
              <div className="flex items-center gap-6 text-white text-3xl ">
                <SlLock />
                <p className="text-xs w-24">Industry-leading security</p>
              </div>
              <div className="h-12 w-px bg-white"></div>
              <div className="flex items-center gap-6 text-white text-3xl">
                <FiUserCheck />
                <p className="text-xs w-24 ">Industry-leading security</p>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-1/2 ">
            <img
              className="h-[640px]  "
              src="/img/new/hero-visual.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
