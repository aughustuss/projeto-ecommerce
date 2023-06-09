import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/Cart'
import { ProductContext } from '../contexts/Product'
import { Rating, ThemeProvider } from '@mui/material';
import Product from '../components/Product';
import ReusableButton from '../components/reusables/Button';
import { theme } from '../utils/theme';
import { HiShoppingCart } from 'react-icons/hi';
import Slides from '../components/reusables/Slides';
import { SwiperSlide } from 'swiper/react';

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

  const { title, price, category, description, image, rating } = singleProduct;

  return (

    <>
      <ThemeProvider theme={theme}>
        <section className='container mx-auto pb-6 md:pt-32 pt-32 h-fit flex flex-col items-center gap-y-2 text-gray font-body' >
          <div className='rounded-md bg-white p-2 shadow-md min-h-[600px] max-h-fit w-full flex flex-col justify-between ' >
            <div className='flex flex-col lg:flex-row md:px-10 gap-4 items-center justify-center '>
              <div className='flex flex-1 max-w-sm justify-center items-center mb-8 lg:mb-0 '>
                <img className='h-full w-full' src={image} alt={title} />
              </div>
              <div className='flex flex-col p-2 gap-y-4 w-full flex-1 items-start h-full justify-center bg-quartiary rounded-md shadow-md md:min-h-[500px]'>
                <div className='flex flex-col items-start text-left'>
                  <h1 className='font-semibold mb-2 max-w-[450px] mx-auto self-start'>{title}</h1>
                </div>
                <div className='text-xl text-secondary font-bold'>
                  R${price}
                </div>
                <p className='capitalize text-xs' >{category}</p>
                <div className='flex flex-row items-center gap-x-2'>
                  <Rating value={rating.rate} precision={0.1} readOnly />
                  <p className='text-xs'> <span className='text-sm'>{rating.rate}</span>  ({rating.count} Avaliações)</p>
                </div>
                <div className='mt-4 text-xs md:text-sm'>{description}</div>
                <ReusableButton variant='contained' className='flex flex-row items-center gap-x-1 w-full' onClick={() => addToCart(singleProduct, singleProduct.id)}>
                  Adicionar ao carrinho <HiShoppingCart className='text-lg' />
                </ReusableButton>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-4 w-full '>
            <div className='w-full flex flex-col'>
              <p className='text-lg text-secondary font-semibold'>Aproveite também</p>
              <p className='text-5xl text-primary font-semibold font-title'>Você pode gostar</p>
            </div>
            <Slides classes={'w-full py-4'}>
              {filteredProducts.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Product product={item} />
                  </SwiperSlide>
                )
              })}
            </Slides>

          </div>
        </section>
      </ThemeProvider>
    </>
  )
}

export default ProductDetails