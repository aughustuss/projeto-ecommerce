import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { CategoriesArray } from '../utils/datas'
import { Link } from 'react-router-dom'
import Slides from './reusables/Slides'

const Categories = () => {
    return (
        <>
            <section className='w-full flex flex-col gap-y-4 py-10'>
                <div className='w-full flex flex-col '>
                    <p className='text-lg text-secondary font-semibold'>Veja mais</p>
                    <p className='text-5xl text-primary font-semibold font-title'>Navegue por nossas categorias</p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 place-items-center w-full gap-2'>
                    {CategoriesArray.map((category) => {
                        return (
                            <Link to={`/category/${category.title}`} key={category.id} className='w-full hover:scale-105 transition duration-200'>
                                <div className='flex flex-col justify-center items-center bg-quartiary rounded-md h-[160px]'>
                                    <p className='text-4xl md:text-5xl text-quinary'><category.icon /></p>
                                    <p>{category.title}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Categories