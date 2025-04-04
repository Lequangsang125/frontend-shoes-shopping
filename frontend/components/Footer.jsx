import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* BÊN TRÁI BẮT ĐẦU */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU BẮT ĐẦU */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Tìm cửa hàng
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Trở thành đối tác
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Đăng ký nhận email
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Gửi phản hồi cho chúng tôi
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Giảm giá cho sinh viên
                        </div>
                    </div>
                    {/* MENU KẾT THÚC */}

                    {/* MENU THÔNG THƯỜNG BẮT ĐẦU */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU BẮT ĐẦU */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                Hỗ trợ khách hàng
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Trạng thái đơn hàng
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Giao hàng
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Trả hàng
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Phương thức thanh toán
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Liên hệ với chúng tôi
                            </div>
                        </div>
                        {/* MENU KẾT THÚC */}

                        {/* MENU BẮT ĐẦU */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                Về chúng tôi
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Tin tức
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Cơ hội nghề nghiệp
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Nhà đầu tư
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Bền vững
                            </div>
                        </div>
                        {/* MENU KẾT THÚC */}
                    </div>
                    {/* MENU THÔNG THƯỜNG KẾT THÚC */}
                </div>
                {/* BÊN TRÁI KẾT THÚC */}

                {/* BÊN PHẢI BẮT ĐẦU */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div onClick={() => window.open('https://facebook.com')} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaFacebookF size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaTwitter size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                </div>
                {/* BÊN PHẢI KẾT THÚC */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* BÊN TRÁI BẮT ĐẦU */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2025 le quang sang
                </div>
                {/* BÊN TRÁI KẾT THÚC */}

                {/* BÊN PHẢI BẮT ĐẦU */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Hướng dẫn
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Điều khoản bán hàng
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Điều khoản sử dụng
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Chính sách bảo mật
                    </div>
                </div>
                {/* BÊN PHẢI KẾT THÚC */}
            </Wrapper>
        </footer>
    );
};

export default Footer;