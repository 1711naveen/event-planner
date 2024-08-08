'use client'
import { profileData } from '@/data';
import TestimonialCard from '@/ui/TestimonialCard';
import React from 'react'
import Slider from 'react-slick';

const Testimonials = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1.7,
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
        <div className='md:mx-20'>
            <h1 className='md:text-center text-3xl md:my-28 mx-4'>Don’t just take our word for it! See what our customers have to say!</h1>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        profileData.map((profile, i) => (

                            <TestimonialCard key={i} name={profile.name} location={profile.location} data={profile.data} />

                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials
