import React, { useContext, useState } from 'react'
import { SideBarContext } from '../contexts/Sidebar'
import { BsCart2 } from 'react-icons/bs'
import { HiOutlineSearch } from 'react-icons/hi'
import { MdArrowForward } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/Cart';
import { ProductContext } from '../contexts/Product';

const Navbar = ({ isTop }) => {

  const [search, setSearch] = useState('');
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { itemAmount } = useContext(CartContext);
  const { product } = useContext(ProductContext)

  const filteredSearch = search.length > 0 ? product.filter(item => {
    return item.title.toLowerCase().includes(search.toLowerCase())
  }) : [];

  return (
    <>
      <nav className={`${isTop ? ' text-black border-b' : 'bg-purple-700 text-white shadow-black shadow-sm'} transition-all duration-300 fixed py-4 flex items-center w-full z-40 font-montserrat`} >
        <div className='mx-auto w-5/6 flex justify-between items-center'>
          <Link to='/' className='text-4xl font-oswald font-bold' >
            AD Store
          </Link>
          <div className='flex flex-row gap-x-4 w-2/4'>
            <div className='flex items-center w-full flex-row relative'>
              <input onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Digite sua busca...' className='w-full p-2 outline-none bg-neutral-100  text-neutral-600' />
              <span className='hidden md:flex md:absolute md:right-4 text-xl text-neutral-600'><HiOutlineSearch /></span>
              <div className='bg-neutral-100 w-full absolute top-10 max-h-96 overflow-auto overflow-y-scroll'>
                {search.length > 0 ? (
                  filteredSearch.map((item) => {
                    return (
                      <Link key={item.id} onClick={() => setSearch('')} to={`product/${item.id}`} className='w-full h-32 md:h-[60px] border p-2 cursor-pointer transition duration-300 group flex flex-row items-center justify-between'>
                        <div className='h-full flex w-full flex-row text-xs items-center text-neutral-600 uppercase gap-x-2' >
                          <img className='h-full w-32 md:w-[40px]' src={item.image} />
                          <div className='flex flex-col w-full'>
                            <div className='sm:text-[8px] md:flex md:text-[8px] lg:text-[12px] '>
                              {item.title}
                            </div>
                            <div className='sm:text-[6px] md:flex md:text-[6px] lg:text-[10px] hidden'>
                              {item.category}
                            </div>
                          </div>
                        </div>
                        <div className='text-neutral-600'>
                          <MdArrowForward className='opacity-0 group-hover:opacity-100 transition duration-300' />
                        </div>
                      </Link>

                    )
                  })
                ) : (
                  null
                )}
              </div>
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={` ${isTop ? 'bg-purple-700 text-white' : ''} text-2xl cursor-pointer flex relative rounded-full p-2`}
            >
              <BsCart2 />
              <span className={`${itemAmount < 1 ? 'hidden' : 'absolute -top-2 -right-1 bg-red-600 rounded-full flex items-center justify-center h-5 w-5 text-[10px]'} `}>{itemAmount}</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar