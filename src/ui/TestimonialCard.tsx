import Image from 'next/image'
import React from 'react'

const TestimonialCard = ({ name, location, data }: { name: string, location: string, data: string }) => {
  return (
    <div className='bg-[#fff] border p-8 md:p-12 rounded-3xl m-4 shadow-2xl md:h-64 mb-20'>

      <div className='flex justify-center items-center'>
        <div className='w-1/4 '>
        <div className='flex justify-center items-center'>
          <Image src='/profile.svg' alt='' height={70} width={70} />
        </div>
        <p className='text-center font-bold'>{name}</p>
          <p className='text-left md:text-center text-xs md:px-8'>{location}</p>
        </div>
        <div className='w-3/4'>
          <p className='text-left md:text-center text-sm'>{data}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
