import React from 'react'
import Image from 'next/image'
import myphoto from '@/assets/images/teodulo.png'

function About() {
  return (
    <div id='about' className='px-10 scroll-mt-25'>
      <h3 className='text-center text-2xl font-bold font-ovo my-20'>About me</h3>
      <div className='grid grid-cols-1 my-10 md:grid-cols-2'>


        <div className='text-xl space-y-5 order-2 md:order-1'>

          <h2 className='font-extrabold text-4xl lg:text-6xl font-outfit mb-4'>I'm Teodulo Soriano I leave in the philippines, where I create, design and implement practical solutions.</h2>

          <p>I have a Degree in Computer Engineering which also means that my neighbors think that I can repair their broken device and appliances. One time I fix a fridge with a wire chewed through by the rats and earn 400 pesos or $8 by just reconnecting the wires.</p>

          <p>I like to solving problems and building things specialy if it can make my work and life easier. One time my Mom wan't me to manually pack oil for her store. I create a device that automatically despence the right amount in a push of a button or when I create a Python script that will parse all the transaction, clean and format and save it to excel file for my wife. Automation and making things efficient is my go to when I encounter issues in my daily life, whether thourg physical device mechanical and electronics or through code and software.</p>

          <p>As a kid I don't really like books and open them just to count people in it. Growing older open my eyes to the importance of learning so during college a start reading books about self help, business, programming, science and other technology books.</p>
        </div>

        <Image className='items-start justify-self-center rounded-xl rotate-5 order-1 my-7 lg:order-2' src={myphoto} alt='my image' width={400} />

      </div>
    </div>
  )
}

export default About