import Link from 'next/link'
import React from 'react'

const ProductCart = () => {
  return (
    <Link
    className='bg-white transform overflow-hidden duration-200 hover:scale-105
    cursor-pointer
    '
    href='/product/1'>
        <img  className='w-full'  src="/assets/p1.png" alt="ProductImage" />
        <div className='p-4 text-black/[0.9]'>
            <h2 className='text-lg font-medium'>Tên sản phẩm</h2>
            <div className='flex items-center text-black/[0.5]'>
                <p className='mr-2 text-lg font-semibold'>250.000đ</p>
                <p className='text-base font-medium line-through'>300.000đ</p>
                <p className='ml-auto text-base text-green-500'> giảm 20%</p>
            </div>
        </div>
    </Link>
  )
}

export default ProductCart