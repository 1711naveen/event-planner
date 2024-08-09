import FormCard from '@/components/contact/FormCard'
import React from 'react'

const page = () => {
  return (
    <div className="md:flex md:justify-center md:items-center px-10 md:px-20 md:h-screen bg-[url('/contact-image/contactbg.png')]">
      <div className='md:w-1/2'>
        <FormCard/>
      </div>
      <div className='md:w-1/2 text-white'>
        <div className='px-10 md:px-20'>
          <h1 className='text-3xl font-extrabold mb-10'>Talk to our experts
          </h1>
          <p className='leading-loose'>Have questions or feedback to share? Or do you wish to get listed on our vendor database? Feel free to message us while we respond within two business days.</p>
          <p className='my-8 md:my-8'>EventStan FZ LLC, ln5 Tech, Dubai, UAE</p>
          <p className='md:mb-8'>hello@eventstan.com</p>
          <p>+971566405353</p>
        </div>
      </div>
    </div>
  )
}

export default page
