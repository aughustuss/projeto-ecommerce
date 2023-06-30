import React from 'react'
import Product from '../components/Product'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Promotion from '../components/Promotion';
import Productscollection from '../components/Productscollection';
import Emphasis from '../components/Emphasis';
import Newsletter from '../components/Newsletter';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <Hero />
      <div className='container mx-auto px-2 md:px-0'>
        <Categories />
        <Promotion />
        <Productscollection />
        <Banner />
        <Emphasis />
        <Newsletter />
        <Link to={`/profile/1`} >Perfil</Link>
      </div>
    </>
  )
}

export default Home;