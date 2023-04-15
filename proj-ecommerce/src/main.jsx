import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ProductProvider from './contexts/Product'
import SideBarProvider from './contexts/Sidebar'
import CartProvider from './contexts/Cart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SideBarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      </ProductProvider>
    </CartProvider>
  </SideBarProvider>

)
