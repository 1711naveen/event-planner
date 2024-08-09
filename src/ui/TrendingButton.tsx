import Link from 'next/link'
import React from 'react'

const TrendingButton = ({ name, to }: { name: string, to: string }) => {
    return (
        <Link href={to}>
            <button type="button" className="text-black bg-[#f0cac1]  border-2 border-[#f3762280] rounded-md text-sm px-5 py-2.5 me-2 mb-2 w-full">{name}</button>
        </Link>
    )
}

export default TrendingButton
