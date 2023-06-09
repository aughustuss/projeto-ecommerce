import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/Productdetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SideBar from './components/Sidebar'
import Cartpage from './pages/Cartpage'
import Category from './pages/Category'
import Contact from './pages/Contact'
import MobileMenu from './components/Mobilemenu'
import Searchedproduct from './pages/Searchedproduct'

const App = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const getScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else if (window.scrollY != 0) {
        setIsTop(false);
      }
    }
    window.addEventListener('scroll', getScroll);

    return () => {
      window.removeEventListener('scroll', getScroll)
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <div className='font-body'>
          <Navbar isTop={isTop} />
          <MobileMenu />

          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/category/:cat' element={<Category />} />
            <Route path='/search/:search' element={<Searchedproduct />} />
            <Route path='/cartpage' element={<Cartpage />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <SideBar />

          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App