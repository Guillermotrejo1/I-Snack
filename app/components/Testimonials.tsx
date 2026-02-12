import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Garcia",
      role: "Regular Customer",
      text: "I-Snack's elote chorreado is absolutely amazing! Fresh, authentic taste every time. Can't recommend it enough!",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Rodriguez",
      role: "Office Manager",
      text: "We order from I-Snack for our office events. The variety and quality are unmatched. Our team loves it!",
      rating: 5,
    },
    {
      id: 3,
      name: "Sofia Mendez",
      role: "Food Blogger",
      text: "Best authentic snacks in town. The preparation and ingredient quality really shines through. 10/10!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-poppins text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real reviews from real customers who love I-Snack
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 md:grid-cols-1 lg:grid-cols-2">
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
              <p className="text-gray-700 mb-6 italic">`{testimonial.text}</p>
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
