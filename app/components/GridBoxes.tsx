import Image from "next/image";
import React from "react";

const GridBoxes = ({ snack }: { snack: { id: number; name: string; image: string, price: number } }) => {
  return (
    <div className="bg-gray-50 rounded-xl aspect-square w-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
      <div className="h-1 w-full bg-linear-to-r from-blue-500 to-green-500" />
      <div className="p-4 w-full h-full flex flex-col items-center justify-center">
        <Image
          src={snack.image}
          alt={snack.name}
          width={480}
          height={480}
          loading="lazy"
          className="w-56 h-56 object-cover rounded-lg"
        />
        <span className="text-black text-sm font-bold text-center line-clamp-2 mt-2">{snack.name}</span>
        <span className="text-black text-sm font-semibold text-center line-clamp-2">
          ${snack.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default GridBoxes;
