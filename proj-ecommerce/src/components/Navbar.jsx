import React, { useContext, useState } from 'react'
import { SideBarContext } from '../contexts/Sidebar'
import { BsCart2 } from 'react-icons/bs'
import { HiOutlineSearch } from 'react-icons/hi'
import { MdArrowForward, MdArrowBack } from 'react-icons/md'
import { CgClose } from 'react-icons/cg'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/Cart';
import { ProductContext } from '../contexts/Product';
import { MenuBarContext } from '../contexts/Menubar'

const Navbar = ({ isTop }) => {

  const [search, setSearch] = useState('');
  const [searchDiv, setSearchDiv] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { menuOpen, setMenuOpen } = useContext(MenuBarContext);
  const { itemAmount } = useContext(CartContext);
  const { product } = useContext(ProductContext)

  const filteredSearch = search.length > 0 ? product.filter(item => {
    return item.title.toLowerCase().includes(search.toLowerCase())
  }) : [];

  const filterCategories = (products) => {
    const filteredCategories = products.map((item) => {
      return item.category;
    });
    const uniqueCategory = [...new Set(filteredCategories)];
    return uniqueCategory;
  }

  const uniqueCategories = filterCategories(product);
  return (
    <>
      <nav className={`${isTop ? 'text-black  border-b' : 'bg-purple-700 text-white shadow-black shadow-sm'} transition-all duration-300 fixed md:py-4 flex flex-col gap-y-3 items-center w-full z-40 font-montserrat`} >
        <div className='mx-auto w-full md:w-5/6 flex flex-row justify-evenly items-center '>
          <div onClick={() => setMenuOpen(!menuOpen)} className='flex md:hidden p-0 m-0 cursor-pointer min-w-[60px] justify-center'>
            <AiOutlineMenu size={20} />
          </div>
          <Link to='/' className='text-2xl md:text-4xl font-oswald font-bold flex pb-4 md:pb-0 flex-col justify-center items-center gap-y-2' >
            AD Shop For You
            <span className={`${isTop ? 'border-purple-700' : 'border-white'} uppercase text-xs border w-full text-center py-2 tracking-[5px]`}>E-commerce Store</span>
          </Link>
          <div className='hidden md:flex flex-row gap-x-4 md:w-2/4'>
            <div className='flex items-center w-full flex-row relative'>
              <input onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Digite sua busca...' className={`bg-white pl-2 py-2 hidden md:flex w-full h-full outline-none text-neutral-600`} />
              <span className='flex md:absolute right-4 text-xl text-neutral-600'>{search.length > 0 ? <CgClose className='cursor-pointer' onClick={() => setSearch('')} /> : <HiOutlineSearch />}</span>
              <div className='bg-white z-40 w-full absolute top-full max-h-96 overflow-auto overflow-y-scroll'>
                {search.length > 0 ? (
                  filteredSearch.map((item) => {
                    return (
                      <Link key={item.id} onClick={() => setSearch('')} to={`product/${item.id}`} className='w-full h-fit md:h-[60px] border p-2 cursor-pointer transition duration-300 group flex flex-row items-center justify-between'>
                        <div className='h-full flex w-full flex-col md:flex-row text-xs items-center text-neutral-600 uppercase gap-x-2' >
                          <img className='md:h-full h-16 w-16 md:w-[40px]' src={item.image} />
                          <div className='flex flex-col w-full'>
                            <div className='text-[8px] md:flex lg:text-[12px] '>
                              {item.title}
                            </div>
                            <div className='sm:text-[6px] md:flex md:text-[6px] lg:text-[10px] hidden'>
                              {item.category}
                            </div>
                          </div>
                        </div>
                        <div className='hidden sm:block text-neutral-600'>
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
              className={` ${isTop ? 'bg-purple-700 text-white' : ''} text-2xl cursor-pointer hidden md:flex relative rounded-full p-2`}
            >
              <BsCart2 />
              <span className={`${itemAmount < 1 ? 'hidden' : 'absolute -top-2 -right-1 bg-red-600 rounded-full flex items-center justify-center h-5 w-5 text-[10px]'} `}>{itemAmount}</span>
            </div>
          </div>
          <div className='flex flex-row gap-x-4 md:hidden items-center max-w-[60px] justify-center'>
            <div className='cursor-pointer'>
              {!searchDiv ? (
                <HiOutlineSearch size={20} onClick={() => setSearchDiv(!searchDiv)} />
              ) : (
                <div className='top-0 absolute bg-white h-full w-full left-0 z-20 flex justify-center'>
                  <div className='w-full items-center justify-center h-full relative'>
                    <div className='w-5/6 mx-auto flex flex-row items-center justify-between h-full gap-x-4' >
                      <input placeholder='Digite sua busca...' className='py-2 bg-neutral-100 w-full outline-none text-neutral-600`' onChange={(e) => setSearch(e.target.value)} value={search} />
                      <span><CgClose color='black' onClick={() => { setSearchDiv(!searchDiv); setSearch('') }} size={20} /></span>
                    </div>
                    <div className='bg-white z-40 w-full absolute top-full max-h-96 overflow-auto overflow-y-scroll'>
                      {search.length > 0 ? (
                        filteredSearch.map((item) => {
                          return (
                            <Link key={item.id} onClick={() => setSearch('')} to={`product/${item.id}`} className='w-full h-fit md:h-[60px] border p-2 cursor-pointer transition duration-300 group flex flex-row items-center justify-between'>
                              <div className='h-full flex w-full flex-col md:flex-row text-xs items-center text-neutral-600 uppercase gap-x-2' >
                                <img className='md:h-full h-16 w-16 md:w-[40px]' src={item.image} />
                                <div className='flex flex-col w-full'>
                                  <div className='text-[8px] md:flex lg:text-[12px] '>
                                    {item.title}
                                  </div>
                                  <div className='sm:text-[6px] md:flex md:text-[6px] lg:text-[10px] hidden'>
                                    {item.category}
                                  </div>
                                </div>
                              </div>
                              <div className='hidden sm:block text-neutral-600'>
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
                </div>
              )}
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={`${isTop ? 'bg-purple-700 text-white' : ''} rounded-full p-2 text-2xl cursor-pointer flex relative `}
            >
              <BsCart2 />
              <span className={`${itemAmount < 1 ? 'hidden' : 'absolute -top-2 -right-1 bg-red-600 rounded-full flex items-center justify-center h-5 w-5 text-[10px]'} `}>{itemAmount}</span>
            </div>
          </div>
        </div>
        <div className='hidden md:flex w-5/6 flex-row md:justify-center'>
          <div className='flex w-full md:w-1/2'>
            <div onClick={() => setListOpen(!listOpen)} className=' transition duration-300 py-2 cursor-pointer  w-full md:text-center relative group flex flex-row items-center md:justify-center justify-start'>
              <div className='flex-grow' >Categorias</div><div className=' flex-shrink-0 opacity-0 group-hover:opacity-100 transition duration-300 text-2xl self-end'> {!listOpen ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}</div>
              {listOpen ? (
                <ul className={`text-black bg-neutral-100 capitalize absolute top-14 w-full p-2 rounded-b-md`} >
                  {uniqueCategories.map((item) => {
                    return (
                      <li key={item} className={`hover:text-white hover:bg-purple-600 text-sm md:text-md flex transition duration-300 `}>
                        <Link className='w-full h-full p-2 ' to={`/category/${item}`} key={item}> {item} </Link>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                null
              )}
            </div>
            <Link to='/contact' className='cursor-pointer w-full flex py-2 justify-end md:justify-center  transition duration-300'>
              Contato
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar