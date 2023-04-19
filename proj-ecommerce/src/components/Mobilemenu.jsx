import React, { useContext, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { MenuBarContext } from '../contexts/Menubar'
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { ProductContext } from '../contexts/Product';

const MobileMenu = () => {

    const { product } = useContext(ProductContext);
    const { isMenuOpen, handleMenuClose } = useContext(MenuBarContext);
    const [listOpen, setListOpen] = useState(false);
    const filterCategories = (products) => {
        const filteredCategories = products.map((item) => {
            return item.category;
        });
        const uniqueCategory = [...new Set(filteredCategories)];
        return uniqueCategory;
    }

    const uniqueCategories = filterCategories(product);
    return (
        <>
            <div>
                <div className={`${isMenuOpen ? 'left-0' : '-left-full'} w-1/2 shadow-current shadow-2xl bg-white fixed top-0 h-full md:w-1/3 xl:max-w-1/3 transition-all duration-300 z-50 px-4 lg:px-8 flex flex-col pb-2`}>
                    <div className='flex  flex-row-reverse items-center py-4 border-b justify-between border-b-neutral-200 w-full'>
                        <div className='font-semibold uppercase ' >
                            Menu
                        </div>
                        <div
                            className='cursor-pointer w-8 h-8 flex justify-center items-center text-2xl'
                            onClick={handleMenuClose}>
                            <IoMdArrowBack />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2 w-full'>
                        <div onClick={() => setListOpen(!listOpen)} className='transition duration-300 py-2 px-4 cursor-pointer w-full relative group flex flex-col items-center md:justify-center justify-start'>
                            <div className='w-full flex flex-row items-center' >
                                <div className='flex-grow'>Categorias</div>
                                <div className='flex-shrink-0 opacity-0 group-hover:opacity-100 transition duration-300 text-2xl self-end'>{!listOpen ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}</div>
                            </div>
                            {listOpen ? (
                                <ul className={`${!listOpen ? ' -translate-y-8' : 'translate-y-0'} text-black  capitalize w-full p-2 rounded-b-md flex flex-col transition-all duration-300`}>
                                    {uniqueCategories.map((item) => {
                                        return (
                                            <li key={item} className='hover:text-white hover:bg-purple-600 text-sm md:text-md flex transition duration-500 w-full'>
                                                <Link className='w-full h-full p-2' to={`/category/${item}`} key={item}>{item}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            ) : null}
                        </div>
                        <Link to='/contact' className='cursor-pointer w-full flex py-2 hover:bg-purple-700 px-4 hover:text-white transition duration-300' >Contato</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu