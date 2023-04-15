import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {IoMdTrash} from 'react-icons/io'
import { Button, styled } from '@mui/material';
import { CartContext } from '../contexts/Cart';

const ColorButton = styled(Button)(({theme})=>({
  color: 'black',
  backgroundColor: 'transparent',
  padding: '0',
  margin: '0',
  minWidth: '0',
  borderRadius: '0',
  '&:hover': {
    backgroundColor: 'transparent'
  }
}));

const Cartitem = ({ item }) => {

  const { id, title, price, category, image, amount } = item;
  const {removeFromCart} = useContext(CartContext);

  return (
    <>
      <div className='flex border-b border-neutral-200'>
        <div className='w-full min-h-[150px] flex items-center gap-x-4'>        
            <Link to={`/product/${id}`}>
              <img className=' max-w-[80px]' src={image} alt={title} />
            </Link>
            <div className='w-full flex flex-col'>
              <div className='flex justify-between mb-2 items-center'>
                <Link className='uppercase text-sm max-w-[240px]' to={`/product/${id}`} >{title}</Link>
                <div onClick={() => removeFromCart(id)} title='Remover itens' className='text-xl cursor-pointer text-neutral-700 hover:text-neutral-900 transition duration-300'>
                  <IoMdTrash/>
                </div>
              </div>
              <div className='text-xs flex w-full justify-between items-center '>
                <div className='flex w-fit gap-x-3 items-center border border-neutral-200' >
                  <ColorButton className='w-6'>+</ColorButton>
                  {amount}
                  <ColorButton className='w-6'>-</ColorButton>
                </div>
                <div>{amount > 1 ? `R$${price*amount}` : `R$${price}` }</div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cartitem