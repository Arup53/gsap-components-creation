import Marquee from "react-fast-marquee";

const SupportedCoins = () => {
  return (
    <div className="py-24">
      \
      <div className="row">
        <div className="row">
          <div className="row flex items-center justify-between">
            <div className=" text-white">
              <h3 className="title-lg font-bold">Explore 15,000+ crypto</h3>
              <p className="text-xl">
                Bitcoin, Ethereum, Solana, XRP, stablecoins... you name it, it’s
                here.
              </p>
            </div>
            <button className="button rounded-full ">
              See all supported cryptos
            </button>
          </div>
          <div className="row">
            <Marquee gradient gradientColor="black">
              {coinArray?.map((coin) => (
                <div key={coin.id} className="mx-6 my-8">
                  <img src={coin.img} className="h-[64px] w-[64px]" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportedCoins;

const coinArray = [
  { id: 1, img: "/img/new/coins/Arbitrum-logo.webp" },
  { id: 2, img: "/img/new/coins/Bitcoin-Logo.webp" },
  { id: 3, img: "/img/new/coins/bnb-logo.webp" },
  { id: 4, img: "/img/new/coins/Cardano-logo.webp" },
  { id: 5, img: "/img/new/coins/Dai-logo.webp" },
  { id: 6, img: "/img/new/coins/Chainlink-logo.webp" },
  { id: 7, img: "/img/new/coins/Doge-Logo.webp" },
  { id: 8, img: "/img/new/coins/Ethereum-logo.webp" },
  { id: 9, img: "/img/new/coins/litecoin.webp" },
  { id: 10, img: "/img/new/coins/matic-token-icon.webp" },
  { id: 11, img: "/img/new/coins/Optimism.webp" },
  { id: 12, img: "/img/new/coins/Polkadot-logo.webp" },
  { id: 13, img: "/img/new/coins/shiba.webp" },
  { id: 14, img: "/img/new/coins/SizeXL-TypeCoin-AssetUSDT.webp" },
  { id: 15, img: "/img/new/coins/Solana-logo.webp" },
  { id: 16, img: "/img/new/coins/Tron-Logo.webp" },
  { id: 17, img: "/img/new/coins/Uniswap-logo.webp" },
  { id: 18, img: "/img/new/coins/USD_Coin_icon.webp" },
  { id: 19, img: "/img/new/coins/XRP-logo.webp" },
];
