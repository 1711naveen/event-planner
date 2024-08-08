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
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container md:mb-32">
            <div className='md:w-4/5 mx-auto md:my-20 my-12'>
                <Slider {...settings}>
                    {
                        brandImage.map((temp, i) => (
                            <div key={i} className='flex justify-center'>
                                <Image src={temp.img} alt="" height={100} width={100} />
                            </div>
                        ))
                    }
                </Slider>
                <h1 className='text-center mt-8 font-light my-8'>Trusted by more than 200 vendors and 500 service professionals across the UAE. <span className='font-bold'> Join us as a Vendor</span>, today.</h1>
            </div>
        </div>
    )
}

export default BrandCarousel
