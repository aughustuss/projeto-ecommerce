import React, { useContext } from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import CartItem from './Cartitem'
import { SideBarContext } from '../contexts/Sidebar'
import { CartContext } from '../contexts/Cart'
import { ThemeProvider} from '@mui/material'
import { Link } from 'react-router-dom'
import ReusableButton from './reusables/Button'
import { HiShoppingCart } from 'react-icons/hi'
import { theme } from '../utils/theme'

const Sidebar = () => {

  const { isOpen, handleSideBarClose } = useContext(SideBarContext)
  const { cart, totalPrice, itemAmount } = useContext(CartContext);
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={`${isOpen ? 'right-0 shadow-2xl' : '-right-full'} text-gray w-full shadow-current bg-white fixed top-0 h-full md:w-1/3 xl:max-w-1/3 transition-all duration-300 z-50 px-4 lg:px-8 flex flex-col justify-between pb-2`}>
          <div className='flex items-center py-4 justify-between border-b border-b-neutral-200 w-full'>
            <div className='font-semibold text-sm ' >
              Carrinho de Compras ({itemAmount})
            </div>
            <div
              className='cursor-pointer w-8 h-8 flex justify-center items-center text-2xl'
              onClick={handleSideBarClose}>
              <IoMdArrowForward />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 h-[400px] sm:h-[520px] overflow-x-hidden overflow-auto '>
            {cart.map((item) => {
              return (
                <CartItem item={item} key={item.id} />
              )
            })}
          </div>
          <div className='w-full'>
            <div>
              <span className='font-semibold text-sm'>Total: <span className='text-secondary'>R$</span> {parseFloat(totalPrice).toFixed(2)}</span>
            </div>
            <Link to='/cartpage' className='cursor-pointer py-4 flex flex-row w-full' >
              <ReusableButton variant='contained' classes=' w-full flex flex-row' >
                <p className='uppercase text-sm'>Visualizar carrinho</p> <HiShoppingCart className='text-xl absolute right-3 lg:right-5' />
              </ReusableButton>
            </Link>
            <div className='w-full'>
              <ReusableButton classes='w-full' variant='outlined'>
                Checkout
              </ReusableButton >
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Sidebar