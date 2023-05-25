import React from 'react'
import BannerImg from '../assets/banner.png'
import BannerSM from '../assets/bannersm.png'
import mediaQuery from '../utils/mediascreen'

const Banner = () => {
    const isAboveSM = mediaQuery('(min-width: 512px)');
    return (
        <>
            <section>
                {isAboveSM ? (
                    <img src={BannerImg} className='h-full w-full rounded-md' />
                ) : (
                    <img src={BannerSM} className='h-full w-full rounded-md' />
                )}
            </section>
        </>
    )
}

export default Banner