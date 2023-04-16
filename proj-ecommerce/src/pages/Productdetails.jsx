import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/Cart'
import { ProductContext } from '../contexts/Product'
import { Button, styled } from '@mui/material';
import { BsCart2 } from 'react-icons/bs';

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
  const { title, price, category, description, image } = singleProduct;

  return (

    <>
      <section className='py-20 font-montserrat h-screen flex items-center' >
        <div className='container mx-auto' >
          <div className='flex flex-col lg:flex-row items-center flex-1 justify-center'>
            <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 '>
              <img className='max-w-[200px] lg:max-w-sm' src={image} alt={title} />
            </div>
            <div className='flex flex-col p-2 gap-y-4'>
              <div className='flex flex-1 text-center lg:text-left'>
                <h1 className='font-semibold mb-2 max-w-[450px] mx-auto'>{title}</h1>
              </div>
              <div className='text-xl text-green-600 font-bold'>
                R${price}
              </div>
              <p className='capitalize text-xs' >{category}</p>
              <ColorButton onClick={() => addToCart(singleProduct, id)}>
                  Adicionar ao carrinho <BsCart2 className='text-2xl' />
              </ColorButton>
            </div>  
          </div>
          <div className='mt-4'>{description}</div>
        </div>
      </section>
    </>
  )
}

export default ProductDetails