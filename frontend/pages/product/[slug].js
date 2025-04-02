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
                    {/* cột bên trái bắt đầu */}
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full
        mx-auto lg:mx-0
        '><ProductDetailsCarousel />
                    </div>
                    {/* cột bên trái kết thúc */}

                    {/* cột bên phải bắt đầu */}
                    <div className='flex-[1] py-3'>
                        {/* TIÊU ĐỀ SẢN PHẨM */}
                        <div className='text-[34px] font-semibold mb-2'>
                            Jordan Retro 6 G
                        </div>
                        {/* PHỤ ĐỀ SẢN PHẨM */}
                        <div className='text-lg font-semibold mb-5'>
                            Giày Golf Nam
                        </div>
                        {/* GIÁ SẢN PHẨM */}
                        <div className='text-lg font-semibold'>
                            90.00 USD
                        </div>
                        <div className='text-md font-medium text-black/[0.5]'>
                            đã bao gồm thuế
                        </div>
                        <div className='text-md font-medium text-black/[0.5] mb-20'>
                            {`( bao gồm tất cả các khoản thuế và phí áp dụng)`}
                        </div>

                        {/* CHỌN KÍCH CỠ SẢN PHẨM */}
                        <div className='mb-10'>
                            {/* TIÊU ĐỀ CHỌN KÍCH CỠ */}
                            <div className='flex justify-between mb-2'>
                                <div className='text-md font-semibold'>
                                    Chọn kích cỡ
                                </div>
                                <div className='text-md font-medium text-black/[0.5]'>
                                    Hướng dẫn chọn kích cỡ
                                </div>                       
                            </div>
                             {/* KẾT THÚC TIÊU ĐỀ CHỌN KÍCH CỠ */}
                             
                             {/* CÁC KÍCH CỠ */}
                             <div className='grid grid-cols-3 gap-2'>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 7
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 8
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 9
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 10
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 11
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 12
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-pointer'>
                                    UK 13
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 14
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                 cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 15
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                 cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 16
                                </div>

                             </div>
                             {/* KẾT THÚC KÍCH CỠ */}

                             {/* THÔNG BÁO LỖI CHỌN KÍCH CỠ */}
                             <div className='text-red-600 mt-1'>
                                Cần chọn kích cỡ
                             </div>
                             {/* KẾT THÚC THÔNG BÁO LỖI */}
                        </div>
                        {/* KẾT THÚC CHỌN KÍCH CỠ */}

                        {/* NÚT THÊM VÀO GIỎ HÀNG */}
                        <button className='w-full py-4 rounded-full bg-black
                        text-white text-lg font-medium transition-transform
                        active:scale-95 mb-3 hover:opacity-75'>
                            Thêm vào giỏ hàng
                        </button>
                        {/* KẾT THÚC NÚT THÊM VÀO GIỎ HÀNG */}

                        {/* NÚT YÊU THÍCH */}
                        <button className='w-full py-4 rounded-full border border-black
                         text-lg font-medium transition-transform
                        flex items-center justify-center gap-2 hover:opacity-75 mb-10'>YÊU THÍCH
                        <IoMdHeartEmpty size={20}/>
                        </button>
                        {/* KẾT THÚC NÚT YÊU THÍCH */}

                        <div>
                            <div className='text-lg font-bold mb-5'>Chi tiết sản phẩm</div>
                            <div className='text-md mb-5'>Mô tả</div>
                        </div>
                    </div>
                    {/* cột bên phải kết thúc */}
                </div>
                <RelatedProducts/>
            </Wrapper>
        </div>
    )
}

export default ProductDetails
