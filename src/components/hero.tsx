import React from 'react';
import Image from 'next/image';

const hero = () => {
  return (
    <div>
        <div className="relative w-full h-[100vh] filter " style={{ filter: 'blur(0.9px)' }}>
            <Image
            src="/heroimg.jpg"
            alt="Wedding Background"
            fill
            className="object-cover"
            priority
            />
      </div>
        <div className="absolute inset-0 flex flex-col pt-60 pl-10 ">
            <h1 className="text-3xl md:text-5xl text-[#005B4C] font-bold mb-6">PLAN YOUR DREAM WEDDING <br />BEAUTIFULLY.</h1>
            <p className="text-1xl md:text-1xl text-[#000000] mb-60">All-in-one wedding planning for couples, guests & vendors.</p>
            <button className="mx-auto text-[#87601F] bg-gradient-to-r from-[#FFEECB] to-[#E5C99C] py-2 w-45 justify-center flex">Start Planning Now <Image src="/arrow.png" alt="arrow" width={19} height={3} /></button>
        </div>
        
    </div>
  )
}

export default hero;
