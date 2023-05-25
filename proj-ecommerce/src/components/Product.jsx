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

  const { image, title, price, id, category, rating } = product;
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <div className='w-full text-gray sm:w-full bg-white flex flex-col shadow-md p-2 rounded-md border-slate-200 group hover:scale-105 transition duration-200'>
        <div className='min-h-[180px] h-auto mb-4 relative overflow-hidden group flex flex-col transition'>
          <div className='border-b pb-4 w-full h-full flex justify-center items-center'>
            <div className='w-48 mx-auto flex justify-center items-center p-4 h-44'>
              <img
                className=' max-h-44 transition duration-300'
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
        <div className='flex flex-col justify-between min-h-[120px]'>
          <div>
            {product.category.toLowerCase() === 'electronics' && (
              <p className='text-xs bg-secondary text-white w-fit px-2 rounded-md'>Promoção</p>
            )}
            <Link to={`/product/${id}`} className='font-bold w-full h-full text-sm' >
              {title}
            </Link>
            <div className='font-semibold flex flex-row items-center' >
              <span className='text-secondary'>R$ </span> {price}
              <span className='ml-1 text-xs pb-2 line-through '> {product.category === 'electronics' ? (price * 1.4).toFixed(2) : ''}</span>
            </div>
            <div className='capitalize text-xs '>{category}</div>
          </div>
        </div>
        <div className='w-full flex flex-row items-center gap-x-2'>
          <Rating size='small' readOnly value={rating.rate} precision={0.1} />
          <p className=' text-[10px]'>{rating.count} Avaliações </p>
        </div>
      </div>
    </>
  )
}

export default Product