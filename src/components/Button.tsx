import React from 'react'


const Button = ({ input, color }: { input: string, color: 'brown' | 'orange' }) => {
    const colorVariants: Record<'brown' | 'orange', string> = {
        brown: 'bg-[#2b2b2b]',
        orange: 'bg-[#f97a25]',
    };
    return (
        <button type="button" className={`${colorVariants[color]} text-white  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}>{input}</button>
    )
}

export default Button
