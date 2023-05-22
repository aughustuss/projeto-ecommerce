import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/Cart'
import { ProductContext } from '../contexts/Product'
import { Button, styled } from '@mui/material';
import { BsCart2 } from 'react-icons/bs';
import Product from '../components/Product';

const ColorButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: '#19456B',
  padding: '1rem',
  margin: '0',
  minWidth: '0',
  borderRadius: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  '&:hover': {
    backgroundColor: '#0f3f69'
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

  const productCategory = singleProduct.category;

  const filteredProducts = product.filter((item) => {
    return item.category.toLowerCase() === productCategory.toLowerCase() && item.id !== parseInt(id);
  });

  const { title, price, category, description, image } = singleProduct;

  return (

    <>
      <section className='w-full pb-6 md:pt-32 pt-36h-fit flex flex-col items-center gap-y-2' >
        <div className='bg-white border h-full' >
          <div className='flex flex-col lg:flex-row items-center flex-1 justify-center '>
            <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 '>
              <img className='max-w-[200px] max-h-[500px] lg:max-w-sm' src={image} alt={title} />
            </div>
            <div className='flex flex-col p-2 gap-y-4'>
              <div className='flex flex-1 text-center lg:text-left'>
                <h1 className='font-semibold mb-2 max-w-[450px] mx-auto'>{title}</h1>
              </div>
              <div className='text-xl text-secondary font-bold'>
                R${price}
              </div>
              <p className='capitalize text-xs' >{category}</p>

              <ColorButton className='flex flex-row items-center gap-x-1' onClick={() => addToCart(singleProduct, singleProduct.id)}>
                Adicionar ao carrinho <BsCart2 className='text-lg' />
              </ColorButton>


            </div>
          </div>
          <div className='mt-4 p-2 text-xs md:text-sm'>{description}</div>
        </div>
        <div className='flex flex-col gap-y-2 w-full '>
          <div className='text-xl md:text-4xl font-semibold'>Você também pode gostar</div>
          <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mx-auto max-w-sm md:max-w-none md:mx-0'>
            {filteredProducts.map((item) => {
              return (
                <Product key={item.id} product={item} />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetails