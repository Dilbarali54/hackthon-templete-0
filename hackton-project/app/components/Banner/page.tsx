import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className=" bg-slate-100 container mx-auto px-4 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
      <Image
        src={"/threesofa.png"}
        alt="sofas"
        width={600}
        height={600}
        className="rounded-full ml-20"
      />
    </div>
    <div className="md:w-1/2 md:pl-12 text-center md:text-left">
      <h1 className="text-xl text-black mb-4 ml-12">New Arivals</h1>
      <h2 className=" text-black font-bold text-4xl mb-4">
        Asgaard sofa
      </h2>
      <a
            href="/#"
            className="inline-block bg-black  text-white font-bold py-2 px-4 rounded-none transition duration-300"
          >
            order Now
          </a>
  
    </div>
  </div>
  )
}

export default Banner
