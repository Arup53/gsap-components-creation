import { useGSAP } from "@gsap/react";
import Curvebox from "./Curvebox";
import SmallCurvebox from "./SmallCurvbox";

const TickerSection = () => {
  return (
    <div className="flex-center">
      {/* // container-1 */}

      <Curvebox text={"Mobile Recharge"} />

      <div className="mx-4 flex-center">
        <div className="w-12 h-12 mx-2 rounded-full bg-teal-400" />

        <div className="w-12 h-12 mx-2 rounded-full bg-purple-300" />

        <svg width="24" height="48" viewBox="15 0 30 60">
          <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
        </svg>

        <svg width="24" height="48" viewBox="15 0 30 60">
          <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
        </svg>
      </div>

      <Curvebox text={"Fast Recharge"} />
      <Curvebox text={"Cable TV"} />
      <div className="mx-4 flex-center">
        <div className="w-12 h-12 mx-2 rounded-full bg-purple-300" />

        <svg width="24" height="48" viewBox="15 0 30 60">
          <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
        </svg>

        <svg width="24" height="48" viewBox="15 0 30 60">
          <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
        </svg>
      </div>
      <SmallCurvebox />
      <div className="mx-4 flex-center">
        <div className="w-12 h-12 mx-2 rounded-full bg-purple-300" />

        <svg width="24" height="48" viewBox="15 0 30 60">
          <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
        </svg>

        <svg width="24" height="48" viewBox="15 0 30 60">
          <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
        </svg>
      </div>
    </div>
  );
};

export default TickerSection;
