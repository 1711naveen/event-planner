'use client'
import React from 'react'
import Carousel from './Carousel';

const CarouselWrapper = () => {
  const slides = ['/public/CarouselImage.webp','/public/CarouselImage.webp','/public/CarouselImage.webp'];
  return (
    <div className="relative">
      <div className="w-full">
        <Carousel />
      </div>
    </div>
  )
}

export default CarouselWrapper
