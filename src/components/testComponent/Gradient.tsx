import React from 'react'

export const Gradient = () => {
  return <div className="relative w-full min-h-screen bg-black">
  <div 
    className="absolute inset-0"
    style={{
      background: 'radial-gradient(48.71% 46.53% at 50% 50%, #45395c 0%, #000 100%)'
    }}
  />
  
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-white text-5xl font-bold mb-4">
      Integrate your Ledger device with numerous wallets
    </h1>
    <p className="text-gray-400 mb-8">
      Ledger hardware wallet secures more than 50 software wallets
    </p>
    {/* Ledger device image and wallet icons */}
  </div>
</div>
}
