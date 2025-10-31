const Footer = () => {
  return (
    <div className="py-20">
      <div className="row">
        <div className="row grid grid-cols-4 gap-12">
          {/* 1st column */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="border-2 border-white px-3 py-1">
                <span className="text-white font-bold text-sm tracking-wider">
                  LEDGER
                </span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm space-y-2">
              <p>
                Copyright © Ledger SAS. All rights reserved. Ledger, Ledger
                Stax, Ledger Nano S, Ledger Vault, Bolos are trademarks owned by
                Ledger SAS.
              </p>
              <p className="mt-4">106 rue du Temple, 75003 Paris, France</p>
            </div>

            {/* Payment Methods */}
            <div>
              <p className="text-sm mb-3">Payment methods</p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white px-2 py-1 rounded">
                  <div className="h-4 w-8 bg-gray-800 rounded"></div>
                </div>
                <div className="bg-white text-blue-600 px-2 py-1 rounded text-sm font-bold">
                  VISA
                </div>
                <div className="bg-white px-2 py-1 rounded">
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500 -ml-2"></div>
                  </div>
                </div>
                <div className="bg-white px-2 py-1 rounded">
                  <div className="h-4 w-8 bg-blue-600 rounded"></div>
                </div>
                <div className="bg-white px-2 py-1 rounded">
                  <div className="h-4 w-8 bg-gradient-to-r from-blue-600 to-yellow-400"></div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Hardware Wallet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Ledger Stax
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Ledger Flex
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Ledger Nano X
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Ledger Nano S Plus
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Compare our devices
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Bundles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  All products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Downloads
                </a>
              </li>
            </ul>

            <h3 className="text-white font-semibold mt-8 mb-4">
              Crypto Assets
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Bitcoin wallet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Ethereum wallet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Solana wallet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cardano wallet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  XRP wallet
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd column */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Business</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Ledger Enterprise Solutions
                </a>
              </li>
            </ul>

            <h3 className="text-white font-semibold mt-8 mb-4">For Startups</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Funding from Ledger Cathay Capital
                </a>
              </li>
            </ul>

            <h3 className="text-white font-semibold mt-8 mb-4">
              For Developers
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  The Developer Portal
                </a>
              </li>
            </ul>

            <h3 className="text-white font-semibold mt-8 mb-4">Get started</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Start using your Ledger device
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Compatible wallets and services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  How to buy Bitcoin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Guide before buying bitcoin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Bitcoin Hardware Wallet
                </a>
              </li>
            </ul>

            <h3 className="text-white font-semibold mt-8 mb-4">See also</h3>
          </div>
          {/* 4th column */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Our vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Ledger Academy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  The company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  The people
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Diversity
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>

            <h3 className="text-white font-semibold mt-8 mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Legal Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sales Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Disclaimers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
