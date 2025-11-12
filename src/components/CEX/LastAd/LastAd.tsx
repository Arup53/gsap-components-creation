import FirstAnimation from "./animatedObjects/FirstAnimation";
import SecondAnimation from "./animatedObjects/SecondAnimation";
import ThirdAnimation from "./animatedObjects/ThirdAnimation";
import Card from "./Card";

const LastAd = () => {
  return (
    <div className="bg-white py-20">
      <div className="w-1/2 mx-auto grid grid-cols-2 gap-6">
        {/* 1st row */}
        <Card content={"koimoi1st"}>
          <FirstAnimation />
        </Card>
        <Card content={"koimoi1st"}>
          <SecondAnimation />
        </Card>
        {/* 2nd row */}
        <Card content={"koimoi1st"}>
          <ThirdAnimation />
        </Card>
      </div>
    </div>
  );
};

export default LastAd;
