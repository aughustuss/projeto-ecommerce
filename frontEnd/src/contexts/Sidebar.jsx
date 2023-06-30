import React, {createContext, useState} from 'react'

export const SideBarContext = createContext();

const SideBarProvider = ({children}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleSideBarClose = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SideBarContext.Provider value={{isOpen, setIsOpen, handleSideBarClose}}>
        {children}
      </SideBarContext.Provider>
    </>
  )
}

export default SideBarProvider;