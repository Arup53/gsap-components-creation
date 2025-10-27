export const Products = () => {
  return (
    <div id="products" className="py-20 ">
      <div className="row flex items-center justify-between">
          <div className="title-lg text-white">
            Choose the signers that fit your lifestyle
          </div>
          <button className="button rounded-full">
            Compare Ledger signers 
          </button>
      </div>

      {/* cards */}
      <div className="row flex gap-4 ">

       {productsArray.map(product=><div key={product.id} className="w-80 border border-gray-700/50 rounded-lg overflow-hidden">
      {/* Top section - Image */}
      <div 
        className="relative p-8 pt-12 flex items-center justify-center"
        style={{
          background: 'linear-gradient(180deg, #18141C 20%, #3A2E40  90%) ',
          height: '300px',
         
        }}
      >
      
        <img 
          src={product.image} 
          alt="Ledger Stax" 
          className="relative z-10  w-[250px] h-[250px] object-contain"
        />
      </div>

       <div 
        className="p-8"
        style={{
          background: 'linear-gradient(180deg, #100d12 60%, #000  100%)'
        }}
      >
        <h2 className="text-white text-2xl font-bold mb-3">
          {product.title}
        </h2>
        
        <div className="inline-block bg-gray-700/40 backdrop-blur-sm text-gray-300 text-xs font-medium px-3 py-1.5 mb-4 uppercase tracking-wider rounded">
          {product.secondTitle}
        </div>
        
        <p className="text-white/90 text-sm mb-5 leading-relaxed">
         {product.info}
        </p>
        
        <div className="flex items-center gap-2 mb-5">
          <div className="flex text-white text-lg">
            ★★★★☆
          </div>
          <span className="text-gray-400 text-sm">4.5/5</span>
        </div>
        
        <button className="text-white font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300">
          Discover now 
          <span className="text-lg">→</span>
        </button>
      </div>
      
    </div>)}
        
      </div>
    </div>

  )
}
// #45395c


const productsArray=[
  { id:1,
    image:'/img/new/product1.webp',
    title:'Ledger Stax™',
    secondTitle:'Curved Secure Touchscreen',
    info:'Premium from every angle, the elegant way to diversify your wealth and explore DeFi.'
  },
  { id:2,
    image:'/img/new/product1.webp',
    title:'Ledger Stax™',
    secondTitle:'Curved Secure Touchscreen',
    info:'Premium from every angle, the elegant way to diversify your wealth and explore DeFi.'
  },
  { id:3,
    image:'/img/new/product1.webp',
    title:'Ledger Stax™',
    secondTitle:'Curved Secure Touchscreen',
    info:'Premium from every angle, the elegant way to diversify your wealth and explore DeFi.'
  },
  { id:4,
    image:'/img/new/product1.webp',
    title:'Ledger Stax™',
    secondTitle:'Curved Secure Touchscreen',
    info:'Premium from every angle, the elegant way to diversify your wealth and explore DeFi.'
  },


]