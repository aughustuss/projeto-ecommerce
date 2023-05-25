import React, { useContext } from 'react'
import { ProductContext } from '../contexts/Product'
import Slides from './Slides';
import Product from './Product';
import { SwiperSlide } from 'swiper/react';

const Emphasis = () => {
    const { product } = useContext(ProductContext);

    const emphasisProduct = product.length > 0 ? product.filter((product) => {
        return product.category.toLowerCase() === "women's clothing";
    }) : [];
    return (
        <>
            <section className='w-full flex flex-col gap-y-4 py-10'>
                <div className='w-full flex flex-col'>
                    <p className='text-lg text-secondary font-semibold'>Tudo para você</p>
                    <p className='text-5xl text-tertiary font-semibold font-title'>Moda feminina</p>
                </div>
                <Slides classes={'w-full'}>
                    {emphasisProduct.map((product) => {
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

export default Emphasis