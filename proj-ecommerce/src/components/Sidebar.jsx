import React, { useContext } from 'react'
import { IoMdArrowForward} from 'react-icons/io'
import { BsCart2 } from 'react-icons/bs'
import CartItem from './Cartitem'
import { SideBarContext } from '../contexts/Sidebar'
import { CartContext } from '../contexts/Cart'
import { Button, styled } from '@mui/material'
import { Link } from 'react-router-dom'

const ColorButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: 'rgb(126, 34, 206)',
  border: '1px solid rgb(126, 34, 206)',
  padding: '1rem',
  margin: '0',
  minWidth: '0',
  borderRadius: '0',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  '&:hover': {
    backgroundColor: 'rgb(88, 28, 135)'
  }
}));

const CheckoutButton = styled(Button)(({ theme }) => ({
  color: 'rgb(126, 34, 206)',
  backgroundColor: 'transparent',
  border: '1px solid rgb(126, 34, 206)',
  padding: '1rem',
  margin: '0',
  minWidth: '0',
  borderRadius: '0',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  '&:hover': {
    border: '1px solid rgb(126, 34, 206)',
    backgroundColor: 'rgb(88, 28, 135)',
    color: 'white'
  }
}));

const Sidebar = () => {

  const { isOpen, handleClose } = useContext(SideBarContext)
  const { cart, totalPrice, itemAmount } = useContext(CartContext);
  return (
    <>
      <div className={`${isOpen ? 'right-0' : '-right-full'} w-full shadow-current shadow-2xl bg-white fixed top-0 h-full md:w-1/3 xl:max-w-1/3 transition-all duration-300 z-50 px-4 lg:px-8 flex flex-col justify-between pb-2`}>
        <div className='flex items-center py-4 justify-between border-b border-b-neutral-200 w-full'>
          <div className='font-semibold uppercase ' >
            Carrinho de Compras ({itemAmount})
          </div>
          <div
            className='cursor-pointer w-8 h-8 flex justify-center items-center text-2xl'
            onClick={handleClose}>
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
        <div>
          <div>
            <span className='font-semibold'>Total: R${parseFloat(totalPrice).toFixed(2)}</span>
          </div>
          <Link to='/cartpage' className='cursor-pointer py-4 flex flex-row' >
            <ColorButton >
              <p className='uppercase text-sm'>Visualizar carrinho</p> <BsCart2 className='text-xl absolute right-1 lg:right-5'/>
            </ColorButton>
          </Link>
          <div>
            <CheckoutButton fullWidth>
              Checkout
            </CheckoutButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar