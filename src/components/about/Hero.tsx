import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='md:flex md:justify-center md:items-center md:mx-20 md:my-20'>
      <div className='md:w-3/5 '>
        <h1 className='font-bold md:text-5xl md:leading-relaxed'>UAE&apos;s first event planning marketplace app</h1>
        <p className='text-lg md:my-8'>Curating a hassle-free event planning journey for all.</p>
      </div>
      <div className='md:w-2/5'>
        <div className='flex justify-center items-center'>
            <Image src='/about-image/eventstan3Dlogo.webp' alt='' height={400} width={400}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
