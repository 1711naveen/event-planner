import React from 'react'
import { IoLogoGooglePlaystore } from "react-icons/io5";

const GooglePlayButton = () => {
    return (
        <div className='flex'>
            <div className='w-1/4'>
                <IoLogoGooglePlaystore />
            </div>
            <div className='w-3/4'>
                <p>GET IT ON</p>
                <p>Google Play</p>
            </div>
        </div>
    )
}

export default GooglePlayButton
