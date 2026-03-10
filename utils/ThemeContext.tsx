'use client'
import { createContext, useContext, ReactNode, useState } from "react";

type menuTypes = {
  showMenu: boolean,
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuContext = createContext<menuTypes | undefined>(undefined)

export default function MenuProvider ({ children }: { children: ReactNode }){
  const [showMenu, setShowMenu] = useState(false)

  return (
    <MenuContext value={{showMenu, setShowMenu}}>
      {children}
    </MenuContext>
  )
}

export const useMenu = () => {
  const context = useContext(MenuContext)

  if (context === undefined) {
    throw new Error("Calling theme context outside the provider")
  }

  return context
}

