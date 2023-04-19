import React, {createContext, useState} from 'react'

export const MenuBarContext = createContext();

const MenuBarProvider = ({children}) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuBarClose = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <MenuBarContext.Provider value={{menuOpen, setMenuOpen, handleMenuBarClose}}>
        {children}
      </MenuBarContext.Provider>
    </>
  )
}

export default MenuBarProvider;