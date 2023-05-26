import React, { useContext, useState } from 'react'
import { ProductContext } from '../contexts/Product'
import Product from './Product';
import { Pagination } from '@mui/material';
import mediaQuery from '../utils/mediascreen';
import Slides from './reusables/Slides';
import { SwiperSlide } from 'swiper/react';

const Productscollection = () => {
    const { product } = useContext(ProductContext);
    const [page, setPage] = useState(1);
    const isAboveSM = mediaQuery("(min-width: 640px)");
    return (
        <>
            <section className='py-10 w-full flex flex-col gap-y-4  justify-center'>
                <div className='flex flex-col w-full h-full'>
                    <p className='text-lg text-secondary font-semibold'>Encontre de tudo</p>
                    <p className='text-5xl text-primary font-semibold font-title'>Dê uma olhada em tudo que há de melhor</p>
                </div>
                {isAboveSM ? (
                    <div>
                        <div className='w-full flex flex-col h-full justify-center gap-y-4'>
                            <div className='min-h-[2000px] h-auto sm:min-h-[800px]'>
                                <div className='gap-2 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 h-full place-items-start'>
                                    {product.slice((page - 1) * 10, (page - 1) * 10 + 10).map((product) => {
                                        return (
                                            <Product product={product} key={product.id} />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <Pagination
                            count={Math.ceil(product.length / 10)}
                            onChange={(_, value) => {
                                setPage(value);
                            }}
                            shape='rounded'
                            className='w-full flex justify-center'
                        />
                    </div>
                ) : (
                    <Slides classes={'w-full h-auto py-4'}>
                        {product.map((product) => {
                            return (
                                <SwiperSlide key={product.id}>
                                    <Product product={product} />
                                </SwiperSlide>
                            )
                        })}
                    </Slides>
                )}
            </section>
        </>
    )
}

export default Productscollection