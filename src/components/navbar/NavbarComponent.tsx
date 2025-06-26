// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavbarComponent() {
  return (
    <nav className="w-[90%] mx-auto relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2">
        <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
                <div className="font-bold text-xl text-gray-900">
                   <Link href="/">MyLogo</Link>
                </div>
            </div>
        </div>
        <div className="hidden md:flex md:space-x-10">
            <Link href="/service"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Service</Link>
            <Link href="/about"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">About</Link>
            <Link href="/blog"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Blog</Link>
            
        </div>
      
    </nav>
  )
}
