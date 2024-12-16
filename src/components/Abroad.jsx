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
        "The United Kingdom (UK), consisting of England, Scotland, Wales, and Northern Ireland, is a developed country with a rich history and significant global influence. It has the world’s sixth-largest economy and is renowned for its academic reputation, with prestigious universities like Oxford and Cambridge. The UK is a multicultural society, welcoming international students, and offers a wide range of degrees, often completed in shorter timeframes compared to other countries. Students also benefit from rich cultural attractions, convenient travel connections to Europe, and access to the British Library. Studying in the UK improves English proficiency and ensures high academic standards through regular inspections and frameworks like the TEF and REF.",
      image: Uk,
    },
    {
      title: "Study in Japan",
      description: "Japan is an island country located in East Asia...",
      fullDescription:  "Japan, an island nation in East Asia, spans 6,852 islands with five main ones (Hokkaido, Honshu, Kyushu, Shikoku, and Okinawa) comprising most of its area. It is part of the Pacific Ring of Fire and is known for its mountainous and forested terrain, leaving limited agricultural land. Japan has a population of 126.2 million, with over 90% residing in urban areas, including Tokyo, the world's most populous metropolitan area. For Nepalese students, Japan offers world-class education, affordable living, a safe environment, cultural immersion, and employment opportunities. Students typically begin with a 1-2 year Japanese language course before pursuing academic studies. Studying in Japan allows 28 hours of part-time work weekly, and generous scholarships are available.",
      image: Japan,
    },
    {
      title: "Study in USA",
      description: "The USA has the world’s largest international student population...",
      fullDescription:  "The USA hosts the largest international student population globally, with over 1 million students, making up nearly 5% of its higher education enrollments. Renowned for its academic excellence, U.S. universities offer flexible and diverse education programs with strong theoretical and practical foundations, cutting-edge technology, and global recognition for their qualifications.Key benefits include research and teaching opportunities, robust support services for international students, and vibrant campus life with diverse activities. The U.S. education system emphasizes flexibility, allowing students to tailor programs to their career goals. A U.S. degree enhances global career prospects by fostering critical thinking, confidence, and cross-cultural skills.",
      image: Usa,
    },
    {
      title: "Study in Australia",
      description: "Australia is known for its top universities...",
      fullDescription:"Australia is a popular destination for international students, offering world-class education, diverse course options, and cutting-edge facilities. Australian universities are globally recognized, with programs emphasizing both theoretical knowledge and practical skills. The country also provides generous post-study work opportunities, allowing graduates to gain work experience and potentially secure permanent residency.With a multicultural environment, strong support systems for students, and affordable living, Australia creates a welcoming and enriching experience. Additionally, scholarships are available to help ease financial costs. Overall, Australia offers a safe, vibrant lifestyle with excellent career prospects for international students.",
      image: Aus,
    },
    {
      title: "Study in Canada",
      description: "Canada offers excellent education opportunities...",
      fullDescription: "Canada is a popular study destination known for its high-quality education, cultural diversity, and welcoming environment. Canadian universities offer top-tier programs in various fields, with a focus on research and innovation. Students can work while studying and are eligible for post-graduation work permits to gain valuable experience.Canada is a safe and multicultural country, providing extensive support services for international students. The cost of education is relatively affordable, with scholarships available. Overall, Canada offers a great quality of life, making it an ideal place for academic and personal growth.",
      image: Canada,
    },
    {
      title: "Study in South Korea",
      description: "South Korea offers excellent education opportunities...",
      fullDescription: "South Korea offers excellent education opportunities with world-class universities, cutting-edge technology, and a strong focus on innovation. It is a popular destination for international students, offering academic excellence, particularly in fields like engineering, business, and technology. Students have access to state-of-the-art facilities and research in areas like AI and robotics.South Korea provides a rich cultural experience, post-graduation work opportunities, affordable education, and various scholarships. The country is safe, vibrant, and offers a high quality of life, making it an ideal environment for both academic and cultural growth.",
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

