import React from 'react';
import Hero from './Hero';
import Image from 'next/image';
import Importance from './Importance';
import Features from './Features';
import Footer from './Footer';
import Pricing from './Pricing';

const Base = () => {
  return (
    <div className='flex flex-col items-center w-full justify-center'>     
      <Hero />
      <Importance />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Base;
