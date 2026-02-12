import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-2 bg-gradient-to-r from-blue-500 to-green-500'>
        <Image 
        src="/logo.png" 
        alt='logo'
        width={800}
        height={500}
        className='max-w-50'
        />
        <ul className='flex gap-16 items-center mx-6'>
            <li className='font-semibold text-2xl text-white'>Home</li>
            <li className='font-semibold text-2xl text-white'>Menu</li>
            <li className='font-semibold text-2xl text-white'>Contact</li>
            <li className='font-semibold text-2xl text-white'>About</li>
        </ul>
    </div>
  )
}

export default Navbar