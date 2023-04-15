import React, {createContext, useState} from 'react'

export const SideBarContext = createContext();

const SideBarProvider = ({children}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SideBarContext.Provider value={{isOpen, setIsOpen, handleClose}}>
        {children}
      </SideBarContext.Provider>
    </>
  )
}

export default SideBarProvider;