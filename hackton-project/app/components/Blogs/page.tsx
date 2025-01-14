import React from 'react'
import Image from 'next/image'

const Blogs = () => {
  return (
    <div>
         <div className="text-center mb-10 py-28">
        <h2 className="text-3xl font-bold">OUR Blogs</h2>
        <p className="text-gray-600">Find a bright idea to suit your taste with our great selection</p>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-start md:items-center px-10 space-y-10 md:space-y-0">
        <div className="text-center p-5 md:p-16">
          <Image src={"/teakey.jpg"} alt="teakey" width={250} height={270} />
          <p className="mt-2">Going all-in with millennial design</p>
          <h3 className="text-xl font-bold mt-4">Read More</h3>
          <div className="h-1 w-24 bg-slate-500 mx-auto mt-2"></div>
        </div>
        <div className="text-center p-5 md:p-16">
          <Image src={"/laptop.jpg"} alt="laptop" width={250} height={250} />
          <p className="mt-2">Going all-in with millennial design</p>
          <h3 className="text-xl font-bold mt-4">Read More</h3>
          <div className="h-1 w-24 bg-slate-500 mx-auto mt-2"></div>
        </div>
        <div className="text-center p-5 md:p-16">
          <Image src={"/applelaptop.jpg"} alt="applelaptop" width={250} height={250} />
          <p className="mt-2">Going all-in with millennial design</p>
          <h3 className="text-xl font-bold mt-4">Read More</h3>
          <div className="h-1 w-24 bg-slate-500 mx-auto mt-2"></div>
        </div>
      </div>
      <div className="text-center p-5 md:p-4" >
      <h3 className="text-xl font-bold mt-4">View All Post</h3>
      <div className="h-px w-24 bg-black mx-auto mt-2"></div>
      </div>
      <div className="relative w-full h-96">
      <Image
        src="/instagram.jpg"
        alt="Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center mb-10 py-32">
        <h2 className="text-4xl font-bold">Our Instagram</h2> <br />
        <h3> Follow our store on instagram</h3>
      <button className="mt-6 py-2 px-4 bg-white text-black rounded-full hover:bg-gray-700">Follow us</button>
      </div>        
      </div>
    </div>
    </div>
  )
}

export default Blogs
