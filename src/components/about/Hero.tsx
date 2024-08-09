import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='md:flex md:justify-center md:items-center'>
      <div className='md:w-1/2'>
        <h1>
        UAE&apos;s first event planning marketplace app
        </h1>
        <p>Curating a hassle-free event planning journey for all.</p>
      </div>
      <div className='md:w-1/2'>
        <div>
            <Image src='/about-image/' alt='' height={} width={}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
