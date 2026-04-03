import Image from 'next/image'
import React from 'react'
import thumbnail from '@/assets/images/Getting Strated with Storybook with React Native.svg'
import thumbnail2 from '@/assets/images/How to Add Google and Facebook login with React Native Expo and Supabase.png'
import thumbnail3 from '@/assets/images/Your Idea deserves an App.png'
import { ClockFading } from 'lucide-react'

function Articles() {
  return (
    <section id='articles' className='px-10 scroll-mt-24 max-w-8xl mx-auto'>
      <h2 className='text-2xl text-center font-bold font-ovo mt-20'>My Writtings</h2>

      <p className='text-lg text-center mt-5 lg:text-2xl lg:mt-10'>I write mostly about the things I found interesting, things that I am currently learning and my realization in life.</p>

      <h2 className='text-center sm:text-start text-3xl font-bold font-ovo my-6'>My latest writtings...</h2>
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-x-5 gap-y-10'>

        <div className=''>
          <div className=' relative h-40 sm:h-70'>
            <Image src={thumbnail} alt='Thumbnail' fill className='rounded-3xl object-cover' />
          </div>
          <h3 className='text-lg font-semibold mb-1'>Getting started with Storybook and React Native</h3>
          <div className="text-sm font-medium flex gap-2 text-gray-500 dark:text-gray-300">
            <p className='mr-3 font-semibold '> Jan 19, 2026</p>
            <ClockFading size={20} strokeWidth={2.5} />
            <p >2 min Read</p>
          </div>
        </div>

        <div className=''>
          <div className='relative h-40 sm:h-70'>
            <Image src={thumbnail2} alt='Thumbnail' fill className='rounded-3xl object-cover' />
          </div>
          <h3 className='text-lg font-bold mb-1'>How to add Google and Facebook login with React Native Expo and Supabase</h3>
          <div className="text-sm font-medium flex gap-2 text-gray-500 dark:text-gray-300">
            <p className='mr-3 font-semibold '> Jan 05, 2026</p>
            <ClockFading size={20} strokeWidth={2.5} />
            <p >2 min Read</p>
          </div>
        </div>

        <div className=''>
          <div className='relative h-40 sm:h-70'>
            <Image src={thumbnail3} alt='Thumbnail' fill className='rounded-3xl object-cover' />
          </div>
          <h3 className='text-lg font-bold mb-1'>Your Idea Deserves an App: A Modern React Native Starter Guide</h3>
          <div className="text-sm font-medium flex gap-2 text-gray-500 dark:text-gray-300">
            <p className='mr-3 font-semibold '> Jan 05, 2026</p>
            <ClockFading size={20} strokeWidth={2.5} />
            <p>2 min Read</p>
          </div>
        </div>

      </div>
      <div className='text-center items-center mt-10 pb-20'>
        <a href="" className=' dark:bg-cyan-800 px-10 py-4 rounded-full inline-block text-xl font-semibold border-stone-900 darK:border-gray-400 border-[.01rem] dark:hover:bg-cyan-700'>View all</a>
      </div>

    </section>
  )
}

export default Articles