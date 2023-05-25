import React from 'react'
import Product from '../components/Product'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Promotion from '../components/Promotion';
import Productscollection from '../components/Productscollection';
import Emphasis from '../components/Emphasis';
const Home = () => {
  return (
    <>
      <Hero />
      <div className='font-body container mx-auto px-4 md:px-0 '>
        <Categories />
        <Promotion />
        <Productscollection />
        <Banner />
        <Emphasis/>
      </div>
    </>
  )
}

export default Home;