import React from "react";
import GridBoxes from "./GridBoxes";
import FeaturedBoxes from "./FeaturedBoxes";

const BentoGrid = () => {
  const featured = [
    { id: 1, name: "Fruit Cup", image: "/images/fruitCup.jpg" },
    { id: 2, name: "Elote Chorreado", image: "/images/eloteChorreado.jpg" },
    { id: 3, name: "Banana Split", image: "/images/bananaSplit.jpg" },
    { id: 4, name: "Fresas Con Crema", image: "/images/fresasCremosas.jpg" },
  ];

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
    { id: 12, name: "Nieve Preparada", image: "/images/nievePreparada.jpg" },
  ];

  return (
    <section id="menu" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-poppins text-gray-900 mb-4">
            Featured Favorites
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Try our most popular snacks, handpicked for their authentic flavor and quality.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-2 gap-6 mb-16 md:grid-cols-2 sm:grid-cols-1 max-w-3xl mx-auto">
          {featured.map((snack) => (
            <FeaturedBoxes key={snack.id} snack={snack} />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-12 max-w-md mx-auto"></div>

        {/* Full Menu Title */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold font-poppins text-gray-900">
            Our Complete Menu
          </h3>
        </div>

        {/* Full Menu Grid */}
        <div className="grid grid-cols-4 gap-6 mb-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {snacks.map((snack) => (
            <GridBoxes key={snack.id} snack={snack} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-12 text-center text-white shadow-xl">
          <h4 className="text-3xl font-bold font-poppins mb-4">Ready to Order?</h4>
          <p className="text-lg mb-6 text-blue-100">
            Visit us today or call to place your order. Fresh snacks ready when you are!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-green-600 font-bold px-8 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg">
              Order Now
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
