
export const Gradient = () => {
  return <div className="relative w-full min-h-screen bg-black">
  <div 
    className="absolute inset-0"
    style={{
      background: 'radial-gradient(48.71% 46.53% at 50% 50%, #45395c 0%, #000 100%)'
    }}
  />

  <img src="/img/new/1st.webp" alt="" className='absolute top-50 left-50 translate-x-36 w-[1150px]'/>
  <img src="/img/new/2nd.webp" alt="" className='absolute top-50 left-50 translate-x-18 w-[1300px]'/>
  <img src="/img/new/3rd.webp" alt="" className='absolute top-50 left-50 translate-x-18 w-[1300px]'/>
  
 
</div>
}
