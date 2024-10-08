'use client'
import React, { useState } from 'react'
import Button from './Button'
import Form from './Form'

const Hero = () => {
    const [state, setState] = useState('create')
    const handleClick1 = () => {
        setState('create')
    }
    const handleClick2 = () => {
        setState('hire')
    }
    const handleClick3 = () => {
        setState('booking')
    }
    return (
        <div className="md:flex md:flex-row md:mx-8 md:mb-20">
            <div className='md:w-1/2 md:p-24 md:gap-y-8 p-2'>
                <h1 className='text-5xl md:text-6xl font-bold text-wrap my-8 leading-normal md:leading-relaxed'>
                    We <span className='bg-gradient-to-r from-[#f97a25]  to-[#8489b2] inline-block text-transparent bg-clip-text'>Facilitate</span>,
                    You Create</h1>
                <p className='text-2xl my-8'>Celebrate Life&apos;s Moments with Flawless Events - Our platform lets you seamlessly book decorators, caterers, venues, photographers, musicians, and more, ensuring a stress-free and delightful experience.</p>
                <Button input='Get Started' color='brown' />
            </div>
            <div className='md:w-1/2 bg-[#fff] shadow-2xl rounded-2xl p-2 m-2 '>
                <div className='flex'>
                    <div className='w-1/3 md:text-center p-4 md:p-6 border-b-4 border-r-4 cursor-pointer' onClick={handleClick1}>
                        Create an Event
                    </div>
                    <div className='w-1/3 md:text-center p-4 md:p-6 border-b-4 border-r-4 cursor-pointer' onClick={handleClick2}>
                        Hire a Professional
                    </div>
                    <div className='w-1/3 md:text-center p-4 md:p-6 border-b-4 cursor-pointer' onClick={handleClick3}>
                        Corporate Bookings
                    </div>
                </div>
                <h1 className='text-2xl text-center md:text-left md:text-4xl my-8 md:mx-3'>Enter Details</h1>
                <div>
                    {state === 'create' && (<Form />)}
                    {state === 'hire' && <Form />}
                    {state === 'booking' && <Form />}
                </div>
            </div>
        </div>
    )
}

export default Hero
