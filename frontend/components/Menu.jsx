import Link from 'next/link';
import React from 'react'
import {BsChevronDown} from 'react-icons/bs'

const Menu = ({showCatMenu,setShowCatMenu}) => {
    const data = [
        { id: 1, name: "Trang chủ", url: "/" },
        { id: 2, name: "Giới thiệu", url: "/about" },
        { id: 3, name: "Danh mục", subMenu: true },
        { id: 4, name: "Liên hệ", url: "/contact" },
    ];
    
    const subMenuData = [
        { id: 1, name: "Jordan", doc_count: 11 },
        { id: 2, name: "Giày thể thao", doc_count: 8 },
        { id: 3, name: "Giày chạy bộ", doc_count: 64 },
        { id: 4, name: "Giày đá bóng", doc_count: 107 },
    ];
  return (
    <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
        {data.map((item) =>{
            return(
                <React.Fragment key={item.id}>
                    {!!item.subMenu ? 
                     <li className='cursor-pointer flex items-center gap-2 relative'
                     onMouseEnter={()=> setShowCatMenu(true)}
                     onMouseLeave={()=> setShowCatMenu(false)}
                     >
                        {item.name}
                        <BsChevronDown size={14} />
                        {showCatMenu && (
                            <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text black shadow-lg'>
                                   {subMenuData.map((submenu) =>{
                            return(
                                <Link key={submenu.id} href="/" onClick={()=> setShowCatMenu(true)}>
                                    <li className='h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md'>
                                        {submenu.name}
                                        <span className='opacity-50 text-sm'>78</span>
                                    </li>
                                </Link>
                            )
                        })}
                            </ul>
                        )}
                     </li>
                      : (
                        <li className='cursor-pointer'>
                            <Link href={item?.url}>{item.name}</Link>
                        </li>
                    )}
                </React.Fragment>
            )
        })}
    </ul>
  )
}

export default Menu