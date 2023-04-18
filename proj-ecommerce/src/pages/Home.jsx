import React, { useContext } from 'react'
import { ProductContext } from '../contexts/Product';
import Product from '../components/Product'
import Hero from '../components/Hero';
const Home = () => {

  const { product } = useContext(ProductContext);

  return (
    <>
    <Hero/>
      <section className='pt-20 pb-16 font-montserrat'>
        <div className=' w-5/6 mx-auto' >
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