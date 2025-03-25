import React from 'react';
import { motion } from 'framer-motion';

const PromoteToLocal = () => {
  // Variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Variants for the button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 4px 15px rgba(255, 255, 255, 0.3)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      className='min-h-[110vh] bg-[#1a1a1a] w-full p-20 flex items-center z-999999'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className='flex w-full z-999999 hover:cursor-default gap-5'>
        <div className='w-2/3'>
          <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="none"
              stroke="lightgrey"
              d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
            />
            <circle r="5" fill="red">
              <animateMotion
                dur="10s"
                repeatCount="indefinite"
                path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
              />
            </circle>
          </svg>
        </div>
        <motion.div className='flex flex-col gap-10 py-5' variants={textVariants}>
          <motion.h1
            className='text-7xl landerP text-white leading-18 tracking-wide'
            variants={textVariants}
          >
            Find about the Sales at Our Local Shops
          </motion.h1>
          <motion.button
            className='bg-white px-3 py-5 rounded text-sm landerP w-74 text-[#1a1a1a] font-extrabold tracking-wider'
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            FIND SHOP NEAR YOU
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PromoteToLocal;