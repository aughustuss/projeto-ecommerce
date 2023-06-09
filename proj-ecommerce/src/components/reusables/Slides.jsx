import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode, Navigation } from 'swiper'
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
const Slides = ({ children, classes }) => {
    const [_, setInit] = useState(false);
    const nextRef = useRef(null);
    const prevRef = useRef(null);
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
                modules={[Navigation, Pagination]}
                freeMode={true}
                pagination={{
                    el: ".custom-pagination",
                    clickable: true,
                }}
                navigation={{
                    nextEl: nextRef.current,
                    prevEl: prevRef.current,
                }}
                onInit={() => setInit(true)}
                className={`relative ${classes}`}
            >
                {children}
                <div className='absolute left-0 top-[40%] cursor-pointer z-10 p-[2px] bg-primary rounded-full text-white font-semibold' ref={prevRef}><MdKeyboardArrowLeft size={30}/></div>
                <div className='absolute right-0 top-[40%] z-10 cursor-pointer p-[2px] bg-primary rounded-full text-white ' ref={nextRef}><MdKeyboardArrowRight size={30}/></div>
            </Swiper >
        </>
    )
}

export default Slides