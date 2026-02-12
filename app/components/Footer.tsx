import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 text-white'>
      <div className='max-w-6xl mx-auto px-6 py-10'>
        <div className='grid gap-8 md:grid-cols-3'>
          <div>
            <h3 className='text-2xl font-semibold font-["Space_Grotesk"]'>I-Snack</h3>
            <p className='mt-2 text-sm text-white/90 max-w-xs'>
              Fresh, fast, and flavorful bites crafted for busy days and easy nights.
            </p>
          </div>

          <div>
            <h4 className='text-lg font-semibold'>Explore</h4>
            <ul className='mt-3 grid grid-cols-2 gap-2 text-sm'>
              <li className='hover:text-white/80'>Home</li>
              <li className='hover:text-white/80'>Menu</li>
              <li className='hover:text-white/80'>Contact</li>
              <li className='hover:text-white/80'>About</li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold'>Contact</h4>
            <ul className='mt-3 space-y-2 text-sm text-white/90'>
              <li>hello@isnack.com</li>
              <li>(830) 556-2862</li>
              <li>Mon-Closed</li>
              <li>Tue-Sun: 2:30pm - 8:30pm</li>
            </ul>
          </div>
        </div>

        <div className='mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/30 pt-6 text-xs text-white/80 md:flex-row'>
          <span>© 2026 I-Snack. All rights reserved.</span>
          <div className='flex gap-4'>
            <span className='hover:text-white'>Privacy</span>
            <span className='hover:text-white'>Terms</span>
            <span className='hover:text-white'>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer