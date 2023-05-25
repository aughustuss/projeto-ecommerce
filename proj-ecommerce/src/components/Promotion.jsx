import React, { useContext } from 'react'
import { ProductContext } from '../contexts/Product'
import Product from './Product';
import Slides from './Slides';
import { SwiperSlide } from 'swiper/react';

const Promotion = () => {
    const { product } = useContext(ProductContext);
    const promotionProduct = product.length > 0 ? product.filter((item) => {
        return item.category.toLowerCase() === 'electronics';
    }) : [];
    return (
        <>
            <section className='w-full flex flex-col gap-y-4'>
                <div className='w-full flex flex-col items-end'>
                    <p className='text-lg text-secondary font-semibold'>Ofertas da semana</p>
                    <p className='text-5xl text-tertiary font-semibold font-title'>Aproveite os super preços dos Eletrônicos</p>
                </div>
                <Slides classes={'w-full'}>
                    {promotionProduct.map((product) => {
                        return (
                            <SwiperSlide key={product.id}>
                                <Product product={product} />
                            </SwiperSlide>
                        )
                    })}
                </Slides>
            </section>
        </>
    )
}

export default Promotion