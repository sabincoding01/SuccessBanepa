import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AcademicCapIcon } from '@heroicons/react/20/solid'; // v2 path


const WhyUs = () => {
  return (
    <div className="mt-10 lg:mt-6 px-4">
      {/* Header Section */}
      <div className="text-center">
        <motion.h1
          className="text-blue-950 font-bold text-4xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Why Us:
        </motion.h1>
        <motion.h3
          className="sm:text-xl pt-2 font-semibold lg:text-2xl "
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          "Best Abroad Consulting"
        </motion.h3>
      </div>

      {/* Graduation Cap Icon */}
      <div className="flex justify-center mt-6">
        <AcademicCapIcon className="h-12 w-12 text-blue-950" />
      </div>

      {/* Content Section */}
      <motion.div
        className="mt-6 bg-gray-100 p-6 rounded-lg shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          Since our establishment in <span className="font-semibold text-blue-900">2013</span>, our head office has been dedicated to providing exceptional services to students striving for their dreams. In{' '}
          <span className="font-semibold text-blue-900">2018</span>, we expanded our reach by opening a branch in Banepa under the name{' '}
          <span className="font-bold text-blue-900">Success Bcec Abroad Study</span>, further strengthening our ability to guide students from various regions. With over a decade of experience, we have developed a reputation for excellence and reliability.
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Our team comprises highly skilled professionals who bring unparalleled expertise to the table, ensuring that every step of your journey is handled with precision and care. Our unique visa processing methods, designed to meet individual needs, have resulted in an impressive visa success rate, setting us apart in the industry.
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Moreover, we provide unwavering support to students at every stage, from assisting with complex documentation to solving unexpected challenges. With our own college in Japan, we ensure students have direct access to quality education and international opportunities. Partner with us for a trusted and rewarding journey toward your dreams.
        </p>

        {/* Read More Button */}
        <div className="text-center mt-6">
          <Link to="/about">
            <motion.button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Read More
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Decorative Animation */}
      <motion.div
        className="mt-8 flex justify-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.div
          className="w-16 h-16 bg-blue-500 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default WhyUs;
