import React from 'react'
import { Moon, Sun } from 'lucide-react'

type NavPropType = {
  isDarkMode: boolean,
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const NavBAr = ({ isDarkMode, setIsDarkMode }: NavPropType) => {
  return (
      <nav className='flex flex-row justify-between items-center h-12 px-5 '>
        <a href="#" target="_blank" rel="noopener noreferrer" className='font-rondbox text-4xl tracking-[3px]'>Teodi</a>

        <ul
          className={`flex flex-row h-4/5 border-[1.5px] rounded-full ${isDarkMode ? ' border-white' : 'border-black'}`}
        >
          <a href="#" className='flex flex-1 items-center px-5 rounded-l-full hover:bg-gray-300 duration-500 dark:hover:bg-mist-500' >
            <li className='font-inter text-sm font-medium'>Home</li>
          </a>
          <a href="#" className='flex flex-1 items-center px-5 hover:bg-gray-300 duration-500 dark:hover:bg-mist-500'>
            <li className='font-inter text-sm font-medium'>About</li>
          </a>
          <a href="#" className='flex flex-1 items-center px-5 hover:bg-gray-300 duration-500 dark:hover:bg-mist-500'>
            <li className='font-inter text-sm font-medium'>Blog</li>
          </a>
          <a href="#" className='flex flex-1 items-center px-5 rounded-r-full hover:bg-gray-300 duration-500 dark:hover:bg-mist-500'>
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

export default NavBAr
