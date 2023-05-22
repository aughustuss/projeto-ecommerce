import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Hero = () => {

  const setting = {
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
      <Slider {...setting} className='overflow-hidden overflow-x-hidden  ' >
      <section className='text-white bg-no-repeat bg-cover bg-center pt-24 bg-purple-400 h-screen' >
          <div className='w-5/6 mx-auto flex flex-row h-full justify-around'>
            <div className='flex h-full justify-center items-center sm:items-baseline'>
              <div className='h-full flex justify-center flex-col'>
                <div className='items-center flex flex-row uppercase'>
                  <div className='w-10 h-[2px] bg-purple-900 mr-2' />LANÇAMENTOS DE
                </div>
                <div className='flex flex-col'>
                  <div className='text-6xl md:text-7xl leading-none mb-4 flex flex-col uppercase' >
                    <span className='font-oswald'>PRIMAVERA</span>
                    <span className='text-xs py-2' >PARA</span>
                    <span className='font-bold font-oswald' >MULHERES</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden lg:block'>
              <img className='h-full' src="https://i.postimg.cc/0NMfDJ1g/7027592h1l4b8tartgo3jh0gme-74302643e0aedeb75985c7a425d72610.png" alt="Woman" />
            </div>
          </div>
        </section>
        <section className='text-white bg-no-repeat bg-cover bg-center pt-24 bg-purple-400 h-screen font-montserrat' >
          <div className='w-5/6 mx-auto flex flex-row-reverse h-full justify-around'>
            <div className='flex h-full justify-center items-center sm:items-baseline'>
              <div className='h-full flex justify-center flex-col'>
                <div className='items-center flex flex-row uppercase'>
                  <div className='w-10 h-[2px] bg-purple-900 mr-2' />NOVIDADES
                </div>
                <div className='flex flex-col'>
                  <div className='text-6xl md:text-7xl leading-none mb-4 flex flex-col uppercase' >
                    <span className='font-oswald'>Todos os dias</span>
                    <span className='text-xs py-2' >Várias novas</span>
                    <span className='font-bold font-oswald' >Ofertas</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden lg:block h-full pt-40'>
              <img className='h-full' src="https://i.postimg.cc/yN8CSxMH/t7cu6kqlnf2dmna4u3ubqdhijd-ea1bfb6d20238060242904fa450117d1.png" alt="Woman" />
            </div>
          </div>
        </section>
      </Slider>
    </>
  )
}

export default Hero