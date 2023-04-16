import React from 'react'

const Hero = () => {
  return (
    <>
      <section className='text-white bg-no-repeat bg-cover bg-center py-24 bg-purple-400 h-[800px] font-montserrat' style={{ backgroundImage: "url('https://i.postimg.cc/FKp9b1yZ/AUTUMN-1.png')" }} >
        <div className='w-5/6 mx-auto flex h-full justify-around'>
          <div className='flex h-full justify-center items-center sm:items-baseline'>
            <div className='h-full flex justify-center  flex-col'>
              <div className='items-center flex flex-row uppercase'>
                <div className='w-10 h-[2px] bg-purple-900 mr-2' />Novos Lançamentos
              </div>
              <div className='flex flex-col'>
                <div className='text-7xl leading-none font-oswald mb-4 flex flex-col' >
                  VENDAS DE PRIMAVERA
                  <span className='font-bold' >MULHERES</span>
                </div>
              </div>
            </div>

          </div>
          <div className='hidden lg:block'>
            <img className='h-[705px]' src="https://i.postimg.cc/0NMfDJ1g/7027592h1l4b8tartgo3jh0gme-74302643e0aedeb75985c7a425d72610.png" alt="Woman" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero