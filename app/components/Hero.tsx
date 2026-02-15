import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-linear-to-br from-blue-600 via-teal-500 to-green-500 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl font-bold font-poppins mb-4">Welcome to I-Snack</h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Fresh, fast, and flavorful bites crafted for busy days and easy nights. 
          Discover authentic flavors that will transform your snacking experience.
        </p>
      </div>
    </section>
  );
};

export default Hero;
