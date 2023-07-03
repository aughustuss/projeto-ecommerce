import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);


  const getProducts = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProduct(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <ProductContext.Provider value={{ product }}>
        {children}
      </ProductContext.Provider>
    </>
  )
}

export default ProductProvider;