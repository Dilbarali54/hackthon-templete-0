"use client"
import React from 'react'
import Link from 'next/link'
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
    <div className=' w-screen fixed top-0 ml-96 z-10'>
      <div className='grid grid-cols-2 mx-auto justify-between sm:items-center py-4 sm:py-6'>
        <div className='flex justify-end mr-1.5 mt-1.5 gap-2 text-sm sm:text-lg sm:gap-10 sm:mr-24 font-serif font-bold'>
         <Link href="/components/Home" className='text-black hover:text-blue-300 duration-500'>Home</Link>
         <Link href="/components/Shop" className='text-black  hover:text-blue-300 duration-500 '>Shop</Link>
         <Link href="/components/About" className='text-black  hover:text-blue-300 duration-500 '>About</Link>
         <Link href="/components/ContactUs" className='text-black  hover:text-blue-300 duration-500 '>ContactUs</Link>
        </div>
        <div>
        <button className='p-4 w-8 text-black text-2xl'><CiUser /> </button>
        <button className='p-4 w-8 text-black text-2xl'><CiSearch /> </button>
        <button className='p-4 w-8 text-black text-2xl'><CiHeart />  </button>
        <button className='p-4 w-8 text-black text-2xl'> <AiOutlineShoppingCart />  </button>
      </div>

      </div>
   </div>
    </nav>
  )
}

export default Navbar

