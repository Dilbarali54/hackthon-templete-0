import React from 'react'
import Image from 'next/image'

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
   <h1 className="text-2xl font-semibold p-2 ml-80 mb-4">Description</h1>
  <p className='text-slate-500'> Our Premium 3-Seater Sofa is the perfect blend of comfort and style. Crafted with luxurious fabric and a solid wood frame, this sofa provides exceptional durability while ensuring a soft, cozy seating experience. 
    <br /> Its elegant design features clean lines and plush cushions, making it an ideal addition to any modern living room. Whether you're hosting guests or simply enjoying a quiet evening at home, this sofa offers unmatched comfort and support. Its timeless design ensures it complements any interior decor, from contemporary to classic. Our Modern Leather Sofa takes luxury and sophistication to the next level. Made with high-quality leather and a sturdy metal frame, this sofa exudes modern elegance while offering maximum comfort. The sleek, minimalist design pairs beautifully with any contemporary setting, and its deep cushions provide superior relaxation. Perfect for those who love both style and functionality, this sofa is easy to maintain and will stand the test of time. Ideal for family rooms, offices, or any space in need of a chic, comfortable seating solution, the Modern Leather Sofa is a true statement piece.
</p>

<div className="flex flex-col items-center my-8 py-24">
      <h4 className='text-4xl'> Related Products</h4>
 
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
      <h3 className="text-xl p-4 mt-4"> View More</h3>
          <div className="h-px w-24 bg-black mx-auto mb-6"></div>
     
    </div>
</div>
  )
}

export default Products
