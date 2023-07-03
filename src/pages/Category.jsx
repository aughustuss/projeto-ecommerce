import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../contexts/Product';
import Product from '../components/Product'

const Category = () => {

  const { cat } = useParams();
  const { product } = useContext(ProductContext);

  const filteredProduct = product.filter((item) => {
    return item.category.toLowerCase() === cat.toLowerCase();
  });

  return (
    <>
      <section className='pb-4 md:pt-24 pt-20 w-full container mx-auto px-2 md:px-0' >
        <div className='flex p-1 w-full h-[900px] border-gray rounded-md '>
          <div className='w-full flex flex-col gap-y-4 h-full '>
            <div className=' text-2xl lg:text-3xl font-semibold p-2 w-full text-primary font-title rounded-md flex flex-row gap-x-2 justify-center' >
              <p>{cat}</p>
              <p className='text-xs self-end pb-1 text-primary normal-case'>{filteredProduct.length} produtos encontrados </p>
            </div>
            <div className='grid grid-cols-2 gap-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full h-auto overflow-y-auto overflow-x-hidden pb-4 '>
              {filteredProduct.map((item) => {
                return (
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