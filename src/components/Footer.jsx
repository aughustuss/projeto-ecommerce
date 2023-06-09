import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='bg-white text-black shadow-sm shadow-black'>
        <div className='container mx-auto pt-12 pb-12 md:pb-2'>
          <div className='flex flex-col justify-between h-24 gap-y-4'>
            <div className='flex justify-between items-center flex-col md:flex-row gap-y-4' >
            <Link to='/' className='text-lg font-title text-primary uppercase font-semibold flex flex-col justify-center items-center' >
            AD Shop For You
            <span className='uppercase text-[9px] leading-6 bg-primary text-white rounded-sm w-full text-center tracking-[2px]'>E-commerce Store</span>
          </Link>
              <p className='text-xs text-gray'>Copyright - 2023 &copy; Todos os direitos reservados.</p>
            </div>
            <div className='text-center text-gray text-xs'>
              Feito com &hearts; por Augusto de Paula
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer