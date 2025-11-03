import { motion } from "motion/react";
import AnimatedCircles from "./AnimatedCircles";

const First = () => {
  return (
    <div className=" bg-white h-[100vh]">
      <div className="flex flex-col items-center">
        <AnimatedCircles />
        <motion.div
          className="styles_hero_circle_platform"
          initial={{ scaleX: 0.2 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  );
};

export default First;
