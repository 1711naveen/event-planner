'use client'
import { data } from '@/data';
import React, { Suspense } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSkeletom from './ImageSkeletom';
import Image from 'next/image';


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='md:w-4/5 mx-auto md:my-20'>
            <Suspense fallback={<ImageSkeletom />}>
                <Slider {...settings}>
                    {
                        data.map((d, i) => (
                            <div key={i} >
                                <Image src={d.img} alt='to be changed' className='rounded-xl px-2' height={300} width={390} />
                            </div>
                        ))
                    }
                </Slider>
            </Suspense>
        </div>
    )
}

export default Carousel
