// pages/index.js
import HeroBanner from '@/components/HeroBanner';
import ProductCart from '@/components/ProductCart';
import Wrapper from '@/components/Wrapper';
import React from 'react';

const HomePage   = () => {
  return (
    <div >
     <HeroBanner/>
      <Wrapper>
        <div className='text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>Cushioning for Your Miles</div>
        <div className="text-md md:text-xl">
                        A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </div>
        </div>
        {/* heading and paragaph end  */}

        {/* product grid start */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-14 px-5 md:px-0'>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
        </div>
        {/* products grid end */}
      </Wrapper>
    </div>
  );
};

export default HomePage;
