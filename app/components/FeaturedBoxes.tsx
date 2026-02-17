import Image from 'next/image'
import React from 'react'

const FeaturedBoxes = ({ snack }: { snack: { id: number; name: string; image: string } }) => {
  return (
    <div className="bg-gray-50 rounded-2xl aspect-square w-full shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
      <div className="h-1 w-full bg-linear-to-r from-blue-500 to-green-500" />
      <div className="p-2 md:p-4 w-full h-full flex flex-col items-center justify-center">
        <Image
          src={snack.image}
          alt={snack.name}
          width={480}
          height={480}
          loading="lazy"
          className="w-24 h-24 md:w-60 md:h-60 object-cover rounded-lg mb-2 md:mb-3"
        />
        <span className="text-black text-xs md:text-base font-semibold text-center line-clamp-2">{snack.name}</span>
      </div>
    </div>
  )
}

export default FeaturedBoxes