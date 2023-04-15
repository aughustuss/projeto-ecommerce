import React, { useContext } from 'react'
import { ProductContext } from '../contexts/Product';
import Product from '../components/Product'
const Home = () => {

  const { product } = useContext(ProductContext);

  return (
    <>
      <section className='pt-20 pb-16 font-poppins'>
        <div className=' container mx-auto' >
          <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mx-auto max-w-sm md:max-w-none md:mx-0'>
            {product.map((product) => {
              return(
                <Product product={product} key={product.id} />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;