import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Hero from '../images/Hero.png';
import { FaPhoneAlt } from 'react-icons/fa'; // Import phone icon
import { FaUserPlus } from 'react-icons/fa'; // Import register icon
import { SlideRight } from '../utility/animation';

const Home = () => {
  return (
    <div className=' sm: pl-7 pt-0 lg:pl-36 pr-11 '>
      <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px} relative'>
        {/* about abroad study */}
        <div className='flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0'>
          <div className='sm:ml-8  text-center md:text-left space-y-6 lg:ml-0'>
            <motion.p
            variants={SlideRight(0.4)}
            initial='hidden'
            animate="visible"
            className=' mt-0 sm:mt-0 text-orange-600 uppercase font-semibold lg:mt-2 text-2xl font-bold'>Success BCEC Abroad Study</motion.p>

            <motion.h1  variants={SlideRight(0.4)}
            initial='hidden'
            animate="visible"className='text-5xl font-semibold lg:text-6xl !leading-tight'>
              Find your <br/> Best <span className='text-orange-500'>Destination</span>
            </motion.h1>
            <motion.p variants={SlideRight(0.4)}
            initial='hidden'
            animate="visible">We help you to find your Best and successful destination.</motion.p>

            {/* button section */}
            <motion.div  variants={SlideRight(0.4)}
            initial='hidden'
            animate="visible" className='flex gap-4 lg:gap-8'>
              {/* Call Us button */}
              <a
                href='tel:9851033828'
                className='w-40 flex items-center bg-green-600 rounded-full font-semibold text-center hover:bg-green-700 text-black py-2 px-8 md:w-40'
              >
                <FaPhoneAlt className='mr-2' /> Call Us
              </a>
              {/* Register button */}
              <button className='flex items-center bg-yellow-300 rounded-full font-semibold text-center hover:bg-yellow-500 text-black py-2 px-8'>
                <FaUserPlus className='mr-2' /> Register
              </button>
            </motion.div>
          </div>
        </div>
        {/* about abroad study image */}
        <div className='flex justify-center items-center lg: ml-10'>
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            src={Hero}
            alt='hero'
            className='w-full md:w-[550px] xl:w-[700px]'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

