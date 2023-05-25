import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/Cart'
import { ProductContext } from '../contexts/Product'
import {ThemeProvider } from '@mui/material';
import Product from '../components/Product';
import ReusableButton from '../components/reusables/Button';
import { theme } from '../utils/theme';
import { HiShoppingCart } from 'react-icons/hi';

const ProductDetails = () => {

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { product } = useContext(ProductContext);

  const singleProduct = product.find((item) => {
    return item.id === parseInt(id);
  });

  if (!singleProduct) {
    return <section className='h-screen w-screen flex justify-center items-center' >Carregando...</section>
  }

  const productCategory = singleProduct.category;

  const filteredProducts = product.filter((item) => {
    return item.category.toLowerCase() === productCategory.toLowerCase() && item.id !== parseInt(id);
  });

  const { title, price, category, description, image } = singleProduct;

  return (

    <>
      <ThemeProvider theme={theme}>
        <section className='container mx-auto pb-6 md:pt-32 pt-32 h-fit flex flex-col items-center gap-y-2 text-gray font-body' >
          <div className='bg-white border-gray rounded-md min-h-[600px] max-h-fit w-full flex flex-col justify-between p-4' >
            <div className='flex flex-col lg:flex-row items-center flex-1 justify-center '>
              <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 '>
                <img className='max-w-[200px] max-h-[500px] lg:max-w-sm burn' src={image} alt={title} />
              </div>
              <div className='flex flex-col p-2 gap-y-4 w-full md:flex-[0.3] items-start h-full justify-center bg-quartiary rounded-md shadow-md min-h-[500px]'>
                <div className='flex flex-col items-start text-left'>
                  <h1 className='font-semibold mb-2 max-w-[450px] mx-auto self-start'>{title}</h1>
                </div>
                <div className='text-xl text-secondary font-bold'>
                  R${price}
                </div>
                <p className='capitalize text-xs' >{category}</p>
                <ReusableButton variant='contained' className='flex flex-row items-center gap-x-1 w-full' onClick={() => addToCart(singleProduct, singleProduct.id)}>
                  Adicionar ao carrinho <HiShoppingCart className='text-lg' />
                </ReusableButton>
              </div>
            </div>
            <div className='mt-4 p-2 text-xs md:text-sm'>{description}</div>
          </div>
          <div className='flex flex-col gap-y-4 w-full '>
            <div className='w-full flex flex-col'>
              <p className='text-lg text-secondary font-semibold'>Aproveite também</p>
              <p className='text-5xl text-primary font-semibold font-title'>Você pode gostar</p>
            </div>
            <div className='gap-2 sm:gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mx-auto max-w-sm md:max-w-none md:mx-0'>
              {filteredProducts.map((item) => {
                return (
                  <Product key={item.id} product={item} />
                )
              })}
            </div>
          </div>
        </section>
      </ThemeProvider>
    </>
  )
}

export default ProductDetails