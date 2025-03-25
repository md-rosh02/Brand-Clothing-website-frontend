import React, { useState } from 'react';
import Card_1 from '../assets/images/Card_1.jpg';
import Card_2 from '../assets/images/Card_2.jpg';
import Card_3 from '../assets/images/Card_3.jpg';
import Card_4 from '../assets/images/Card_4.jpg';
import Card_5 from '../assets/images/Card_5.jpg';
import Card_6 from '../assets/images/Card_6.jpg';
import Card_7 from '../assets/images/Card_7.jpg';
import { ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [addCartPopup, setAddCartPopup] = useState(false);
  const [cart, setCart] = useState([]); // Added cart state

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]); // Add item to cart
    setAddCartPopup(true);
    setTimeout(() => setAddCartPopup(false), 3000);
  };

  const cardImages = [
    { id: 1, src: Card_1, category: "T-Shirts", price: 19.55 },
    { id: 2, src: Card_2, category: "Hoodies", price: 49.55 },
    { id: 3, src: Card_3, category: "Hoodies", price: 39.55 },
    { id: 4, src: Card_4, category: "Hoodies", price: 49.55 },
    { id: 5, src: Card_5, category: "T-Shirts", price: 29.55 },
    { id: 6, src: Card_6, category: "Jackets", price: 99.55 },
    { id: 7, src: Card_7, category: "Hoodies", price: 45.59 },
    { id: 8, src: Card_7, category: "Hoodies", price: 45.59 },
    { id: 9, src: Card_7, category: "Hoodies", price: 45.59 },
    { id: 10, src: Card_7, category: "Hoodies", price: 45.59 },
    { id: 11, src: Card_7, category: "Hoodies", price: 45.59 },
    { id: 12, src: Card_7, category: "Hoodies", price: 45.59 },
    { id: 13, src: Card_7, category: "Hoodies", price: 45.59 },
    { id: 14, src: Card_7, category: "Hoodies", price: 45.59 },
  ];

  // Filter cards based on selected option
  const filteredCards = selectedOption
    ? cardImages.filter(item => item.category.toLowerCase() === selectedOption)
    : cardImages;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    hover: {
      scale: 1.03,
      y: -10,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const cartIconVariants = {
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.2, ease: 'easeInOut' } },
    tap: { scale: 0.9, rotate: -10, transition: { duration: 0.2 } }
  };

  const popupVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { y: 50, opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: 'easeIn' } }
  };

  return (
    <div className="border-2 min-h-[100vh] p-20 flex items-center min-w-7xl bg-[#e1dedb] ">
      <div className="flex h-full items-center justify-center text-8xl landerP flex-col text-center w-full">
        <div className="flex h-full items-center justify-center text-8xl landerP flex-col text-center w-2/3 mt-35">
          <h1 className="landerP font-extrabold">PRODUCTS</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
            gravida odio sagittis, risus sodales nec. Sagittis nisi at
            venenatis, pretium. Risus neque a, egestas iaculis.
          </p>
        </div>
        <div className="w-full mt-6 flex justify-center">
          <div className="relative w-2/5">
            <select
              className="text-xl landerP w-full bg-white text-gray-800 p-3 rounded-lg shadow-md border border-gray-300 outline-none transition-all duration-300 hover:bg-gray-50 hover:shadow-lg cursor-pointer appearance-none"
              name="sort-by"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="" disabled>
                Sort by
              </option>
              <option value="hoodies">Hoodies</option>
              <option value="shirts">Shirts</option>
              <option value="t-shirts">T-Shirts</option>
              <option value="sweatshirts">SweatShirts</option>
              <option value="jackets">Jackets</option>
            </select>
            <span className="absolute right-4 top-2/3 transform pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Cards Section */}
        <div className="min-h-[150vh] px-4 w-full">
          <AnimatePresence>
            {addCartPopup && (
              <motion.div
                variants={popupVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 text-lg"
              >
                <h1>Added to Cart 🤩</h1>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="grid grid-cols-4 gap-8 py-12 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredCards.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow"
              >
                <img
                  className="h-[400px] w-full object-cover"
                  src={item.src}
                  alt={`${item.category} product`}
                />
                <div className="flex justify-between px-3 py-3 items-center text-xl">
                  <div>
                    <h1 className="landerP text-sm font-medium text-gray-800">{item.category}</h1>
                    <h1 className="landerP text-gray-600">${item.price.toFixed(2)}</h1>
                  </div>
                  <motion.button
                    onClick={() => handleAddToCart(item)}
                    className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
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
      </div>
    </div>
  );
};

export default Products;