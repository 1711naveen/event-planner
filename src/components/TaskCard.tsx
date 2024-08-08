import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const TaskCard = ({
    name,
    img,
}: {
    name: string;
    img: string;
}) => {
    return (
        <Link href='/' className=" bg-[#efeff5]  rounded-2xl md:rounded-3xl shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:px-4 md:w-32 md:h-20">
            <div className='flex justify-center items-center'>
                <Image className="rounded-t-lg mt-2" src={img} alt="" height={32} width={32} />
            </div>
            <div className="p-2">
                <h5 className="text-center text-xs tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </div>
        </Link>
    )
}

export default TaskCard
