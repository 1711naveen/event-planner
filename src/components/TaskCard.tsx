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
        <Link href='/' className=" bg-[#efeff5] border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2 px-4 w-32 h-20">
            <div className='flex justify-center items-center'>
                <Image className="rounded-t-lg" src={img} alt="" height={32} width={32} />
            </div>
            <div className="p-2">
                <h5 className="text-center text-xs tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </div>
        </Link>
    )
}

export default TaskCard
