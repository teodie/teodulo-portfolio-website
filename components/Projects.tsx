'use client'
import { Pause } from 'lucide-react'
import React, { useRef } from 'react'

const Projects = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const playVideo = () => {
    console.log("Mouse has been entered")
    videoRef.current?.play()
  }

  const resetVideo = () => {
    if (videoRef.current === null) return

    videoRef.current.pause()
    videoRef.current.currentTime = 0

  }

  return (
    <section id='projects' className='px-10 scroll-mt-24 max-w-400 mx-auto '>
      <h2 className='text-2xl text-center font-bold font-ovo mt-20 mb-20'>Projects</h2>

      <div className="grid grid-cols-5 gap-5">

        <div className='h-125 col-span-5 group relative md:col-span-3  bg-blue-400 overflow-hidden cursor-pointer rounded-2xl'>
          <div className='absolute inset-0 flex items-center justify-center'

            onMouseEnter={playVideo}
            onMouseLeave={resetVideo}
          >
            <video
              ref={videoRef}
              src="/kennyPortfolio.mp4"
              aria-label='Project-1'
              className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]'
              preload='auto'
              muted autoPlay loop
            ></video>
          </div>

          <span className='pointer-events-none absolute inset-0 bg-linear-to-br from-black/40 via-black/5 to-transparent' />

          <div className="absolute left-5 top-5">
            <span className="inline-block text-[11px] font-semibold text-white/80"> Portfolio </span>
            <p className="mt-1 font-acorn text-[22px] font-semibold leading-[1.15] text-white drop-shadow-sm md:text-[26px]">Portfolio Website</p>
            <p className="mt-0.5 text-[13px] text-white/70">Bookkeeper portfolio with responsive design for mobiles</p>
          </div>

        </div>

        <div className="h-125 col-span-5 md:col-span-2 group relative cursor-pointer overflow-hidden rounded-2xl gradient-circle"
          style={{ height: '500px', opacity: 1, transform: 'none', transformOrigin: '50% 50% 0px' }}
        >

          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/vendomon.png"
              alt="VendoMon"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] object-top-left" draggable="false" />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/40 via-black/5 to-transparent">
          </div>

          <div className="absolute left-5 top-5">
            <span className="inline-block text-[11px] font-semibold text-white/80"> React Native </span>
            <p className="mt-1 font-acorn text-[22px] font-semibold leading-[1.15] text-white drop-shadow-sm md:text-[26px]">VendoMon </p>
            <p className="mt-0.5 text-[13px] text-white/70">Machine sales and status reporting</p>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-white/15">
          </div>

        </div>

        <div className='h-125 col-span-5 group relative md:col-span-2 rounded-2xl overflow-hidden'>


          <div className='absolute inset-0 bg-linear-to-b from-black/40 via-black/5 to-transparent' />

          <div className='absolute top-5 left-5 text-white'>
            <span className='text-sm font-semibold'>React Native</span>
            <p className='text-2xl font-bold'>Comming Soon</p>
            <p className='text-sm font-extralight'>Application that will change humanities view</p>
          </div>


          <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-white/15">
          </span>
        </div>

        <div className='bg-white h-125 col-span-5 md:col-span-3 rounded-2xl overflow-hidden relative group'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <img className='group-hover:scale-[1.03] transition-transform duration-300 h-full w-full object-cover object-[0%_10%] ' src="/listathumbnail.jpg" alt="real state app thumbnail" />
          </div>
          <span className='absolute inset-0 bg-linear-to-br from-black/40 via-black/5 to-transparent' />


          <div className='absolute top-5 left-5 text-white'>
            <span className='text-sm font-regular'>React Native</span>
            <p className='text-2xl font-bold'>Lista</p>
            <p className='text-sm font-light'>Sari-sari Store voice to text dept logging</p>
          </div>



        </div>

      </div>
    </section>
  )
}

export default Projects