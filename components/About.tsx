import Image from 'next/image'
import myphoto from '@/assets/images/teodulo.png'


function About() {

  return (
    <div id='about' className='scroll-mt-16 lg:scroll-mt-24 max-w-400 mx-auto px-10'>
      <h3 className='text-center text-2xl font-bold font-ovo mt-20 md:my-20'>About me</h3>

      <div className='grid grid-cols-1 md:my-10 md:grid-cols-2'>

        <div className='text-xl space-y-7 order-2 md:order-1'>

          <h2 className='font-extrabold text-3xl lg:text-6xl font-outfit'>I'm Teodulo Soriano. I leave in the philippines, where I implement practical solutions.</h2>

          <p>I have a degree in Computer Engineering which also means that my neighbors think that I can repair their broken device and appliances. One time I fixed a fridge with a wire chewed through by the rats and earned 400 pesos (about $8) by just reconnecting the wires.</p>

          <p>I enjoy solving problems and building things—especially when they make work and everyday life easier.</p>

          <p>For example, when my mom needed help manually packing oil for her store, I designed and built a device that automatically dispenses the exact amount at the push of a button. In another case, I created a Python script that parses transaction data, cleans and formats it, and exports it to organized Excel files for my wife—saving hours of manual work.</p>

          <p>Automation and efficiency are at the core of how I approach problems. Whether it’s a mechanical device or a piece of software, I focus on creating practical solutions that simplify tasks and improve workflows.</p>

          <p>As a kid I don't really like books and only opened them to count people on every page. Growing older opened my eyes to the importance of learning. There's a quote on the book in Grit by Angela Duckworth that says. <i className='font-semibold'>"The root of knowledge is bitter, but the fruit is sweet"</i>. That resonates with me and I believe it is true and everyone should appreciate the importance of reading. I mainly read about self-help, business, programming, science and other technology books.</p>
        </div>

        <Image className='items-start justify-self-center rounded-xl rotate-5 order-1 my-7 lg:order-2' src={myphoto} alt='my image' width={400} />

      </div>
    </div>
  )
}

export default About