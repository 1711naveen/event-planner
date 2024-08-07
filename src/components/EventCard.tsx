
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const EventCard = ({
    name,
    img,
}: {
    name: string;
    img: string;
}) => {
    return (
        <Link href='/' className=" bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 px-4 py-4 md:w-48">
            <div className='flex justify-center items-center'>
                <Image className="rounded-lg" src={img} alt="" height={93} width={100} />
            </div>
            <div className="">
                <h5 className="text-center tracking-tight text-gray-900 dark:text-white ">{name}</h5>
            </div>
        </Link>

    )
}

export default EventCard
