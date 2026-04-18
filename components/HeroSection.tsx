'use client'
import Image from 'next/image'
import { icons, profile } from '@/assets/assets'
import { quoates } from '@/utils/BookQuotes'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const [quoateIndex, setQuoateIndex] = useState(0)

  const generateRandomNumberUpTo = (max: number) => {
    return Math.floor(Math.random() * max)
  }
  useEffect(() => {
    const maxIndex = quoates.length
    const randomNumber = generateRandomNumberUpTo(maxIndex)
    setQuoateIndex(randomNumber)
  }, [])

  const mainImage = [
    { alt: "left profile", src: profile.left },
    { alt: "middle profile", src: profile.middle },
    { alt: "right profile", src: profile.right },
  ]

  const socialIcons = [
    { href: "https://www.linkedin.com/in/teodulosoriano/", alt: "linkedin", src: icons.linkedin },
    { href: "https://github.com/teodie", alt: "github", src: icons.github },
    { href: "https://www.facebook.com/teodulo.soriano/", alt: "facebook", src: icons.facebook },
  ]

  return (
    <div id='#home' className='px-10 flex flex-col-reverse items-center gap-5 text-center pt-10 md:pt-20
    md:flex-row md:h-full md:gap-0 md:text-start md:justify-between max-w-400 mx-auto
    '>

      <div className='pr-5  w-full '>
        <h1 className='text-2xl md:text-4xl lg:text-5xl mb-3 font-ovo'>{quoates[quoateIndex].quoate}</h1>
        <div className='text-xs md:text-2xl text-gray-500 dark:text-gray-300'>
          <strong className='font-bold'>{`- ${quoates[quoateIndex].BookTitle}`}</strong>
          <p>{`by ${quoates[quoateIndex].BookAuthor}`}</p>
        </div>
      </div>

      <div className='e flex flex-col w-56 md:w-3xl items-center'>
        <div className='flex flex-row gap-2 items-center mt-8'>
          {
            mainImage.map((image) => (
              <div>
                <Image alt={image.alt} src={image.src} priority />
              </div>
            ))
          }
        </div>

        <div className='mt-4 flex flex-row justify-center space-x-5'>
          {
            socialIcons.map((icon) => (
              <a href={icon.href}
                target='_blank'
                className='hover:scale-[1.05] transition duration-500'>
                <Image alt={icon.alt} src={icon.src} width={50} />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HeroSection