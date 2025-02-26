import React from 'react';
import PriceCard from '../PriceCard';

const Pricing = () => {
  return (
    <div className='flex flex-col md:flex-row w-full bg-white max-w-7xl px-5 md:px-10 py-20'>
      <PriceCard />
    </div>
  );
}

export default Pricing;
