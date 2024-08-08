import React from 'react'

const TrendingButton = ({name}:{name:string}) => {
    return (
        <div>
            <button type="button" className="text-black bg-[#f0cac1] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 border-2 border-[#f3762280] rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full">{name}</button>
        </div>
    )
}

export default TrendingButton
