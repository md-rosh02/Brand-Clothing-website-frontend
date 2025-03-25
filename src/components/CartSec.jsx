import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card_1 from '../assets/images/Card_1.jpg';
import { Trash2 } from 'lucide-react'; // Importing the Trash icon

const CartSec = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'New T-Shirt', price: 499.99, image: Card_1 }
  ]);

  // Animation variants for the cart container
  const cartVariants = {
    hidden: { x: 320 },
    visible: { 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  // Animation variants for cart items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      x: -100,
      height: 0,
      margin: 0,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <motion.div
      className='fixed right-0 w-96 h-[100vh] z-999999999 p-4 shadow-2xl'
      variants={cartVariants}
      initial="hidden"
      animate="visible"
    >
      <div className='bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col h-full rounded-lg overflow-hidden'>
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b border-gray-700'>
          <h1 className='text-3xl text-white font-bold landerP tracking-tight'>
            Your Cart
          </h1>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className='text-pink-700 text-2xl font-bold landerP hover:text-orange-500 transition-colors'
          >
            ×
          </motion.button>
        </div>

        {/* Cart Items */}
        <div className='flex-1 overflow-y-auto p-4 space-y-4'>
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className='bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-shadow'
              >
                <div className='flex items-center gap-3'>
                  <img 
                    className='h-24 w-28 object-cover rounded-md' 
                    src={item.image} 
                    alt={item.name} 
                  />
                  <div className='flex-1'>
                    <h1 className='text-gray-800 font-semibold landerP'>
                      {item.name}
                    </h1>
                    <p className='text-orange-600 font-bold text-lg'>
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDelete(item.id)}
                    className='text-red-500 hover:text-red-600 p-2'
                  >
                    <Trash2 size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className='p-6 border-t border-gray-700 bg-gray-800'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-white font-semibold landerP'>
              Total:
            </h2>
            <span className='text-orange-500 font-bold text-xl landerP'>
              ${items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='w-full bg-orange-500 text-white py-3 rounded-lg font-bold landerP tracking-wide hover:bg-orange-600 transition-colors'
            disabled={items.length === 0}
          >
            Checkout
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartSec;