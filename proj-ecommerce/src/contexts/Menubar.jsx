import React, {createContext, useState} from 'react'

export const MenuBarContext = createContext();

const MenuBarProvider = ({children}) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <MenuBarContext.Provider value={{menuOpen, setMenuOpen, handleMenuClose}}>
        {children}
      </MenuBarContext.Provider>
    </>
  )
}

export default MenuBarProvider;