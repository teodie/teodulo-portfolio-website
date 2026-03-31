import React, { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useMenu } from '@/utils/ThemeContext'

type NavPropType = {
  isDarkMode: boolean,
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const NavBAr = ({ isDarkMode, setIsDarkMode }: NavPropType) => {
  const { showMenu, setShowMenu } = useMenu()
  const [isScrolled, setIsScrolled] = useState(false)

  const menu = ["Home", "About", "Articles", "Projects", "Works"]

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if( scrollY > 50){
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }, [])

  return (
    <nav className={`fixed flex w-full flex-row justify-between items-center px-5 py-2 md:py-4 z-50 
  ${isScrolled && 'dark:bg-slate-900/70 bg-white/70 backdrop-blur-md border-b border-white/20 '}`}>
      <a href="#" target="_blank" rel="noopener noreferrer" className='font-rondbox text-4xl tracking-[3px]'>Teodi</a>

      <ul
        className={`
          h-12 rounded-full font-inter hidden shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-indigo-950/50 dark:text-zinc-200 dark:ring-white/10
          sm:flex sm:flex-row
          `}
      >
        {
          menu.map((item) => (
            <li key={item} className='flex flex-1 items-center px-5 hover:text-blue-600 duration-500'>
              <a href="#top" className='text-sm font-medium' >{item}</a>
            </li>
          ))
        }
      </ul>



      <div className='flex flex-row'>
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

        <div
          className='p-1.25 cursor-pointer sm:hidden'
          onClick={() => {
            setShowMenu(true)
          }}>
          <Menu color={isDarkMode ? 'white' : 'black'} size={20} />
        </div>
      </div>

      <ul
        className={`fixed flex flex-col gap-5 bg-white dark:bg-mobile-nav shadow-lg right-0 top-0 min-h-screen min-w-64 sm:hidden ${!showMenu && 'translate-x-64'} transform transition-transform duration-500 ease-in-out`}
      >
        <button className='self-end m-4'
          onClick={() => {
            setShowMenu(false)
          }}>
          <X color={isDarkMode ? 'white' : 'black'} size={20} />
        </button>
        <a href="#top" className='items-center px-5 rounded-l-full duration-500 dark:hover:bg-mist-500'>
          <li className='font-inter text-sm font-medium'>Home</li>
        </a>
        <a href="#" className=' items-center px-5 duration-500 dark:hover:bg-mist-500'>
          <li className='font-inter text-sm font-medium'>About</li>
        </a>
        <a href="#" className=' items-center px-5 duration-500 dark:hover:bg-mist-500'>
          <li className='font-inter text-sm font-medium'>Blog</li>
        </a>
        <a href="#" className=' items-center px-5 rounded-r-full duration-500 dark:hover:bg-mist-500'>
          <li className='font-inter text-sm font-medium'>Projects</li>
        </a>
        <a href="#" className=' items-center px-5 rounded-r-full duration-500 dark:hover:bg-mist-500'>
          <li className='font-inter text-sm font-medium'>Works</li>
        </a>
      </ul>

    </nav>


  )
}

export default NavBAr
