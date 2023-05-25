import React from 'react'
import BannerImg from '../assets/banner.png'

const Banner = () => {
    return (
        <>
            <section>
                <img src={BannerImg} className='h-full w-full rounded-md' />
            </section>
        </>
    )
}

export default Banner