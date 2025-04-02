import CartItem from '@/components/CartItem'
import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                {/* TIÊU ĐỀ VÀ ĐOẠN VĂN BẮT ĐẦU */}
                <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
                    <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
                        Giỏ hàng
                    </div>
                </div>
                {/* TIÊU ĐỀ VÀ ĐOẠN VĂN KẾT THÚC */}
                {/* NỘI DUNG GIỎ HÀNG BẮT ĐẦU */}
                <div className='flex flex-col lg:flex-row gap-12 py-10'>
                    {/* SẢN PHẨM TRONG GIỎ HÀNG BẮT ĐẦU */}
                    <div className='flex-[2]'>
                        <div className='text-lg font-bold'>Sản phẩm</div>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>

                    {/* SẢN PHẨM TRONG GIỎ HÀNG KẾT THÚC */}

                    {/* TÓM TẮT ĐƠN HÀNG BẮT ĐẦU */}
                    <div className='flex-[1]'>
                        <div className='text-lg font-bold'>Tóm tắt</div>
                        <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
                            <div className='flex justify-between'>
                                <div className='uppercase text-md md:text-lg font-medium text-black'>Tổng cộng</div>
                                <div className='text-md md:text-lg font-medium text-black'>$90.00</div>
                            </div>
                            <div className="text-sm md:text-md py-5 border-t mt-5">
                                Tổng cộng phản ánh giá trị đơn hàng của bạn, bao gồm các khoản thuế và phí,
                                trước khi áp dụng bất kỳ khoản giảm giá nào. Không bao gồm phí vận chuyển và
                                phí giao dịch quốc tế.
                            </div>
                        </div>
                            {/* NÚT BẮT ĐẦU */}
                            <button
                                    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"                                  
                                >
                                    Thanh toán                                   
                                </button>
                                {/* NÚT KẾT THÚC */}
                    </div>

                    {/* TÓM TẮT ĐƠN HÀNG KẾT THÚC */}
                </div>
                {/* NỘI DUNG GIỎ HÀNG KẾT THÚC */}
                <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <Image
                            src="/assets/empty-cart.jpg"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        />
                        <span className="text-xl font-bold">
                            Giỏ hàng của bạn trống
                        </span>
                        <span className="text-center mt-4">
                            Có vẻ như bạn chưa thêm gì vào giỏ hàng.
                            <br />
                            Hãy tiếp tục khám phá các danh mục hàng đầu.
                        </span>
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            Tiếp tục mua sắm
                        </Link>
                    </div>
                {/* GIỎ HÀNG TRỐNG KẾT THÚC */}
            </Wrapper>
        </div>
    )
}

export default Card
