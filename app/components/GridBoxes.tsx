import Image from "next/image";
import React from "react";

const GridBoxes = ({ snack }: { snack: { id: number; name: string; image: string } }) => {
  return (
    <div className="bg-linear-to-r from-blue-500 to-green-500 p-4 rounded-lg aspect-square w-full flex flex-col items-center justify-center overflow-hidden">
        <span className="text-white text-sm font-semibold mb-2 text-center line-clamp-2">{snack.name}</span>
      <Image 
        src={snack.image} 
        alt={snack.name} 
        width={150} 
        height={150}
        className="object-cover rounded"
      />
      
    </div>
  );
};

export default GridBoxes;
