import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode } from 'swiper'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
const Slides = ({ children, classes }) => {
    return (
        <>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    512: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                autoplay
                modules={[Pagination, FreeMode]}
                freeMode={true}
                className={classes}
            >
                {children}
            </Swiper>
        </>
    )
}

export default Slides