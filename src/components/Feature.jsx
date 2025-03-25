import React from 'react';
import { motion, useInView } from 'framer-motion';
import img from '../assets/feature.jpg';

// Animation variants
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

const titleVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.6,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
  hover: {
    x: 10,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: 'easeOut',
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    opacity: 0.95,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

const Feature = () => {
  const features = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor netus mauris velit vulputate lectus aliquam. Faucibus posuere at euismod turpis feugiat porta vestibulum.',
    },
  ];

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="relative h-screen mt-10" ref={ref}>
      <motion.div
        className="absolute inset-0 flex flex-col px-28 py-16 z-999999"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h1
          className="text-5xl font-bold text-gray-900 landerP"
          variants={titleVariants}
        >
          Features of Our Products
        </motion.h1>

        <motion.div
          className="flex items-center w-full pt-10 h-full"
          variants={containerVariants}
        >
          <div className="flex w-full h-full">
            <motion.div
              className="w-1/2 bg-[#1a1a1a] flex flex-col gap-10 p-10 overflow-y-auto h-full"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-8"
                  variants={featureVariants}
                  whileHover="hover"
                >
                  <motion.h2
                    className="text-white text-3xl leading-tight"
                    variants={textVariants}
                    whileHover="hover"
                  >
                    {feature.title}
                  </motion.h2>
                  <motion.p
                    className="text-zinc-400 text-lg mt-8"
                    variants={descriptionVariants}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="w-1/2 h-full overflow-hidden"
              variants={imageVariants}
              whileHover="hover"
            >
              <motion.img
                className="w-full h-full object-cover"
                src={img}
                alt="Product feature illustration"
                variants={imageVariants}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Feature;