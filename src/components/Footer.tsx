'use client'
import React from 'react'
import AppStoreButton from './AppStoreButton'
import MacStore from './MacStore'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b]">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-[#fff]">Company</h2>
            <ul className="text-[#fff] dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">About</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Blog</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Vendor Portal</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-[#fff]">Company</h2>
            <ul className="text-[#fff] dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Contact Us</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">FAQs</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Partner with us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-[#fff]">Company</h2>
            <ul className="text-[#fff] dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Book an Event</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Hire a Professional</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Corporate Bookings</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-[#fff]">Company</h2>
            <ul className="text-[#fff] dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Terms & Conditions</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex justify-center items-center">
          <div className='flex-none text-white flex '>
            <FaFacebookF className='m-2' />
            <FaInstagram className='m-2' />
            <FaLinkedin className='m-2' />
            <IoLogoWhatsapp className='m-2' />
          </div>

          <div className='flex-none mx-4'>
            <AppStoreButton />
          </div>
          <div className='flex-none mx-4'>
            <MacStore />
          </div>
          <div className='flex-1 '>
            <p className='text-white text-right text-sm'>© Copyright 2024 EventStan, All Rights Reserved</p>
          </div>

        </div>
      </div>
    </footer >
  )
}

export default Footer
