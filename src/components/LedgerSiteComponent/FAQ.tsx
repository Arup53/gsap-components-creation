import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is a crypto wallet?",
    answer: `Thinking about buying crypto or NFTs? You’ll need a crypto wallet.

When you create a wallet, two keys are generated: a private one and a public one. The wallet stores your keys and enables you to sign transactions, generate new addresses, initiate transfers, track portfolio balances, manage your crypto, and interact with dApps.

Crypto wallets come in many forms, from hardware wallets, like Ledger’s, to mobile apps that you can download on your phone or tablet.`,
  },
  {
    id: 2,
    question: "How do crypto wallets work?",
    answer: `When you buy crypto like Bitcoin and Ethereum, you’re issued two keys: one is public and the other is private.

The public key can be compared to a bank account number that you can share with third parties to receive crypto without worrying that your assets will be compromised.

The private key signs transactions and allows you to send and receive crypto. It’s crucial to keep your private keys secure and secret. If anyone has access to them, they will also have access to any crypto assets associated with those keys.

A crypto wallet stores your private keys and gives you access to your assets.`,
  },

  {
    id: 3,
    question: "What are the different types of crypto wallets?",
    answer: `There are different types of crypto wallets, each with its own benefits and drawbacks.
Hot wallets are connected to the internet and usually convenient to use, however, they are also vulnerable to online attacks. Examples include web-based, mobile, and desktop wallets. Cold wallets keep your private keys offline and out of reach of online threats. Examples include paper and hardware wallets.

Wallets can also be categorized as custodial or non-custodial, depending on who holds the private keys. Storing your crypto in a custodial wallet means that a third party controls your private keys and, therefore, your assets. In contrast, non-custodial wallets, like Ledger’s, enable you to fully own and control your crypto.`,
  },

  {
    id: 4,
    question: "Why do I need a hardware wallet?",
    answer: `Hot wallets store private keys on systems connected to the internet, which makes them susceptible to online attacks. Keeping your crypto on an exchange also means you have no true ownership or control over it. If the exchange files for bankruptcy or pauses withdrawals, you lose access to your funds.

Hardware wallets store your private keys offline, giving you full control and enhanced security. Even if you misplace or lose your hardware wallet, you can get a new one and use your Secret Recovery Phrase to access your assets.`,
  },
];

const FAQ = () => {
  const [selectedId, setSelectedId] = useState(1);

  const selectedFaq = faqs.find((faq) => faq.id === selectedId);

  return (
    <div
      className=" py-20"
      style={{
        background:
          "radial-gradient(48% 70% at 50% 60%, #33293A 0%, #000 100%)",
      }}
    >
      <div className="row ">
        <div className="row py-8">
          <div className="space-y-4">
            <h3 className="heading-3">FAQ</h3>
            <p>Find answers to some of the most common questions.</p>
          </div>
        </div>
        <div className=" row flex justify-center gap-6">
          {/* left */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                onClick={() => setSelectedId(faq.id)}
                className={`relative w-[650px] text-left px-4 py-3 cursor-pointer  overflow-hidden
              ${
                selectedId === faq.id
                  ? "bg-[linear-gradient(90deg,#3A363D_20%,#1F1923_70%,#000_100%)] text-white"
                  : "bg-[#1F1923] text-gray-400 hover:text-white"
              }`}
              >
                {/* Glowing left border - only show when selected */}
                {selectedId === faq.id && (
                  <div className="absolute left-0 top-0 bottom-0">
                    {/* Outer glow */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-6 opacity-30 blur-md"
                      style={{
                        background: "rgba(255, 255, 255, 0.4)",
                      }}
                    />
                    {/* Inner glow */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-3 opacity-50 blur-sm"
                      style={{
                        background: "rgba(255, 255, 255, 0.6)",
                      }}
                    />
                    {/* Solid border */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white" />
                  </div>
                )}

                <span className="relative z-10">{faq.question}</span>
              </div>
            ))}
          </div>

          {/* right */}
          <div className="text-gray-200 leading-relaxed w-[60%]">
            <h3 className="text-lg font-semibold mb-3">
              {selectedFaq.question}
            </h3>
            <p>{selectedFaq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
