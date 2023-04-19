import React, { createContext, useState } from "react";

export const MenuBarContext = createContext();

const MenuBarProvider = ({ children }) => {

  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setisMenuOpen(!isMenuOpen);
  }

  return (
    <MenuBarContext.Provider value={{isMenuOpen, setisMenuOpen, handleMenuClose}} >
      {children}
    </MenuBarContext.Provider>
  )
}

export default MenuBarProvider;