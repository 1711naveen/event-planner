import React from 'react'
import Button from './Button'
import Form from './Form'

const Hero = () => {
    return (
        <div className="md:flex md:flex-row md:mx-8">
            <div className='w-1/2 p-24 gap-y-8'>
                <h1 className='text-5xl font-bold text-wrap my-8'>
                    We <span className='bg-gradient-to-r from-[#f97a25]  to-[#8489b2] inline-block text-transparent bg-clip-text'>Facilitate</span>,
                    You Create</h1>
                <p className='text-2xl my-8'>Celebrate Life's Moments with Flawless Events - Our platform lets you seamlessly book decorators, caterers, venues, photographers, musicians, and more, ensuring a stress-free and delightful experience.</p>
                <Button input='Get Started' color='blue'/>
            </div>
            <div className='w-1/2 border-2 bg-[#fff]'>
                <h1 className='text-4xl my-8'>Enter Details</h1>
                <Form />
            </div>
        </div>
    )
}

export default Hero
