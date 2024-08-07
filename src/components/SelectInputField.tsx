import React from 'react'

const SelectInputField = () => {
    return (
        <div className='bg-[#f0f0f0] rounded-2xl p-2'>
            <label htmlFor="countries" className='text-xs mx-1 block'>Event Type</label>
            <select id="countries" className="bg-[#f0f0f0] outline-none text-gray-900 font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none">
                <option>Anniversary</option>
                <option>Anniversary</option>
                <option>Anniversary</option>
                <option>Anniversary</option>
            </select>
        </div>
    )
}

export default SelectInputField
