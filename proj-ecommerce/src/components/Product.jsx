import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import { Button, Rating, styled } from '@mui/material'
import { CartContext } from '../contexts/Cart';

const ColorButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: '#19456B',
  padding: '0',
  margin: '0',
  minWidth: '0',
  '&:hover': {
    backgroundColor: '#0f3f69'
  }
}));

const Product = ({ product }) => {

  const { image, title, price, id, category, rate, count } = product;
  const { addToCart } = useContext(CartContext);
  console.log(product);
  return (
    <>
      <div className='w-full sm:w-full bg-white flex flex-col justify-between shadow-md p-2 rounded-md border-slate-200 '>
        <div className='min-h-64 h-auto mb-4 relative overflow-hidden group flex flex-col transition'>
          <div className='border-b pb-4 w-full h-full flex justify-center items-center'>
            <div className='w-48 mx-auto flex justify-center items-center p-4 h-44'>
              <img
                className=' max-h-44 group-hover:scale-105 transition duration-300'
                src={image}
                alt={title} />
            </div>
          </div>
          <div className=' absolute top-6 -right-16 group-hover:right-3 p-2 flex flex-col justify-center items-center gap-y-1 group transition-all duration-500 rounded-md'>
            <ColorButton variant='contained' onClick={() => addToCart(product, id)}>
              <div title='Adicionar ao carrinho' className='bg-primary rounded-md flex justify-center items-center text-white w-12 h-8 hover:scale-110 transition duration-300' >
                <BsPlus className='text-2xl' />
              </div>
            </ColorButton>

            <Link to={`/product/${id}`} title='Ver item' className='bg-white w-12 h-8 rounded-md hover:scale-110 transition duration-300 flex justify-center items-center text-black shadow-neutral-300 shadow-sm ' >
              <BsEyeFill />
            </Link>
          </div>

        </div>
        <div className='flex flex-col justify-between'>
          <div>
            <Link to={`/product/${id}`} className='font-bold w-full h-full text-sm' >
              {title}
            </Link>
            <div className='font-semibold' > <span className='text-secondary'>R$ </span> {price}</div>
            <div className='capitalize text-xs text-gray'>{category}</div>
          </div>
          <Rating readOnly value={2} />
        </div>
      </div>
    </>
  )
}

export default Product