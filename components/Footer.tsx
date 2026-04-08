
import Image from 'next/image'

function Footer() {
  return (
    <div className='mt-20'>
      <div className='text-center'>


        <div className='w-max flex flex-col items-center gap-2 mx-auto'>
          <h2 className='font-rondbox text-4xl tracking-[3px]'>Teodi</h2>
          <p>teodulosoriano@gmail.com</p>
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2026 Teodulo Soriano. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a href="https://github.com/teodie" target='_blank'>Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/teodulosoriano/" target='_blank'>Linkedin</a>
          </li>
          <li>
            <a href="#" target='_blank'>Indeed</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer