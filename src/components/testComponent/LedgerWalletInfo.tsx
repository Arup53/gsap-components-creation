const LedgerWalletInfo = () => {
  return (
    <div className="py-20">
      <div className="row">
        <div className="row py-8">
          <div className="flex justify-between ">
            <div className="space-y-4">
              <h3 className="heading-3">
                Ledger Wallet™ <br />
                the all-in-one crypto app
              </h3>
              <p>Your assets. Your rules. Your future.</p>
            </div>

            <div className="relative inline-block p-4">
              <div className="bg-[#D4A0FF4D] text-white text-xs font-semibold uppercase tracking-wider px-4 py-1">
                Available on mobile & desktop
              </div>

              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-1 h-px bg-[#D4A0FF4D] top-3 left-3"></div>
                <div className="absolute w-px h-1 bg-[#D4A0FF4D] top-3 left-3"></div>

                <div className="absolute w-1 h-px bg-[#D4A0FF4D] top-3 right-3"></div>
                <div className="absolute w-px h-1 bg-[#D4A0FF4D] top-3 right-3"></div>

                <div className="absolute w-1 h-px bg-[#D4A0FF4D] bottom-[107px] left-3"></div>
                <div className="absolute w-px h-1 bg-[#D4A0FF4D] bottom-[107px] left-3"></div>

                <div className="absolute w-1 h-px bg-[#D4A0FF4D]  bottom-[107px] right-3"></div>
                <div className="absolute w-px h-1 bg-[#D4A0FF4D]  bottom-[107px] right-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* main content */}

        <div className="row flex gap-6 items-center">
          <div className="grid grid-cols-2 grid-rows-11 gap-4">
            {/* row-1 */}
            <div className="border border-[#525252] row-span-5">
              <div>
                <img src="/img/new/top_up_desktop.webp" alt="" />
                <div className="flex flex-col justify-center items-center gap-2 py-4">
                  <h3 className="text-2xl font-bold">Top up with ease</h3>
                  <p className="text-center w-8/12">
                    Choose how you want to fund your accounts: Buy, Sell, Send,
                    Receive.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-[#525252] row-span-6">
              <div>
                <img src="/img/new/dapps_desktop.webp" alt="" className="" />
                <div className="flex flex-col justify-center items-center gap-2 py-4">
                  <h3 className="text-2xl font-bold">Connect to dApps</h3>
                  <p className="text-center w-8/12">
                    Confidently navigate the DeFi landscape from a single secure
                    space.
                  </p>
                </div>
              </div>
            </div>
            {/* row-2 */}
            <div className="border border-[#525252] row-span-6">
              <div>
                <img src="/img/new/swap_desktop.webp" alt="" className="" />
                <div className="flex flex-col justify-center items-center gap-2 py-4">
                  <h3 className="text-2xl font-bold">Diversify your assets</h3>
                  <p className="text-center w-8/12">
                    Swap securely across chains, CEX, DEX. Compare providers
                    with clarity.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-[#525252] row-span-5">
              <div>
                <img src="/img/new/stake_desktop.webp" alt="" className="" />
                <div className="flex flex-col justify-center items-center gap-2 py-4">
                  <h3 className="text-2xl font-bold">Grow your portfolio</h3>
                  <p className="text-center w-8/12">
                    Put your crypto to work for you by staking. Earn cashback by
                    shopping worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/4">
            <img
              src="
            /img/new/side-image.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LedgerWalletInfo;
