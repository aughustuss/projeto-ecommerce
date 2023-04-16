import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/Productdetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SideBar from './components/Sidebar'
import Cartpage from './pages/Cartpage'

const App = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const getScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else if (window.scrollY > 80) {
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
        <Navbar isTop={isTop} />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cartpage' element={<Cartpage/>} />
        </Routes>
        <SideBar />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App