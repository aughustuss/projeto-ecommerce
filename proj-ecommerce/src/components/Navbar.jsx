import React, { useContext } from 'react'
import { SideBarContext } from '../contexts/Sidebar'
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Navbar = ({ isTop }) => {

  const { isOpen, setIsOpen } = useContext(SideBarContext);

  return (
    <>
      <nav className={`${isTop ? ' text-black' : 'bg-purple-700 text-white'} transition-all duration-500 fixed py-4 flex items-center w-full z-40`} >
        <div className='mx-auto w-5/6 flex justify-between items-center'>
          <Link to='/' className='text-4xl font-oswald' >
            AD Store
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={` ${isTop ? 'bg-purple-700 text-white' : ''} text-2xl cursor-pointer flex relative rounded-full p-2`}
          >
            <BsCart2 />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar