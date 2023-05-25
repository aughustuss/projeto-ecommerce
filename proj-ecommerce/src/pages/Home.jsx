import React from 'react'
import Product from '../components/Product'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Promotion from '../components/Promotion';
import Productscollection from '../components/Productscollection';
import Emphasis from '../components/Emphasis';
import Newsletter from '../components/Newsletter';
const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Promotion />
      <Productscollection />
      <Banner />
      <Emphasis />
      <Newsletter />
    </>
  )
}

export default Home;