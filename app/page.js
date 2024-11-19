import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center text-center'>
      <Image src="/logo.png" width={250} height={250} alt='codersorigin logo' />
      <h1 className='text-4xl font-bold mt-0 text-gray-800'>
        Where Coders Unite, Ideas Ignite!
      </h1>
      <p className='text-lg mt-4 text-gray-600 max-w-[600px]'>
        A community built to inspire, connect, and empower developers around the globe. CodersOrigin is coming soon
      </p>

      <p className='text-xl font-semibold mt-4 uppercase text-gray-800 tracking-wider'>
        stay tuned
      </p>
    </div>
  );
}

export default page;
