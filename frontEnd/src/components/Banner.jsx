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
                    <div className='w-full h-[400px] bg-primary rounded-md'/>
                ) : (
                    <div className='w-full h-[600px] bg-primary rounded-md' />
                )}
            </section>
        </>
    )
}

export default Banner