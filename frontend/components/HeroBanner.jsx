import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack, BiArrowFromRight } from 'react-icons/bi';


const HeroBanner = () => {
  return (
    <div className='relative text-[20px] w-full max-w-[1360px] mx-auto text-white'>
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler,hasPrev) =>
        (<div 
          onClick={clickHandler}
          className='bg-black absolute bottom-0 right-[31px] md:right-[51px]
        w-[30px] md:w-[50px] h-[30px] md:h-[50px] z-10 flex items-center justify-center cursor-pointer
        hover:opacity-90
        '>
          <BiArrowBack className='text-sm md:text-lg'></BiArrowBack>
        </div>)
        }
        renderArrowNext={(clickHandler,hasNext) =>
          (<div 
            onClick={clickHandler}
            className='bg-black absolute bottom-0 right-0
          w-[30px] md:w-[50px] h-[30px] md:h-[50px] z-10 flex items-center justify-center cursor-pointer
          hover:opacity-90
          '>
            <BiArrowBack className='rotate-180 text-sm md:text-lg'></BiArrowBack>
          </div>)
          }

        >
                <div>
                    <img src="assets/slide-1.png" 
                    className='asprct-[16/10] md:aspect-auto' />
                    <div className=' text-black/[0.9] px-[15px]  py-[10px] md:px-[40px] md:py-[25px]
                    font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-[15px] md:text-[30px]
                    uppercase font-medium cursor-pointer hover:opacity-90
                    '>
                      Shop now
                    </div>
                </div>

                <div>
                    <img src="assets/slide-2.png" 
                    className='asprct-[16/10] md:aspect-auto' />
                    <div className=' text-black/[0.9] px-[15px]  py-[10px] md:px-[40px] md:py-[25px]
                    font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-[15px] md:text-[30px]
                    uppercase font-medium cursor-pointer hover:opacity-90
                    '>
                      Shop now
                    </div>
                </div>

                <div>
                    <img src="assets/slide-3.png" 
                    className='asprct-[16/10] md:aspect-auto' />
                    <div className=' text-black/[0.9] px-[15px]  py-[10px] md:px-[40px] md:py-[25px]
                    font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-[15px] md:text-[30px]
                    uppercase font-medium cursor-pointer hover:opacity-90
                    '>
                      Shop now
                    </div>
                </div>
               
            </Carousel>
    </div>
  )
}

export default HeroBanner
