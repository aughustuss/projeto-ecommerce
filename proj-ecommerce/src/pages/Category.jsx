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
      <section className='pb-4 md:pt-32 pt-20 w-full container mx-auto px-4 md:px-0' >
        <div className='flex p-1 w-full h-[900px] border-gray rounded-md '>
          <div className='w-full flex flex-col gap-y-4 h-full '>
            <div className=' text-xl lg:text-3xl font-semibold py-2 bg-primary w-full text-white px-2 rounded-md flex flex-row gap-x-2 ' >
              {cat}
              <p className='text-[10px] self-start text-white normal-case'>{filteredProduct.length} produtos encontrados </p>
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