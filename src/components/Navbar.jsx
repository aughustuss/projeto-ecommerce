import React, { useContext, useState } from 'react'
import { SideBarContext } from '../contexts/Sidebar'
import { HiOutlineSearch, HiShoppingCart } from 'react-icons/hi'
import { MdArrowForward, MdArrowBack } from 'react-icons/md'
import { CgClose } from 'react-icons/cg'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/Cart';
import { ProductContext } from '../contexts/Product';
import { MenuBarContext } from '../contexts/Menubar'
import { CategoriesArray } from '../utils/datas'
import { RiSendPlaneFill } from 'react-icons/ri'

const Navbar = () => {

  const [search, setSearch] = useState('');
  const [searchDiv, setSearchDiv] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { isMenuOpen, setisMenuOpen } = useContext(MenuBarContext);
  const { itemAmount } = useContext(CartContext);
  const { product } = useContext(ProductContext)

  const navigate = useNavigate();

  const getSearchParams = (e) => {
    e.preventDefault();
    if (search.length > 0) return navigate(`/search/${search}`);
  }

  const filteredSearch = search.length > 0 ? product.filter(item => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  }) : [];

  return (
    <>
      <header className='text-black bg-white transition-all pt-1 duration-300 fixed shadow-md flex flex-col items-center w-full z-40 text-sm' >
        <div className='mx-auto w-full px-4 md:px-0 md:w-[90%] flex flex-row justify-between items-center '>
          <div onClick={() => setisMenuOpen(!isMenuOpen)} className='flex md:hidden p-0 m-0 cursor-pointer w-[40px] md:w-[60px] justify-center'>
            <AiOutlineMenu size={20} />
          </div>
          <Link to='/' className='text-lg font-title text-primary uppercase font-bold flex flex-col justify-center items-center pb-2 md:pb-0' >
            AD Shop For You
            <span className='uppercase text-[9px] leading-6 bg-primary text-white rounded-sm w-full text-center tracking-[2px]'>E-commerce Store</span>
          </Link>
          <div className='hidden md:flex flex-row gap-x-4 md:w-3/5'>
            <div className='flex items-center w-full flex-row relative'>
              <form onSubmit={getSearchParams} className='w-full flex flex-row items-center'>
                <input onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Digite sua busca...' className='bg-slate-200 pl-2 py-2 hidden md:flex w-full h-full outline-none text-neutral-600 rounded-l-md' />
                <Link to={`/search/${search}`} className='bg-primary rounded-r-md text-white py-[7px] px-3 hover:bg-primary/90 transition duration-100'><RiSendPlaneFill size={20} /></Link>
              </form>
              <span className='flex md:absolute right-16 text-xl text-neutral-600'>{search.length > 0 ? <CgClose className='cursor-pointer' onClick={() => setSearch('')} /> : <HiOutlineSearch />}</span>
              <div className='bg-white z-40 w-full absolute top-full max-h-96 px-1 rounded-b-md overflow-auto overflow-y-scroll shadow-md'>
                {search.length > 0 ? (
                  filteredSearch.map((item) => {
                    return (
                      <Link key={item.id} onClick={() => setSearch('')} to={`product/${item.id}`} className=' w-full h-fit md:h-[60px] border border-slate-200 rounded-md p-2 mb-2 cursor-pointer group flex flex-row items-center justify-between'>
                        <div className='h-full flex w-full px-2 flex-col md:flex-row text-xs items-center text-gray uppercase gap-x-2' >
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
              className='text-2xl cursor-pointer hidden md:flex relative  p-2 text-primary hover:text-primary/90'>
              <HiShoppingCart />
              <span className={`${itemAmount < 1 ? 'hidden' : 'absolute -top-2 -right-1 bg-red-600 rounded-full text-white flex items-center justify-center h-5 w-5 text-[10px]'} `}>{itemAmount}</span>
            </div>
          </div>
          <div className='flex flex-row gap-x-2 md:hidden items-center max-w-[60px] justify-center h-1/3 w-full'>
            <div className='cursor-pointer text-primary'>
              {!searchDiv ? (
                <HiOutlineSearch size={20} onClick={() => setSearchDiv(!searchDiv)} />
              ) : (
                <div className='top-0 absolute bg-white h-[160px] w-full left-0 z-20 flex justify-center shadow-md'>
                  <div className='w-full items-center justify-center h-full relative'>
                    <div className='w-5/6 mx-auto flex flex-row items-center justify-between h-full gap-x-4' >
                      <form onSubmit={getSearchParams} className='w-full'>
                        <input placeholder='Digite sua busca...' className='pl-4 rounded-md py-2 w-full outline-none text-gray bg-slate-200' onChange={(e) => setSearch(e.target.value)} value={search} />
                      </form>
                      <span><CgClose onClick={() => { setSearchDiv(!searchDiv); setSearch('') }} size={20} /></span>
                    </div>
                    <div className='bg-white z-40 w-full absolute top-full max-h-96 overflow-auto overflow-y-scroll shadow-md'>
                      {search.length > 0 ? (
                        filteredSearch.map((item) => {
                          return (
                            <Link key={item.id} onClick={() => setSearch('')} to={`product/${item.id}`} className='h-fit md:h-[60px] mx-2 border border-slate-200 rounded-md mb-2 p-2 cursor-pointer transition duration-300 group flex flex-row items-center justify-between'>
                              <div className='h-full flex w-full flex-col md:flex-row text-xs items-center text-neutral-600 uppercase gap-x-2' >
                                <img className='md:h-full h-16 w-16 md:w-[40px]' src={item.image} />
                                <div className='flex flex-col w-full'>
                                  <div className='text-[8px] md:flex lg:text-[12px] text-center '>
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
              className='rounded-full text-2xl cursor-pointer flex relative md:text-xl text-primary hover:text-primary/90'
            >
              <HiShoppingCart />
              <span className={`${itemAmount < 1 ? 'hidden' : 'absolute -top-2 -right-1 bg-red-600 text-white rounded-full flex items-center justify-center h-5 w-5 text-[10px]'} `}>{itemAmount}</span>
            </div>
          </div>
        </div>
        <div className='hidden md:flex w-5/6 flex-row md:justify-center'>
          <div className='flex w-full md:w-1/2'>
            <div className=' transition duration-300  cursor-pointer  w-full md:text-center relative group flex flex-row items-center md:justify-center justify-start'>
              <div onClick={() => setListOpen(!listOpen)} className='flex flex-row items-center w-full'>
                <div className='flex-grow' >
                  Categorias</div>
                <div className=' flex-shrink-0 opacity-0 group-hover:opacity-100 transition duration-300 text-2xl self-end'>
                  {!listOpen ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
                </div>
              </div>
              {listOpen ? (
                <ul className='text-gray bg-white capitalize absolute top-full w-full p-2 rounded-b-md' >
                  {CategoriesArray.map((item) => {
                    return (
                      <li key={item.id} className='hover:text-white hover:bg-primary text-sm md:text-md flex transition duration-500'>
                        <Link className='w-full h-full p-2 ' to={`/category/${item.title}`}> {item.title} </Link>
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
      </header>
    </>
  )
}

export default Navbar