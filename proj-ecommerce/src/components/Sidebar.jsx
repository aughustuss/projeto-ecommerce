import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import CartItem from './Cartitem'
import { SideBarContext } from '../contexts/Sidebar'
import { CartContext } from '../contexts/Cart'

const Sidebar = () => {

  const { isOpen, handleClose } = useContext(SideBarContext)
  const { cart } = useContext(CartContext);
  return (
    <>
      <div className={`${isOpen ? 'right-0' : '-right-full'} w-full shadow-current shadow-2xl bg-white fixed top-0 h-full md:w-1/3 xl:max-w-1/3 transition-all duration-300 z-50 px-4 lg:px-8`}>
        <div className='flex items-center py-4 justify-between border-b border-b-neutral-200 w-full'>
          <div className='font-semibold uppercase ' >
            Carrinho de Compras ({cart.length})
          </div>
          <div
            className='cursor-pointer w-8 h-8 flex justify-center items-center text-2xl'
            onClick={handleClose}>
            <IoMdArrowForward />
          </div>
        </div>
        <div>
          {cart.map((item) => {
            return (
              <CartItem item={item} key={item.id} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Sidebar