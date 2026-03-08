import React from 'react'
import { Moon, Sun } from 'lucide-react'

type NavPropType = {
  isDarkMode: boolean,
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const Nav = ({isDarkMode, setIsDarkMode}: NavPropType) => {
  return (
    <nav className='flex flex-row justify-between items-center h-12 px-5 border border-black'>
      <a href="#" target="_blank" rel="noopener noreferrer" className='font-rondbox text-4xl tracking-[3px]'>Teodi</a>

      <ul className='flex flex-row gap-10'>
        <a href="#">
          <li className='font-inter text-sm font-medium'>Home</li>
        </a>
        <a href="#">
          <li className='font-inter text-sm font-medium'>About</li>
        </a>
        <a href="#">
          <li className='font-inter text-sm font-medium'>Blog</li>
        </a>
        <a href="#">
          <li className='font-inter text-sm font-medium'>Contact</li>
        </a>
      </ul>

      <div 
      className='p-1.25 rounded-full hover:bg-gray-300 cursor-pointer duration-300 dark:hover:bg-mist-500'
       onClick={() => {
        setIsDarkMode(prev => !prev)
      }}>
        {
          isDarkMode 
          ? <Moon color='white' size={20} /> 
          : <Sun color='black' size={20} />
        }
      </div>
    </nav>
  )
}

export default Nav
