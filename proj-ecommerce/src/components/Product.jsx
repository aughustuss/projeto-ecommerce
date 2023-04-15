import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import {Button, styled} from '@mui/material'
import { CartContext } from '../contexts/Cart';

const ColorButton = styled(Button)(({theme})=>({
  color: 'white',
  backgroundColor: 'rgb(126, 34, 206)',
  padding: '0',
  margin: '0',
  minWidth: '0',
  '&:hover': {
    backgroundColor: 'rgb(126, 34, 206)'
  }
}));

const Product = ({ product }) => {

  const { image, title, price, id, category } = product;
  const {addToCart} = useContext(CartContext);
  return (
    <>
      <div>
        <div className='h-80 mb-4 relative overflow-hidden group flex flex-col transition bg-white shadow-md shadow-neutral-200'>
          <div className='border border-neutral-100 w-full h-full flex justify-center items-center'>
            <div className='w-48 mx-auto flex justify-center items-center'>
              <img
                className=' max-h-44 group-hover:scale-105 transition duration-300'
                src={image}
                alt={title} />
            </div>
          </div>
          <div className='absolute top-6 -right-12 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 group transition-all duration-500 rounded-sm'>
            <ColorButton variant='contained' onClick={() => addToCart(product, id)}>
              <div title='Adicionar ao carrinho' className='bg-purple-700 rounded-sm flex justify-center items-center text-white w-8 h-8 hover:scale-110 transition duration-300' >
                <BsPlus className='text-2xl' />
              </div>
            </ColorButton>
            
            <Link to={`/product/${id}`} title='Ver item' className='bg-white w-8 h-8 hover:scale-110 transition duration-300 flex justify-center items-center text-black shadow-neutral-300 shadow-md' >
              <BsEyeFill />
            </Link>
          </div>

        </div>
        <div>
          <Link to={`/product/${id}`} className='font-bold w-full h-full' >
            {title}
          </Link>
          <div className='font-semibold' >R$ {price}</div>
          <div className='capitalize text-sm text-neutral-600'>{category}</div>
        </div>
      </div>
    </>
  )
}

export default Product