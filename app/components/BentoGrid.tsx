import React from 'react'
import GridBoxes from './GridBoxes'

const BentoGrid = () => {
  const snacks = [
    { id: 1, name: "Fruit Cup", image: "/images/fruitCup.jpg" },
    { id: 2, name: "Elote Chorreado", image: "/images/eloteChorreado.jpg" },
    { id: 3, name: "Banana Split", image: "/images/bananaSplit.jpg" },
    { id: 4, name: "Fresas Con Crema", image: "/images/fresasCremosas.jpg" },
    { id: 5, name: "Takis Con Queso", image: "/images/cheeseTakis.jpg" },
    { id: 6, name: "Mangonada", image: "/images/mangonada.jpg" },
    { id: 7, name: "Mini Pancakes", image: "/images/miniPancakes.jpg" },
    { id: 8, name: "Tacos Locos", image: "/images/tacosLocos.jpg" },
    { id: 9, name: "Rusa", image: "/images/rusa.jpg" },
    { id: 10, name: "Paletas De Nieve", image: "/images/paletas.jpg" },
    { id: 11, name: "Pepino Preparado", image: "/images/pepino.jpg" },
  ]

  return (
    <div className='p-8'>
      {/* Title */}
      <h1 className='text-4xl font-bold text-center mb-8'>Our Menu</h1>
      
      {/* Grid Container */}
      <div className='grid grid-cols-4 gap-4 max-w-6xl mx-auto'>
        {snacks.map((snack) => (
          <GridBoxes key={snack.id} snack={snack} />
        ))}
      </div>
    </div>
  )
}

export default BentoGrid
