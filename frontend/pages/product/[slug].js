import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'

const ProductDetails = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    {/* left colums start */}
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full
        mx-auto lg:mx-0
        '><ProductDetailsCarousel />
                    </div>
                    {/* left colums end */}

                    {/* right colums start */}
                    <div className='flex-[1] py-3'>
                        {/* PRODUCT TITILE */}
                        <div className='text-[34px] font-semibold mb-2'>
                            Jordan Retro 6 G
                        </div>
                        {/* PRODUCT SUBTITLE */}
                        <div className='text-lg font-semibold mb-5'>
                            Men Goft Shoes
                        </div>
                        {/* PRODUCT PRICE */}
                        <div className='text-lg font-semibold'>
                            $90.00
                        </div>
                        <div className='text-md font-medium text-black/[0.5]'>
                            incl.of taxes
                        </div>
                        <div className='text-md font-medium text-black/[0.5] mb-20'>
                            {`( also includes all applicable duties)`}
                        </div>

                        {/* PRODUCT SIZE RANGEW START */}
                        <div className='mb-10'>
                            {/* HEADING START */}
                            <div className='flex justify-between mb-2'>
                                <div className='text-md font-semibold'>
                                    Select size
                                </div>
                                <div className='text-md font-medium text-black/[0.5]'>
                                    Select Guide
                                </div>                      
                            </div>
                             {/* HEADING END */}
                             
                             {/* SIZE START */}
                             <div className='grid grid-cols-3 gap-2'>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                 cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                 cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 6
                                </div>

                             </div>
                             {/* SIZE END */}

                             {/* SHOW ERROR START */}
                             <div className='text-red-600 mt-1'>
                                Size selection is required
                             </div>
                             {/* SHOW ERROR END */}
                        </div>
                        {/* PRODUCT SIZE RANGEW END */}

                        {/* ADD TO CARD BUTTON START */}
                        <button className='w-full py-4 rounded-full bg-black
                        text-white text-lg font-medium transition-transform
                        active:scale-95 mb-3 hover:opacity-75'>
                            Add to cart
                        </button>
                        {/* ADD TO CARD BUTTON END */}

                        {/* WHISLIST BUTTON START */}
                        <button className='w-full py-4 rounded-full border border-black
                         text-lg font-medium transition-transform
                        flex items-center justify-center gap-2 hover:opacity-75 mb-10'>WHISLIST
                        <IoMdHeartEmpty size={20}/>
                        </button>
                        {/* WHISLIST BUTTON END */}

                        <div>
                            <div className='text-lg font-bold mb-5'>Product Details</div>
                            <div className='text-md mb-5'>Description</div>
                        </div>
                    </div>
                    {/* right colums end */}
                </div>
                <RelatedProducts/>
            </Wrapper>
        </div>
    )
}

export default ProductDetails
