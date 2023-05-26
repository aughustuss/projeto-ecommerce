import React, { useContext } from 'react'
import { ProductContext } from '../contexts/Product'
import Product from './Product';
import Slides from './reusables/Slides';
import { SwiperSlide } from 'swiper/react';
import Categorylink from './reusables/Categorylink';

const Promotion = () => {
    const { product } = useContext(ProductContext);
    const promotionProduct = product.length > 0 ? product.filter((item) => {
        return item.category.toLowerCase() === 'electronics';
    }) : [];
    const category = promotionProduct[0] !== undefined || null ? promotionProduct[0].category : "electronics"
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
                <Categorylink position="justify-end" link={category} />
            </section>
        </>
    )
}

export default Promotion