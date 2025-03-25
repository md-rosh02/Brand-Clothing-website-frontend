import { useState } from 'react';
import React from 'react';
import Card_1 from '../assets/images/Card_1.jpg';
import Card_2 from '../assets/images/Card_2.jpg';
import Card_3 from '../assets/images/Card_3.jpg';
import Card_4 from '../assets/images/Card_4.jpg';
import Card_5 from '../assets/images/Card_5.jpg';
import Card_6 from '../assets/images/Card_6.jpg';
import Card_7 from '../assets/images/Card_7.jpg';
import { ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

const PopularCards = ({ addToCart }) => {
  const [addCartPopup, setAddCartPopup] = useState(false);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddCartPopup(true);
    setTimeout(() => setAddCartPopup(false), 3000);
  };

  const cardImages = [
    { id: 1, src: Card_1, category: "T-Shirt", price: 19.55 },
    { id: 2, src: Card_2, category: "New Orange Hoodie", price: 49.55 },
    { id: 3, src: Card_3, category: "Blue Hoodie", price: 39.55 },
    { id: 4, src: Card_4, category: "Black Hoodie", price: 49.55 },
    { id: 5, src: Card_5, category: "White T-Shirt", price: 29.55 },
    { id: 6, src: Card_6, category: "Jacket", price: 99.55 },
    { id: 7, src: Card_7, category: "Cream Hoodie", price: 45.59 },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.03,
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  // Animation variants for the ShoppingCart icon
  const cartIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.9,
      rotate: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Animation variants for the "Added to Cart" popup
  const popupVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8,
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: { 
      y: 50, 
      opacity: 0,
      scale: 0.8,
      transition: { 
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  return (
    <div className='min-h-[150vh] px-4'>
      <AnimatePresence>
        {addCartPopup && (
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-9999999'
          >
            <h1>Added to Cart 🤩</h1>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className='grid grid-cols-4 gap-8 py-12 max-w-7xl mx-auto'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {cardImages.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className='bg-white rounded-lg shadow-md overflow-hidden transition-shadow z-99999'
          >
            <img 
              className='h-[400px] w-full object-cover' 
              src={item.src} 
              alt={`${item.category} product`}
            />
            <div className='flex justify-between px-3 py-3 items-center'>
              <div>
                <h1 className='landerP text-sm font-medium text-gray-800'>{item.category}</h1>
                <h1 className='landerP text-gray-600'>${item.price.toFixed(2)}</h1>
              </div>
              <motion.button
                onClick={() => handleAddToCart(item)}
                className='p-2 text-gray-600 hover:text-orange-500 transition-colors'
                whileHover="hover"
                whileTap="tap"
                variants={cartIconVariants}
              >
                <ShoppingCart size={24} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PopularCards;