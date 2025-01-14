import Image from 'next/image';

export default function Related() {
  return (
    <div className="flex flex-col items-center my-8 py-24 bg-slate-50">
      <div className="flex flex-wrap justify-center mt-6 gap-6">
        <div className="flex flex-col items-center">
          <Image src="/table.png" alt="Table" width={400} height={400} />
          <p className="mt-2 text-4xl"> Side table</p>
          <a
            href="#shop"
            className="inline-block text-black font-medium underline hover:no-underline hover:text-gray-800 transition p-6"
          >
            View More
          </a>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/sofa.png" alt=" sofa" width={500} height={500} />
          <p className=" text-4xl"> Side table </p>
          <a
            href="#shop"
            className="inline-block text-black font-medium underline hover:no-underline hover:text-gray-800 transition p-4"
          >
            View More
          </a>
        </div>
     </div>
    </div>
  );
}