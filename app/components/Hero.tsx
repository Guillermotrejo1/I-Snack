import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-600 via-teal-500 to-green-500 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl font-bold font-poppins mb-4">Welcome to I-Snack</h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Fresh, fast, and flavorful bites crafted for busy days and easy nights. 
          Discover authentic flavors that will transform your snacking experience.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-teal-600 font-bold px-8 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg">
            Explore Menu
          </button>
          <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-teal-600 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
