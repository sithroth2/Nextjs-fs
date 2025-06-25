// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavbarComponent() {
  return (
    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2">
    <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div className="flex items-center justify-between w-full md:w-auto">
            <div className="-mr-2 flex items-center md:hidden">
              ll
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
        <Link href="/"
            className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Home</Link>
    </div>
    <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        <span className="inline-flex">
            <a href="/login" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out">
              Login
            </a>
        </span>
        <span className="inline-flex rounded-md shadow ml-2">
            <a href="/signup" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out">
               Get started
            </a>
        </span>
    </div>
</nav>
  )
}
