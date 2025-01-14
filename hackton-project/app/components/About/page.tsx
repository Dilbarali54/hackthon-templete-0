import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">

    <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
      <Image
        src={"/asgard.jpg"}
        alt="sofases"
        width={600}
        height={600}
        className="rounded-full ml-20"
      />
    </div>
    <div className="md:w-1/2 md:pl-12 text-center md:text-left">
      <h2 className=" text-black  text-6xl mb-8">
        Asgaard sofa <br />
      </h2>
      <p> "Experience unparalleled comfort with our premium 3-seater sofas. Perfectly designed to blend style and relaxation, these sofas add a touch of elegance to any living space. Crafted with high-quality materials, they ensure lasting durability and timeless beauty. Whether it's a cozy haven for family gatherings or a stylish centerpiece for your living room, our 3-seater sofas provide the perfect balance of luxury and everyday comfort. </p>
    </div>
  </div>
  )
}

export default About
