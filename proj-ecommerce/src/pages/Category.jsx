import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { ProductContext } from '../contexts/Product';
import Product from '../components/Product'

const Category = () => {

  const {cat} = useParams();
  const {product} = useContext(ProductContext);

  const filteredProduct = product.filter((item) => {
    return item.category.toLowerCase() === cat.toLowerCase();
  });

  return (
    <>
      <section className='pb-4 md:pt-32 pt-36 container mx-auto' >
        <div className='bg-quartiary flex p-6 w-full h-[900px] border-gray rounded-md shadow-md '>
          <div className='w-full flex flex-col gap-y-4 h-full px-4'>
            <div className='uppercase text-3xl font-semibold py-6 bg-primary w-full text-white text-center rounded-md' >{cat}</div>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full h-full overflow-y-auto py-2'>
              {filteredProduct.map((item) => {
                return(
                  <div key={item.id}>
                    <Product product={item} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Category