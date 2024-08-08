import React from 'react'
import Button from './Button'
import Form from './Form'

const Hero = () => {
    return (
        <div className="md:flex md:flex-row md:mx-8">
            <div className='md:w-1/2 md:p-24 md:gap-y-8 p-2'>
                <h1 className='text-6xl font-bold text-wrap my-8 leading-relaxed'>
                    We <span className='bg-gradient-to-r from-[#f97a25]  to-[#8489b2] inline-block text-transparent bg-clip-text'>Facilitate</span>,
                    You Create</h1>
                <p className='text-2xl my-8'>Celebrate Life&apos;s Moments with Flawless Events - Our platform lets you seamlessly book decorators, caterers, venues, photographers, musicians, and more, ensuring a stress-free and delightful experience.</p>
                <Button input='Get Started' color='blue' />
            </div>
            <div className='md:w-1/2 bg-[#fff] shadow-2xl rounded-2xl p-2 m-2'>
                <h1 className='text-2xl text-center md:text-left md:text-4xl my-8'>Enter Details</h1>
                <Form />
            </div>
        </div>
    )
}

export default Hero
