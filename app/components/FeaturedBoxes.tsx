import Image from 'next/image'
import React from 'react'

const FeaturedBoxes = ({ snack }: { snack: { id: number; name: string; image: string } }) => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-green-500 p-4 rounded-xl aspect-square w-full flex flex-col items-center justify-center overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <Image
            src={snack.image}
            alt={snack.name}
            width={150}
            height={150}
            className="w-32 h-32 object-cover rounded-lg mb-3"
          />
          <span className="text-white text-base font-semibold text-center line-clamp-2">{snack.name}</span>
        </div>
  )
}

export default FeaturedBoxes