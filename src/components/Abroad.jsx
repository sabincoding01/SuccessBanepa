import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Uk from "../images/Uk.jpeg";
import Japan from "../images/japan.jpeg";
import Aus from "../images/Aus.jpeg";
import Canada from "../images/Canada.jpeg";
import Usa from "../images/Usa.jpeg";
import SKorea from "../images/S.Korea.jpeg";

const AbroadStudy = () => {
  const countries = [
    {
      title: "Study in UK",
      description: "The United Kingdom of Great Britain and Northern Ireland...",
      fullDescription:
        "The United Kingdom (UK), consisting of England, Scotland, Wales, and Northern Ireland...",
      image: Uk,
    },
    {
      title: "Study in Japan",
      description: "Japan is an island country located in East Asia...",
      fullDescription: "Japan, an island nation in East Asia, spans 6,852 islands...",
      image: Japan,
    },
    {
      title: "Study in USA",
      description: "The USA has the world’s largest international student population...",
      fullDescription: "The USA hosts the largest international student population globally...",
      image: Usa,
    },
    {
      title: "Study in Australia",
      description: "Australia is known for its top universities...",
      fullDescription: "Australia is a popular destination for international students...",
      image: Aus,
    },
    {
      title: "Study in Canada",
      description: "Canada offers excellent education opportunities...",
      fullDescription: "Canada is a popular study destination known for its high-quality education...",
      image: Canada,
    },
    {
      title: "Study in South Korea",
      description: "South Korea offers excellent education opportunities...",
      fullDescription: "South Korea offers excellent education opportunities with top-ranked universities...",
      image: SKorea,
    },
  ];

  const [expanded, setExpanded] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const cardWidth = current.firstChild.offsetWidth; // Get the card width dynamically
    if (direction === "left") {
      current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="w-full sm:max-w-7xl mx-auto sm:p-4 p-0">
      <h2 className="text-center text-4xl font-bold text-blue-950 mb-4">Study Abroad</h2>
      <p className="text-center font-semibold mb-6">Information guide for abroad study</p>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-10 hidden sm:block"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll no-scrollbar snap-x snap-mandatory p-0 sm:px-4 space-x-2 sm:space-x-4"
        >
          {countries.map((country, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-[90%] sm:w-80 lg:w-96 bg-slate-100 rounded-lg shadow-md transition-all duration-300"
            >
              <img
                src={country.image}
                alt={country.title}
                className="w-full h-48 object-cover rounded-t-lg transition-transform transform "
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{country.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {expanded === index ? country.fullDescription : country.description}
                </p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-orange-500 font-semibold hover:underline"
                >
                  {expanded === index ? "Read Less ←" : "See More →"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-10 hidden sm:block"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default AbroadStudy;
