import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward, IoMdTrash } from 'react-icons/io'
import CartItem from './Cartitem'
import { SideBarContext } from '../contexts/Sidebar'
import { CartContext } from '../contexts/Cart'
import { Button, styled } from '@mui/material'

const ColorButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: 'rgb(126, 34, 206)',
  padding: '1rem',
  margin: '0',
  minWidth: '0',
  borderRadius: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  '&:hover': {
    backgroundColor: 'rgb(126, 34, 206)',
    color: 'white'
  }
}));

const Sidebar = () => {

  const { isOpen, handleClose } = useContext(SideBarContext)
  const { cart, clearCart, totalPrice } = useContext(CartContext);
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
        <div className='flex flex-col gap-y-2 h-[600px] max-h-[600px] overflow-x-hidden overflow-auto '>
          {cart.map((item) => {
            return (
              <CartItem item={item} key={item.id} />
            )
          })}
        </div>
        <div>
          <div>
            <span>Total: R${parseFloat(totalPrice).toFixed(2)}</span>
          </div>
          <div className='cursor-pointer py-4 flex flex-row ' >
            <ColorButton fullWidth variant='contained' onClick={clearCart}>
              <p className='uppercase text-sm'>Limpar carrinho</p> <IoMdTrash className='text-xl'/>
            </ColorButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar