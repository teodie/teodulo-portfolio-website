import Image from 'next/image'
import { icons, profile } from '@/assets/assets'

const Header = () => {
  return (
    <div id='#home' className='px-[5%]  flex flex-col-reverse items-center gap-5 text-center
    md:flex-row md:h-full md:gap-0 md:text-start md:justify-between
    '>

      <div className='pr-5  w-full '>
        <h1 className='text-2xl md:text-5xl mb-3 font-ovo'>Consider everything... but take nothing as a gospel.</h1>
        <h3 className='text-xs md:text-2xl'>- The Almanack of Naval Ravikant</h3>
      </div>

      <div className='e flex flex-col w-56 md:w-3xl items-center'>

        <div className='flex flex-row gap-2 items-center mt-8'>
          <div>
            <Image alt='left profile' src={profile.left} />
          </div>
          <div>
            <Image alt='middle profile' src={profile.middle} />
          </div>
          <div>
            <Image alt='right profile' src={profile.right} />
          </div>
        </div>

        <div className='mt-4 flex flex-row justify-center space-x-5'>
          <div>
            <Image alt='linkedin' src={icons.linkedin} width={50} />
          </div>
          <div>
            <Image alt='github' src={icons.github} width={50} />       
          </div>
          <div>
            <Image alt='instagram' src={icons.instagram} width={50} />
          </div>
          <div>
            <Image alt='facebook' src={icons.facebook} width={50} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header