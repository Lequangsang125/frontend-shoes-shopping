import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
const CartItem = () => {
    return (
        <div className='flex py-5 gap-3 md:gap-5 border-b'>
            {/* HÌNH ẢNH BẮT ĐẦU */}
            <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
                <img src="/assets/product-1.webp" alt="" />
            </div>
            {/* HÌNH ẢNH KẾT THÚC */}
            <div className='w-full flex flex-col'>
                <div className='flex flex-col md:flex-row justify-between'>
                    {/* TÊN SẢN PHẨM */}
                    <div className='text-lg md:text-2xl font-semibold text-black/[0.8] '>
                        Jordan Retro 6 G
                    </div>
                    {/* MÔ TẢ NHỎ */}
                    <div className='text-sm md:text-md font-semibold text-black/[0.5] block md:hidden '>
                        Jordan Retro 6 G
                    </div>
                    {/* GIÁ SẢN PHẨM */}
                    <div className='text-sm md:text-md font-semibold text-black/[0.5] mt-2 '>
                        2.200.000 VND
                    </div>
                </div>
                {/* MÔ TẢ NHỎ (HIỆN TRÊN MÀN HÌNH LỚN) */}
                <div className='text-sm md:text-md font-semibold text-black/[0.5] hidden md:block '>
                    Jordan Retro 6 G
                </div>

                <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>
                        <div className='flex items-center gap-1'>
                            <div className='font-semibold'>Kích thước:</div>
                            <select className='hover:text-black'>
                                <option value="1">UK 6</option>
                                <option value="2">UK 7</option>
                                <option value="3">UK 8</option>
                                <option value="4">UK 9</option>
                                <option value="5">UK 10</option>
                                <option value="6">UK 11</option>
                                <option value="7">UK 12</option>
                                <option value="8">UK 13</option>
                            </select>
                        </div>

                        <div className='flex items-center gap-1'>
                            <div className='font-semibold'>Số lượng:</div>
                            <select className='hover:text-black'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>                              
                            </select>
                        </div>
                    </div>
                    <RiDeleteBin6Line className='cursor-pointer text-black/[0.5] hover:text-black text-[16px] md-text-[20px]'/>
                </div>
            </div>
        </div>
    )
}

export default CartItem