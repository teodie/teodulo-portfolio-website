import React from 'react'

const Projects = () => {
  return (
    <section id='projects' className='px-10 scroll-mt-24 max-w-400 mx-auto pb-[50vh]'>
      <h2 className='text-2xl text-center font-bold font-ovo mt-20'>Projects</h2>

      <div className="grid grid-cols-5 gap-5">

        <div className='h-125 col-span-5 group relative md:col-span-3  bg-blue-400 overflow-hidden cursor-pointer rounded-2xl'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <video
              src="/video.mp4"
              aria-label='Project-1'
              className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]'
              preload='auto'
              muted autoPlay loop
            ></video>
          </div>
        </div>

        <div className="col-span-5 md:col-span-2 group relative cursor-pointer overflow-hidden rounded-2xl"
          style={{
            height: '500px',
            background: 'radial-gradient(circle at 18% 18%, rgba(255, 255, 255, 0.78) 0px, rgba(255, 255, 255, 0) 34%), linear-gradient(135deg, rgb(248, 255, 242) 0%, rgb(215, 244, 200) 46%, rgb(136, 207, 141) 100%)',
            opacity: 1,
            transform: 'none',
            transformOrigin: '50% 50% 0px'
          }}
        ><div className="absolute inset-0 flex items-center justify-center"><img src="/App_Leftoverchef.svg" alt="LeftOverChef" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" draggable="false" /></div><div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/5 to-transparent"></div><div className="absolute left-5 top-5"><span className="inline-block text-[11px] font-semibold text-white/80">iOS App</span><p className="mt-1 font-acorn text-[22px] font-semibold leading-[1.15] text-white drop-shadow-sm md:text-[26px]">LeftOverChef</p><p className="mt-0.5 text-[13px] text-white/70">Recipes from what's in your fridge</p></div><div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-white/15"></div></div>

      </div>
    </section>
  )
}

export default Projects