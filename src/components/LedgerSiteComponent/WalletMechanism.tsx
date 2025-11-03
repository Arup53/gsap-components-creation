const WalletMechanism = () => {
  return (
    <div id="walletMechanism" className="py-20  ">
      <div className="row">
        <div className="row flex items-center justify-evenly py-8  ">
          <div className="w-1/2 h-full relative top-56 ">
            <video
              src={"/videos/walletmecha.webm"}
              autoPlay
              playsInline
              loop
              muted
              className="max-w-[576px] h-auto"
            />
          </div>
          <div>
            <p className="heading-3">
              Trade different all <br />
              your crypto &amp; DeFi <br />
              <em>one secure app</em>
              <span className="svg-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M16 20V14C16 9.58 19.58 6 24 6C28.4 6 32 9.58 32 14V20M34 42H14C11.78 42 10 40.2 10 38V24C10 21.78 11.78 20 14 20H34C36.2 20 38 21.78 38 24V38C38 40.2 36.2 42 34 42Z"
                    stroke="#D4A0FF"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletMechanism;
