import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { ProductContext } from '../contexts/Product';
import Product from '../components/Product'

const Category = () => {

  const {cat} = useParams();
  const {product} = useContext(ProductContext);

  const filteredProduct = product.filter((item) => {
    return item.category.toLowerCase() === cat.toLowerCase();
  })

  return (
    <>
      <section className='pt-48 pb-16 container mx-auto font-montserrat' >
        <div className='bg-white flex p-4 w-full h-[800px] border'>
          <div className='w-full flex flex-col h-full'>
            <div className='uppercase text-3xl font-semibold py-10 bg-purple-700 w-full text-white text-center' >{cat}</div>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 max-h-full overflow-x-hidden overflow-y-auto py-2'>
              {filteredProduct.map((item) => {
                return(
                  <div>
                    <Product key={item.id} product={item} />
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