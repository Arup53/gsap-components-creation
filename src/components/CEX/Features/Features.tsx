import FirstCard from "./FirstCard";
import FourthCard from "./FourthCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";

const Features = () => {
  return (
    <div className="bg-white py-20">
      <div className="w-1/2 mx-auto">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
        <FourthCard />
      </div>
    </div>
  );
};

export default Features;
