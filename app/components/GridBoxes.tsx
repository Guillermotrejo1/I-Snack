import Image from "next/image";
import React from "react";

const GridBoxes = ({ snack }: { snack: { id: number; name: string; image: string } }) => {
  return (
    <div className="bg-gray-50 rounded-xl aspect-square w-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-green-500" />
      <div className="p-4 w-full h-full flex flex-col items-center justify-center cursor-pointer">
        <Image
          src={snack.image}
          alt={snack.name}
          width={480}
          height={480}
          className="w-60 h-60 object-cover rounded-lg mb-3"
        />
        <span className="text-black text-base font-semibold text-center line-clamp-2">{snack.name}</span>
      </div>
    </div>
  );
};

export default GridBoxes;
