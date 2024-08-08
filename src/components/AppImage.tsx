import Image from 'next/image'
import React from 'react'
import Button from './Button'
import MacStore from './MacStore'
import AppStoreButton from './AppStoreButton'

const AppImage = () => {
  return (
    <div className=" md:flex md:mx-20 bg-[url('/appStore-bg.png')] bg-no-repeat bg-cover my-20">
      <div className='md:w-1/2'>
        <Image src='/phone.webp' alt='' width={1000} height={1000} />
      </div>
      <div className='md:w-1/2  my-auto'>
        <h1 className='text-3xl p-3 mx-2 mb-4 md:text-white'>Download the EventStan app</h1>
        <p className='mx-2 p-3 my-4 md:text-white'>Creating Timeless Memories - Explore our diverse selection of service providers and find the perfect fit for your event. From photographers capturing your cherished moments to choreographers adding flair to your dance floor, our platform ensures everything is tailored to reflect your unique style. landing page.</p>
        <div className='flex justify-around '>
          <AppStoreButton />
          <MacStore />
        </div>
      </div>
    </div>
  )
}

export default AppImage
