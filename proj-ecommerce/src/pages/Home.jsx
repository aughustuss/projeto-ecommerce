import React, { useContext } from 'react'
import { ProductContext } from '../contexts/Product';
import Product from '../components/Product'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Promotion from '../components/Promotion';
const Home = () => {

  const { product } = useContext(ProductContext);
  
  return (
    <>
      <Hero />
      <Categories/>
      <Promotion/>
      <section className='pt-20 pb-16'>
        <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {product.map((product) => {
            return (
              <Product product={product} key={product.id} />
            )
          })}
        </div>
      </section>
      <Banner/>
    </>
  )
}

export default Home;