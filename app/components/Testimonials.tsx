import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jezzie",
      role: "Regular Customer",
      text: "Delicious home-made ice cream! ❤️ Staff is very nice and friendly when ordering. Helped my kids with everything they wanted on their ice cream! Food looks better and hooked up then the pictures. Will definitely be coming back! Gansito split and elote chorreado YUM 😋 pricing is great and reasonable!",
      rating: 5,
    },
    {
      id: 2,
      name: "Emily Morales Avila",
      role: "Happy Customer",
      text: "Amazing customer service! 👌🏼 And filled with great recommendations. The food is so delicious and the location cute. You can totally tell the food and products are authentic. Give it a try!",
      rating: 5,
    },
    {
      id: 3,
      name: "Jenna Bowman",
      role: "Happy Customer",
      text: "We stopped here after a very long day and was so excited about some ice cream! Walking in you instantly fall in love with the atmosphere and friendly server! We got two kiddie and a two flavor cone, huge portions for a great price. They even have customer stamp reward cards like the coffee places do. Super friendly and personable staff and I’m so glad to have found such a sweet gem here in Seguin! This will be us and the kids new ice cream place, especially this summer. 10/10",
      rating: 5,
    },
    {
      id: 4,
      name: "Stephanie",
      role: "Happy Customer",
      text: "Best Banana Split ever!!! Very nice staff and large selection of ice cream with free samples.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-white" data-aos="fade-in" data-aos-delay="200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 whitespace-nowrap">
            Real reviews from real customers who love I-Snack
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div>
                <p className="font-bold font-poppins text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
