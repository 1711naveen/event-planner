'use client'
import { brandImage } from '@/data';
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';

const BrandCarousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container md:mb-32">
            <div className='w-4/5 mx-auto my-20 '>
                <Slider {...settings}>
                    {
                        brandImage.map((temp, i) => (
                            <div key={i} className='flex justify-center'>
                                <Image src={temp.img} alt="" height={100} width={100} />
                            </div>
                        ))
                    }
                </Slider>
                <h1 className='text-center mt-8 font-light'>Trusted by more than 200 vendors and 500 service professionals across the UAE. <span className='font-bold'> Join us as a Vendor</span>, today.</h1>
            </div>
        </div>
    )
}

export default BrandCarousel
