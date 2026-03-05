import React from 'react'
import { Sun } from 'lucide-react'


export const Nav = () => {
  return (
    <nav className='flex flex-row justify-between items-center h-12 px-5'>
      <a href="#" target="_blank" rel="noopener noreferrer" className='font-rondbox text-5xl tracking-[5px]'>Teodi</a>

      <ul className='flex flex-row gap-10'>
        <a href="#">
          <li className='font-outfit'>Home</li>
        </a>
        <a href="#">
          <li className='font-outfit'>About</li>
        </a>
        <a href="#">
          <li className='font-outfit'>Blog</li>
        </a>
        <a href="#">
          <li className='font-outfit'>Contact</li>
        </a>
      </ul>

      <Sun />
    </nav>
  )
}

export default Nav
