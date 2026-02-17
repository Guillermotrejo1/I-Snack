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
    { id: 1, name: "Fruit Cup", image: "/images/fruitCup.jpg", price: 6.50 },
    { id: 2, name: "Elote Chorreado", image: "/images/eloteChorreado.jpg", price: 7.50 },
    { id: 3, name: "Banana Split", image: "/images/bananaSplit.jpg", price: 8.50 },
    { id: 4, name: "Fresas Con Crema", image: "/images/fresasCremosas.jpg", price: 7.0 },
    { id: 5, name: "Takis Con Queso", image: "/images/cheeseTakis.jpg", price: 5.50 },
    { id: 6, name: "Mangonada", image: "/images/mangonada.jpg", price: 6.75 },
    { id: 7, name: "Mini Pancakes", image: "/images/miniPancakes.jpg", price: 6.00 },
    { id: 8, name: "Tacos Locos", image: "/images/tacosLocos.jpg", price: 6.50 },
    { id: 9, name: "Rusa", image: "/images/rusa.jpg", price: 5.75 },
    { id: 10, name: "Paletas De Nieve", image: "/images/paletas.jpg", price: 4.50 },
    { id: 11, name: "Pepino Preparado", image: "/images/pepino.jpg", price: 5.25 },
    { id: 12, name: "Nieve Preparada", image: "/images/nievePreparada.jpg", price: 5.50 },
  ];

  return (
    <section id="menu" className="py-20 px-6 bg-gray-50" data-aos="fade-in" data-aos-delay="200">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-4">
            Featured Favorites
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Try our most popular snacks, handpicked for their authentic flavor
            and quality.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid sm:grid-cols-1 grid-cols-2 gap-6 mb-16 md:grid-cols-2 max-w-3xl mx-auto">
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
        <div className="grid lg:grid-cols-4 gap-6 mb-12 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {snacks.map((snack) => (
            <GridBoxes key={snack.id} snack={snack} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-blue-600 to-green-500 rounded-2xl p-12 text-center text-white shadow-xl">
          <h4 className="text-3xl font-bold font-poppins mb-4">
            Visit Us Today
          </h4>
          <p className="text-lg mb-6 text-blue-100">
            Fresh snacks made daily. Stop by for a treat or call us with any
            questions.
          </p>
          <div className="mb-6 text-sm text-blue-100">
            <div>📍 706 S Austin St, Seguin TX</div>
            <div>🕒 Tue–Sun: 2:30pm – 8:30pm • Mon: Closed</div>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://maps.google.com/?q=706%20S%20Austin%20St%20Seguin%20TX"
              className="bg-white text-green-600 font-bold px-8 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
            <a
              href="tel:+18304062372"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-all"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
