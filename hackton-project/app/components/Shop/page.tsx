import React from 'react'
import Image from 'next/image'

const Shop = () => {
  return (
    <div className="flex flex-col items-center my-8 py-24">
      <h1 className="text-3xl font-semibold">Shop</h1>
      <div className="flex flex-wrap justify-center mt-6 gap-6">
        <div className="flex flex-col items-center">
          <Image src="/sofachair.png" alt="Trenton modular sofa_3" width={200} height={200} />
          <p className="mt-2">Trenton modular sofa_3</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/chair.png" alt="Granite dining table with dining chair" width={200} height={200} />
          <p className="mt-2">Granite dining table with dining chair</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/tble.png" alt="Outdoor bar table and stool" width={200} height={200} />
          <p className="mt-2">Outdoor bar table and stool</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/desk.png" alt="Plain console with teak mirror" width={200} height={200} />
          <p className="mt-2">Plain console with teak mirror</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-6 gap-6">
        <div className="flex flex-col items-center">
          <Image src="/gaincofe.jpg" alt=" gain coffe" width={200} height={200} />
          <p className="mt-2"> Gain coffe table</p>
          <p className="font-semibold">Rs. 20,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/kantcofe.jpg" alt="Kent coffe" width={200} height={200} />
          <p className="mt-2"> Kent coffe table </p>
          <p className="font-semibold">Rs. 29,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/round.jpg" alt="Outdoor" width={200} height={200} />
          <p className="mt-2"> Round coffe table-color</p>
          <p className="font-semibold">Rs. 15,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/reclaimed.jpg" alt="coffee" width={200} height={200} />
          <p className="mt-2"> Reclaimed take coffe table</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center mt-6 gap-6">
        <div className="flex flex-col items-center">
          <Image src="/chino.jpg" alt=" chino" width={200} height={200} />
          <p className="mt-2"> hino table</p>
          <p className="font-semibold">Rs. 12,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/side.jpg" alt=" reclaied" width={200} height={200} />
          <p className="mt-2">bella soft </p>
          <p className="font-semibold">Rs. 10,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/maya.jpg" alt="maya sofa" width={200} height={200} />
          <p className="mt-2">jsn-0</p>
          <p className="font-semibold">Rs. 23,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/bella.jpg" alt=" bella table" width={200} height={200} />
          <p className="mt-2"> Redclimed table </p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
      </div>


    </div>
  )
}

export default Shop
