// pages/index.js
import BieuNguBanner from '@/components/HeroBanner';
import GioHangSanPham from '@/components/ProductCart';
import BoBoc from '@/components/Wrapper';
import React from 'react';

const TrangChu = () => {
  return (
    <div>
     <BieuNguBanner/>
      <BoBoc>
        <div className='text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>Đệm Lót Cho Những Bước Chạy Của Bạn</div>
        <div className="text-md md:text-xl">
                        Đế giữa Nike ZoomX nhẹ được kết hợp với
                        chiều cao đệm tăng lên giúp mang lại sự êm ái
                        trong suốt quá trình chạy dài.
                    </div>
        </div>
        {/* tiêu đề và đoạn văn kết thúc */}

        {/* lưới sản phẩm bắt đầu */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-14 px-5 md:px-0'>
          <GioHangSanPham/>
          <GioHangSanPham/>
          <GioHangSanPham/>
          <GioHangSanPham/>
          <GioHangSanPham/>
          <GioHangSanPham/>
          <GioHangSanPham/>
          <GioHangSanPham/>
        </div>
        {/* lưới sản phẩm kết thúc */}
      </BoBoc>
    </div>
  );
};

export default TrangChu;
