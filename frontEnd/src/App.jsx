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
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

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
          {window.location.pathname !== '/login' && window.location.pathname !== '/register' && (
            <Navbar isTop={isTop} />
          )}
          <MobileMenu />
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/category/:cat' element={<Category />} />
            <Route path='/search/:search' element={<Searchedproduct />} />
            <Route path='/cartpage' element={<Cartpage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile/:id' element={<Profile />} />
          </Routes>
          <SideBar />
          {window.location.pathname !== '/login' && window.location.pathname !== '/register' && (
            <Footer />
          )}
        </div>
      </BrowserRouter>
    </>
  )
}

export default App