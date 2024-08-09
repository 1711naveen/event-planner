import Button from '@/components/Button'
import Reason from '@/components/partner/Reason'
import { reasons } from '@/data'
import React from 'react'

const page = () => {
  return (
    <div className='mx-20 my-12 p-10 rounded-3xl bg-[#fffcf7] shadow-2xl'>
      <div>
        <span className='text-2xl font-bold pb-2 border-b-2 border-[#f97a25]'>A Partnership to Accelerate our Growth</span>
        <div className='text-sm mt-6' ><span className='text-[#f97a25]'>EventStan</span> is just where you need to be! With the digital era growing at such a rapid speed, we bring to the market a digital platform to showcase your services in the events industry.</div>
        <div className='my-4'>
          <Button input='Partner with us' color='brown' />
        </div>
        <p className='text-sm my-4 '>We’d love to have you on board!</p>
      </div>
      <div>
        <span className='text-2xl font-bold my-10 text-[#f97a25] border-b-2 pb-2 border-black'>Why Partner with EventStan ?</span>
        {
          reasons.map((text, i) => (
            <Reason key={i} ques={text.why} ans={text.answer} />
          ))
        }
      </div>
      <div className='mt-20 mb-12'>
        <h1 className='font-bold mb-4'>Who Can Join ?</h1>
        <p className='text-sm'>Any company or freelancer who provides a service in the events space is welcome, as long as it meets our listing guidelines. We would love to get to know you and your business better.</p>
      </div>
    </div>

  )
}

export default page
