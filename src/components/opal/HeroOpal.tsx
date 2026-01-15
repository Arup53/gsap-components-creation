import { useRef, useState } from "react";
import { motion } from "motion/react";

const HeroOpal = () => {
  const videoRef = useRef(null);
  const [animateGradient, setAnimateGradient] = useState(false);
  const [ended, setEnded] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    // If video already ended, rewind before playing
    if (ended) {
      video.currentTime = 0;
      setEnded(false);
    }
    video.playbackRate = 1.5;
    video.play();
    setAnimateGradient(true);
  };

  return (
    <div className="flex justify-center h-[100vh] gap-12">
      {/* VIDEO */}
      <div
        className="py-12 cursor-pointer video-tilt  phone-wrapper"
        onClick={handlePlay}
      >
        <video
          className="phone"
          ref={videoRef}
          onLoadedMetadata={() => {
            videoRef.current.playbackRate = 1.5;
          }}
          width={300}
          muted
          playsInline
          src="./videos/opalhero.webm"
          onPlay={() => setAnimateGradient(true)}
          onEnded={() => {
            setAnimateGradient(false);
            setEnded(true);
          }}
        />
      </div>

      {/* TITLE */}
      <motion.div
        className={`bg-clip-text text-transparent ${
          animateGradient ? "cc-animated-gradient" : ""
        }`}
        style={{
          backgroundImage: "linear-gradient(90deg, #d4ff9c, #9ef9ff)",
        }}
      >
        Focus is hard
      </motion.div>
    </div>
  );
};

export default HeroOpal;
