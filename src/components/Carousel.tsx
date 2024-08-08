'use client'
import { data } from '@/data';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className='w-4/5 mx-auto my-20'>
            <Slider {...settings}>
                {
                    data.map((d, i) => (
                        <div key={i} >
                            <img src={d.img} className='rounded-xl px-2'/>
                        </div>
                    )
                    )
                }

            </Slider>
        </div>
    )
}

export default Carousel
