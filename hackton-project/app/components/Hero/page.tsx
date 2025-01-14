'use client'
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-[#FBEBB5] min-h-screen flex items-center px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-800 leading-snug ml-72">
            Rocket single <br /> seater
          </h1>
          <a
            href="#shop"
            className="inline-block text-black font-medium underline hover:no-underline hover:text-gray-800 transition ml-72"
          >
            Shop now
          </a>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/single-seater.png"
            width={1200}
            height={1200}
            alt="Rocket single seater, a modern and elegant furniture piece"
            className="w-full max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

