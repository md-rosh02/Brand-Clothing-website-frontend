import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, ShoppingCart, Trash2, X } from "lucide-react"; // Added X icon
import { Link } from "react-router-dom";

// Placeholder images (replace with your actual image paths)
import img_1 from '../assets/images/img_1.jpg';
import img_2 from '../assets/images/img_2.jpg';
import img_3 from '../assets/images/img_3.jpg';
import img_4 from '../assets/images/img_4.jpg';
import img_5 from '../assets/images/img_5.jpg';

const NavBar = ({ cartItems, setCartItems, cartOpen, setCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Set default hovered category when menu opens
  useEffect(() => {
    if (isMenuOpen) {
      setHoveredCategory("Hoodies"); // Default to the first category
    } else {
      setHoveredCategory(null); // Clear when menu closes
    }
  }, [isMenuOpen]);

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const handleDelete = (cartId) => {
    setCartItems((prevItems) => {
      const itemToUpdate = prevItems.find((item) => item.cartId === cartId);
      if (itemToUpdate.quantity > 1) {
        return prevItems.map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevItems.filter((item) => item.cartId !== cartId);
    });
  };

  const cartVariants = {
    hidden: { x: 400 },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      height: 0,
      margin: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const menuVariants = {
    hidden: { y: -300, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      x: "100%", // Slide to the right on exit
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, rotate: -90 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      rotate: 90,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const categories = [
    { name: "Hoodies", path: "/hoodies", image: img_1 },
    { name: "Sweatshirts", path: "/sweatshirts", image: img_2 },
    { name: "Shirts", path: "/shirts", image: img_3 },
    { name: "T-Shirts", path: "/t-shirts", image: img_4 },
    { name: "Jackets", path: "/jackets", image: img_5 },
  ];

  return (
    <div>
      {/* Cart Section (Unchanged) */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            className="fixed right-0 w-96 h-[100vh] z-9999999999999 p-4 shadow-2xl"
            variants={cartVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="bg-gradient-to-b from-gray-100 to-white flex flex-col h-full rounded-lg overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h1 className="text-3xl text-gray-800 font-bold landerP tracking-tight">
                  Your Cart
                </h1>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeCart}
                  className="text-gray-600 text-2xl font-bold landerP hover:text-orange-500 transition-colors"
                >
                  ×
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.cartId}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="bg-gray-50 rounded-xl p-3 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          className="h-24 w-28 object-cover rounded-md"
                          src={item.src}
                          alt={item.category}
                        />
                        <div className="flex-1">
                          <h1 className="text-gray-800 font-semibold landerP">
                            {item.category}
                          </h1>
                          <p className="text-orange-500 font-bold text-lg">
                            ${item.price.toFixed(2)} × {item.quantity}
                          </p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDelete(item.cartId)}
                          className="text-red-500 hover:text-red-600 p-2"
                        >
                          <Trash2 size={20} />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-gray-800 font-semibold landerP">
                    Total:
                  </h2>
                  <span className="text-orange-500 font-bold text-xl landerP">
                    $
                    {cartItems
                      .reduce((sum, item) => sum + item.price * item.quantity, 0)
                      .toFixed(2)}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold landerP tracking-wide hover:bg-orange-600 transition-colors"
                  disabled={cartItems.length === 0}
                >
                  Checkout
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <div className="fixed text-xs flex flex-row items-center justify-between py-2 px-5 w-full z-9999999 bg-transparent">
        <div className="flex flex-row gap-7 items-center px-10 py-4">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-extrabold landerP text-gray-800">
              <span className="bg-orange-500 text-white text-2xl py-1.5 px-3 mx-2 rounded landerP">
                F
              </span>{" "}
              FASHION
            </h1>
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <X
                    size={28}
                    className="text-gray-800 hover:text-orange-500 transition-colors"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Menu
                    size={28}
                    className="text-gray-800 hover:text-orange-500 transition-colors"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
        <div className="text-xs flex flex-row gap-10 px-10 py-4">
          <Search
            size={24}
            className="text-gray-800 hover:text-orange-500 transition-colors"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openCart}
            className="text-gray-800 hover:text-orange-500 transition-colors"
          >
            <ShoppingCart size={24} />
          </motion.button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full bg-gray-100 shadow-lg z-9999998 h-[100vh]"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="mx-auto px-4 sm:px-6 lg:px-0 py-0 flex flex-col md:flex-row h-full">
              {/* Left Half: Categories and Contact Info */}
              <div className="w-full md:w-1/2 flex flex-col justify-between mt-35">
                <div className="flex flex-col gap-4 px-4 md:px-35">
                  {categories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      variants={menuItemVariants}
                      onMouseEnter={() => setHoveredCategory(category.name)}
                      onMouseLeave={() => setHoveredCategory(category.name)}
                    >
                      <Link
                        to={category.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center space-x-3 text-4xl md:text-6xl font-bold landerP text-gray-800 hover:text-orange-500 transition-colors"
                      >
                        <span className="text-sm text-gray-500">{`0${index + 1}.`}</span>
                        <span className="landerP leading-20 font-extralight">
                          {category.name.toUpperCase()}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-200 mt-6 pt-4 px-4">
                  <p className="text-sm text-gray-600 landerP">
                    E: hello@ffashion.com
                  </p>
                  <p className="text-sm text-gray-600 landerP">
                    T: +383 (0) 49 123-456
                  </p>
                </div>
              </div>

              {/* Right Half: Dynamic Image */}
              <div className="w-full md:w-1/2 h-96 md:h-full flex items-center justify-center mt-6 md:mt-0">
                <AnimatePresence mode="wait">
                  {hoveredCategory && (
                    <motion.img
                      key={hoveredCategory}
                      src={
                        categories.find((cat) => cat.name === hoveredCategory)
                          ?.image
                      }
                      alt={hoveredCategory}
                      className="w-full h-full object-cover grayscale"
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;