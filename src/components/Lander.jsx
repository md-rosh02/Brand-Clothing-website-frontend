import React from 'react';
import { motion } from 'framer-motion';
import sideImg from '../assets/lander.jpg';
import { ArrowUpRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Lander = () => {

  const navigate = useNavigate();

  // Animation variants for the main heading
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for the subheading with arrow
  const subheadingVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 1,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for the orange box
  const boxVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className='relative h-[100vh] top-0 flex backG'>
      <div className='relative flex px-15 py-10 top-20 z-99999 flex-col gap-25'>
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          className='text-[7rem] font-extrabold landerP leading-32 tracking-normal cursor-default text-[#1a1a1a] z-999999'
        >
          DRESS <br />
          RIGHT. <span className='landerP text-gray-200'>MOVE FORWARD</span>
        </motion.h1>
        
        <motion.h1
        onClick={()=>{
          navigate('/products')
        }}
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
          className='px-5 font-extrabold landerP'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          VIEW SUMMER COLLECTION
          <motion.span
            whileHover={{ scale: 1.2, rotate: 45 }}
            style={{ 
              display: 'inline-block', 
              marginLeft: '8px',
              color: 'orange',
            }}
          >
            <ArrowUpRightIcon />
          </motion.span>
        </motion.h1>
      </div>

      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        className='relative top-158 right-115 rounded bg-orange-200 w-50 h-35 z-999999'
      />

      <motion.img
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className='absolute right-0 h-full w-[33vw] z-99999'
        src={sideImg}
        alt=""
      />
    </div>
  );
};

export default Lander;