import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { CategoriesArray } from '../utils/datas'
import { Link } from 'react-router-dom'
import Slides from './Slides'

const Categories = () => {
    return (
        <>
            <section className='w-full flex flex-col gap-y-4'>
                <div className='w-full flex flex-col '>
                    <p className='text-lg text-secondary font-semibold'>Veja mais</p>
                    <p className='text-5xl text-primary font-semibold font-title'>Navegue por nossas categorias</p>
                </div>
                <Slides classes={'w-3/5 flex justify-center font-poppins py-12'}>
                    {CategoriesArray.map((category) => {
                        return (
                            <SwiperSlide key={category.id} className='w-full max-w-[176px] h-44 p-2 rounded-full hover:scale-105 transition duration-200'>
                                <Link to={`/category/${category.title}`} className='w-full h-full' >
                                    <div className='h-full w-full rounded-full bg-primary p-2 relative'>
                                        <img src={category.image} className='w-full h-full bg-cover rounded-full bg-secondary' />
                                        <p className='max-w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-100 tracking-widest text-xl font-semibold'>{category.title}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Slides>
            </section>
        </>
    )
}

export default Categories