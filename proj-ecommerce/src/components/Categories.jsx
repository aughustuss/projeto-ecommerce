import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode } from 'swiper'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

const Categories = () => {
    return (
        <>
            <section>
                <Swiper 
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    512: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                }}
                autoplay
                modules={[Pagination, FreeMode]}
                pagination={{
                    clickable: true,
                }}
                freeMode={true}
                
                >
                    
                </Swiper>
            </section>
        </>
    )
}

export default Categories