import React from 'react'

const Form = () => {
    return (
        <form className=" bg-white ">
            <div className='grid grid-cols-2 gap-4 p-4'>
                <div className="mb-5">
                    <div className='bg-[#f0f0f0] rounded-2xl p-2'>
                        <label htmlFor="event" className='text-xs mx-1 block'>Event Type</label>
                        <select id="event" className="bg-[#f0f0f0] outline-none text-gray-900 font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none">
                            <option>Anniversary</option>
                            <option>Baby Shower</option>
                            <option>Birthday</option>
                            <option>Casual Hangout</option>
                            <option>Date</option>
                            <option>Proposal</option>
                        </select>
                    </div>
                </div>
                <div className="mb-5">
                    <div className='bg-[#f0f0f0] rounded-2xl p-2 '>
                        <label htmlFor="first_name" className="block text-xs  text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="first_name" className="bg-[#f0f0f0] outline-none text-gray-900 font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none" placeholder="John" required />
                    </div>
                </div>
                <div className="mb-5">
                    <div className='bg-[#f0f0f0] rounded-2xl p-2'>
                        <label htmlFor="countries" className='text-xs mx-1 block'>Location</label>
                        <select id="countries" className="bg-[#f0f0f0] border border-white text-gray-900 font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none outline-none">

                            <option>Dubai</option>
                            <option>Anniversary</option>
                            <option>Anniversary</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="bg-[#f0f0f0] rounded-2xl p-2">
                        <label htmlFor="birthday" className='text-xs mx-1 block'>Birthday:</label>
                        <input type="date" id="birthday" name="birthday" className='bg-[#f0f0f0] border border-white text-gray-900 font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none outline-none' />
                    </div>
                </div>
                <div className="mb-5">
                    <div className='bg-[#f0f0f0] rounded-2xl p-2'>
                        <label htmlFor="countries" className='text-xs mx-1 block'>Location</label>
                        <select id="countries" className="bg-[#f0f0f0] border border-white text-gray-900 font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none">

                            <option>Dubai</option>
                        </select>
                    </div>
                </div>
                <div className="mb-5">
                    <div className='bg-[#f0f0f0] rounded-2xl p-2'>
                        <label htmlFor="countries" className='text-xs mx-1 block'>No of Person</label>
                        <select id="countries" className="bg-[#f0f0f0] border border-white text-gray-900 font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none outline-none">

                            <option>1-25</option>
                            <option>25-50</option>
                            <option>50-100</option>
                            <option>100-200</option>
                        </select>
                    </div>
                </div>
                <div className="mb-5">
                    <div className='bg-[#f0f0f0] rounded-2xl p-2'>
                        <label htmlFor="appt" className='text-xs mx-1 block'>Select a time:</label>
                        <input type="time" id="appt" name="appt" className='bg-[#f0f0f0] border border-white text-gray-900 font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none outline-none' value="00:00" required />
                    </div>
                </div>
                <div className="mb-5">
                    <div className='bg-[#f0f0f0] rounded-2xl p-2'>
                        <label htmlFor="appt" className='text-xs mx-1 block'>Select a time:</label>
                        <input type="time" id="appt" name="appt" className='bg-[#f0f0f0] border border-white text-gray-900 font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none outline-none' value="00:00" required/>
                    </div>
                </div>

            </div>
            <div className='flex justify-center'>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </div>
        </form>

    )
}

export default Form
