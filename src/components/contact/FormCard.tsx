import React from 'react'

const FormCard = () => {
    return (
        <div className='border-2 md:p-14 w-4/5 bg-[#9397bc] rounded-3xl'>
            <h1 className='text-xl text-white'>Get in touch today, through the form below</h1>
            <div>
                <div className="mb-5">
                    <div className='bg-[#f0f0f0] dark:bg-gray-700 dark:text-white rounded-2xl p-2 '>
                        <label htmlFor="first_name" className="block text-xs  text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="first_name" className="bg-[#f0f0f0] outline-none text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none" placeholder="John" required />
                    </div>
                </div>
                <div className="mb-5">
                    <div className='bg-[#f0f0f0] dark:bg-gray-700 dark:text-white rounded-2xl p-2 '>
                        <label htmlFor="first_name" className="block text-xs  text-gray-900 dark:text-white">Mobile Number</label>
                        <input type="number" id="first_name" className="bg-[#f0f0f0] outline-none text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none" placeholder="Do not add +91" required />
                    </div>
                </div>
                <div className="mb-5">
                    <div className='bg-[#f0f0f0] dark:bg-gray-700 dark:text-white rounded-2xl p-2 '>
                        <label htmlFor="first_name" className="block text-xs  text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="first_name" className="bg-[#f0f0f0] outline-none text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none" placeholder="John@gmail.com" required />
                    </div>
                </div>
                <div className="mb-5">
                    <div className='bg-[#f0f0f0] dark:bg-gray-700 dark:text-white rounded-2xl p-2 '>
                        <label htmlFor="first_name" className="block text-xs  text-gray-900 dark:text-white">Type your Message</label>
                        <textarea id="first_name" className="bg-[#f0f0f0] outline-none text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none" required />
                    </div>
                </div>
                <div className="mb-5">
                    <button className='bg-[#424242] hover:bg-[#393939] text-white rounded-lg py-2 text-center w-full'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default FormCard
