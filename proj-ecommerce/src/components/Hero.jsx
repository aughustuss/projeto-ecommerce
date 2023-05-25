import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BannerPrimavera from '../assets/bannerprimavera.png'
import BannerOferta from '../assets/banneroferta.png'
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <>
      <Slider {...settings} className='overflow-hidden overflow-x-hidden font-body' >
      <section className='h-screen relative bg-quartiary'>
        <img src={BannerPrimavera} className='absolute z-0  object-cover h-full' />
          <div className='w-full mx-auto flex flex-row h-full justify-around '>
            <div className='flex h-full justify-center items-center sm:items-baseline'>
              <div className='h-full flex justify-center flex-col font-semibold z-10'>
                <div className='items-center flex flex-row uppercase text-primary'>
                  <div className='w-10 h-[2px] bg-primary mr-2 ' />LANÇAMENTOS DE
                </div>
                <div className='flex flex-col '>
                  <div className='text-6xl md:text-7xl leading-none mb-4 flex flex-col uppercase text-tertiary' >
                    <span className='font-title'>PRIMAVERA</span>
                    <span className='text-xs py-2' >PARA</span>
                    <span className='font-bold font-oswald' >MULHERES</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden lg:block z-10'>
              <img className='h-full' src="https://i.postimg.cc/0NMfDJ1g/7027592h1l4b8tartgo3jh0gme-74302643e0aedeb75985c7a425d72610.png" alt="Woman" />
            </div>
          </div>
        </section>
        <section className='text-primarypt-24 bg-tertiary h-screen px-2 relative' >
        <img src={BannerOferta} className='absolute object-cover h-full z-0' />
          <div className='w-full mx-auto flex flex-row-reverse h-full justify-around'>
            <div className='flex h-full justify-center items-center sm:items-baseline'>
              <div className='h-full flex justify-center flex-col z-10'>
                <div className='items-center flex flex-row uppercase font-semibold'>
                  <div className='w-10 h-[2px] bg-primary mr-2 ' />NOVIDADES
                </div>
                <div className='flex flex-col'>
                  <div className='text-6xl md:text-7xl leading-none mb-4 flex flex-col uppercase text-white' >
                    <span className='font-title'>Todos os dias</span>
                    <span className='text-xs py-2' >Várias novas</span>
                    <span className='font-bold font-title' >Ofertas</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden lg:block h-full pt-40 z-10'>
              <img className='h-full' src="https://i.postimg.cc/yN8CSxMH/t7cu6kqlnf2dmna4u3ubqdhijd-ea1bfb6d20238060242904fa450117d1.png" alt="Woman" />
            </div>
          </div>
        </section>
      </Slider>
    </>
  )
}

export default Hero