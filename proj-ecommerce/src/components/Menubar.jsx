import React, { useContext } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { MenuBarContext } from '../contexts/Menubar'
const Menubar = () => {

    const { menuOpen, handleMenuBarClose } = useContext(MenuBarContext);
    return (
        <>
            <div>
                <div className={`${menuOpen ? 'left-0' : '-left-full'} w-full shadow-current shadow-2xl bg-white fixed top-0 h-full md:w-1/3 xl:max-w-1/3 transition-all duration-300 z-50 px-4 lg:px-8 flex flex-col justify-between pb-2`}>
                    <div className='flex  flex-row-reverse items-center py-4 justify-between border-b border-b-neutral-200 w-full'>
                        <div className='font-semibold uppercase ' >
                            Menu
                        </div>
                        <div
                            className='cursor-pointer w-8 h-8 flex justify-center items-center text-2xl'
                            onClick={handleMenuBarClose}>
                            <IoMdArrowBack />
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    )
}

export default Menubar