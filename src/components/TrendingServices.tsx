import { trendingServices } from '@/data'
import TrendingButton from '@/ui/TrendingButton'
import React from 'react'

const TrendingServices = () => {
  return (
    <div className='mx-8 md:mx-20'>
      <h1 className='text-4xl my-8'>Trending services</h1>
      <div className='grid grid-cols-2 gap-4 md:flex mb-20 '>
        {
            trendingServices.map((service,i)=>{
                return <TrendingButton key={i} name={service.name} to={service.to}/>
            })
        }
      </div>
    </div>
  )
}

export default TrendingServices
