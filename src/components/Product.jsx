import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import { Rating, ThemeProvider} from '@mui/material'
import { CartContext } from '../contexts/Cart';
import ReusableButton from './reusables/Button';
import { theme } from '../utils/theme';

const Product = ({ product }) => {

  const { image, title, price, id, category, rating } = product;
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className='w-full text-gray sm:w-full border border-slate-300 bg-white min-h-[280px] flex flex-col shadow-md p-2 rounded-md group hover:scale-105 transition duration-200'>
          <div className='sm:min-h-[180px] h-auto mb-2 relative overflow-hidden group flex flex-col transition'>
            <div className='border-b border-slate-200 pb-2 w-full h-full flex justify-center items-center'>
              <div className='w-48 mx-auto flex justify-center items-center px-4 h-32 sm:h-44'>
                <img
                  className='max-h-32 sm:max-h-44 transition duration-300'
                  src={image}
                  alt={title} />
              </div>
            </div>
            <div className=' absolute top-6 -right-16 group-hover:right-3 p-2 flex flex-col justify-center items-center gap-y-1 group transition-all duration-500 rounded-md'>
              <ReusableButton variant='contained' classes='w-12 h-8 text-white ' onClick={() => addToCart(product, id)}>
                <BsPlus className='text-2xl font-semibold' />
              </ReusableButton>
              <Link to={`/product/${id}`} title='Ver item' className='bg-white w-12 h-8 rounded-md hover:scale-110 transition duration-300 flex justify-center items-center text-black shadow-neutral-300 shadow-sm ' >
                <BsEyeFill />
              </Link>
            </div>

          </div>
          <Link className='pt-0 mt-0' to={`/product/${id}`}>
            <div className='flex flex-col justify-between min-h-[60px] md:min-h-[100px]'>
              <div>
                {product.category.toLowerCase() === 'electronics' && (
                  <p className='text-xs bg-secondary text-white w-fit px-2 rounded-md'>Promoção</p>
                )}
                <p className='font-bold w-full h-full text-sm line-clamp-1 lg:line-clamp-2' >
                  {title}
                </p>
                <div className='font-semibold flex flex-row items-center' >
                  <span className='text-secondary'>R$ </span> {price}
                  <span className='ml-1 text-xs pb-2 line-through '> {product.category === 'electronics' ? (price * 1.4).toFixed(2) : ''}</span>
                </div>
                <div className='capitalize text-xs '>{category}</div>
              </div>
            </div>
            <div className='w-full flex flex-col sm:flex-row items-start sm:items-center gap-x-2'>
              <Rating size='small' readOnly value={rating.rate} precision={0.1} />
              <p className=' text-[10px]'>{rating.count} Avaliações </p>
            </div>
          </Link>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Product