'use client'
import React from 'react'
import AppStoreButton from './AppStoreButton'
import MacStore from './MacStore'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b]">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-[#fff]">Company</h2>
            <ul className="text-[#fff] dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className=" hover:underline">About</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">Blog</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">Vendor Portal</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-[#fff]">More</h2>
            <ul className="text-[#fff] dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">Contact Us</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">FAQs</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">Partner with us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-[#fff]">Company</h2>
            <ul className="text-[#fff] dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">Book an Event</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">Hire a Professional</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">Corporate Bookings</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-[#fff]">Company</h2>
            <ul className="text-[#fff] dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">Terms & Conditions</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="md:flex md:justify-center md:items-center">
          <div className='md:flex-none mx-2 text-white flex '>
            <FaFacebookF className='m-2' />
            <FaInstagram className='m-2' />
            <FaLinkedin className='m-2' />
            <IoLogoWhatsapp className='m-2' />
          </div>

          <div className='md:flex-none mx-4'>
            <AppStoreButton />
          </div>
          <div className='md:flex-none mx-4'>
            <MacStore />
          </div>
          <div className='md:flex-1 '>
            <p className='text-white text-center mt-4 md:text-right text-sm'>© Copyright 2024 EventStan, All Rights Reserved</p>
          </div>

        </div>
      </div>
    </footer >
  )
}

export default Footer
