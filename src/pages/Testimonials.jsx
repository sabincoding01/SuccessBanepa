import React, { useState } from "react";
import deepak from '../images/feedback/dipak.jpg';
import Samir from '../images/feedback/samir.jpg';
import Kanchan from '../images/feedback/kanchan.jpg';
import Dipik from '../images/feedback/dipik.jpg';


const testimonials = [
  {
    id: 1,
    name: "Deepak Raut",
    message:
      "I got authentic information and I co-operate with it as well. Indeed, I was seeking a good consultancy for guiding, supporting, and presenting information about study in Japan.",
    image: deepak,
    rating: 5,
  },
  {
    id: 2,
    name: "Sameer Timalsina",
    message:
      "Success supported me to do everything nicely and I also did what they say. They guided me throughout my visa process.",
    image: Samir,
    rating: 5
  },
  {
    id: 3,
    name: "Dipik Dahal",
    message:
      "The best experience I ever had! Success Abroad Study helped me fulfill my dreams to study in Japan.",
    image: Dipik,
    rating: 5,
  },
  {
    id: 4,
    name: "Kanchan Timalsina",
    message:
      "Success Abroad Study specializes in processing visas for countries like Japan, the USA, the UK, South Korea, and Australia. The visa success rate for these destinations is exceptionally high.",
    image: Kanchan,
    rating: 5,
  },
  {
    id: 5,
    name: "Anzeela Bhattrai",
    message:
      "Success Abroad Study is the best choice I made. I highly recommend their consultancy services to anyone who dreams of studying abroad.",
    image: "https://via.placeholder.com/80",
    rating: 5
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 17.75l-5.197 3.041 1.4-5.978L3 9.354l6.077-.5L12 3.5l2.923 5.354 6.077.5-5.203 4.459 1.4 5.978z"
          />
        </svg>
      ))}
    </div>
  );
};

const TestimonialSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-950 mb-6">
        TESTIMONIALS
      </h2>
      <p className="text-center text-black font-bold mb-8">
        What our students say?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            </div>
            <StarRating rating={testimonial.rating} />
            <p className="text-gray-600 italic mt-2">{testimonial.message}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          {showAll ? "Show Less" : "View All Testimonials"}
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
