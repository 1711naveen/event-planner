import Image from 'next/image'
import React from 'react'
import Button from './Button'

const AppImage = () => {
  return (
    <div className="flex mx-20 bg-[url('/appStore-bg.png')] bg-no-repeat">
      <div className='w-1/2'>
        <Image src='/phone.webp' alt='' width={1000} height={1000} />
      </div>
      <div className='w-1/2  my-auto'>
        <h1 className='text-3xl mb-4'>Download the EventStan app</h1>
        <p className='my-4'>Creating Timeless Memories - Explore our diverse selection of service providers and find the perfect fit for your event. From photographers capturing your cherished moments to choreographers adding flair to your dance floor, our platform ensures everything is tailored to reflect your unique style. landing page.</p>
        <Button/>
        <Button/>
      </div>
    </div>
  )
}

export default AppImage
