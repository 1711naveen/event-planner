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
        cssEase: "linear"
    };
    return (
        <div className='md:mx-20'>
            <h1 className='text-center text-3xl  md:my-28 line'>Don’t just take our word for it! See what our customers have to say!</h1>
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
