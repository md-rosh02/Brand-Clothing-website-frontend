import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img_1 from '../assets/images/img_1.jpg';
import img_2 from '../assets/images/img_2.jpg';
import img_3 from '../assets/images/img_3.jpg';
import img_4 from '../assets/images/img_4.jpg';
import img_5 from '../assets/images/img_5.jpg';

const Gallery = () => {
  const { scrollY } = useScroll();

  // Extended scroll range for even-indexed cards
  const evenY = useTransform(
    scrollY,
    [0, 600, 1200],
    [-100, 100, 0]
  );

  // Extended scroll range for odd-indexed cards
  const oddY = useTransform(
    scrollY,
    [0, 600, 1200],
    [100, 0, 80]
  );

  const images = [
    { src: img_1, category: 'Jackets' },
    { src: img_2, category: 'T-Shirts' },
    { src: img_3, category: 'Shirts' },
    { src: img_4, category: 'SweatShirts' },
    { src: img_5, category: 'Hoodies' },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Image animation variants
  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      filter: 'grayscale(100%) brightness(50%)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'grayscale(100%) brightness(50%)',
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.05,
      filter: 'grayscale(0%) brightness(60%)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { 
      opacity: 0,
      x: 20,
      rotate: -90
    },
    visible: {
      opacity: 0.7,
      x: 0,
      rotate: -90,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    hover: {
      opacity: 1,
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      className='relative grid grid-cols-5 gap-2 h-[100vh] mx-10 mt-50 mb-30'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {images.map(({ src, category }, index) => (
        <div key={index} className='h-full w-full relative overflow-visible z-99999'>
          <motion.div
            style={{
              y: index % 2 === 0 ? evenY : oddY,
            }}
            className='h-full w-full relative'
          >
            <motion.img
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className='h-full w-full object-cover rounded'
              src={src}
              alt={category}
            />
            <motion.span
              variants={textVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className='absolute right-18 top-2 text-white text-5xl font-semibold whitespace-nowrap origin-top-right bg-black bg-opacity-50 px-4 py-2 rounded z-10'
            >
              {category}
            </motion.span>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default Gallery;