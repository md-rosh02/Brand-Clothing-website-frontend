import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom';


function PopularProduct() {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();

  // Slow down the movement by increasing the range
  const newestX = useTransform(scrollYProgress, [0, 1], ['-50vw', '0vw']);
  const productX = useTransform(scrollYProgress, [0, 1], ['44vw', '0vw']);

  return (
    <div className="h-[74vh] w-full text-black mt-15">
      <div className=" top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden ">
        <div className="relative w-full mt-10 z-99999">
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="text-7xl md:text-9xl font-bold text-center z-99999 landerP"
            style={{ x: newestX }}
          >
            SEASON'S
          </motion.div>
          
          <motion.div
            className="text-7xl md:text-9xl font-bold text-center text-white landerP"
            style={{ x: productX }}
          >
            TRENDING
          </motion.div>
        </div>
        <div className='flex w-full px-30 py-10 z-99999'>
          <div className='flex w-2/2'>
            <h1 className='h-full text-xl'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta laborum quos reprehenderit totam. Eum neque quos repellat repellendus excepturi, nihil vero ea soluta qui tenetur labore, voluptas dolore velit aliquid?Lorem.
            </h1>

          </div>
          <div className='flex w-full justify-end'>

            <h1
            onClick={()=>{
              navigate('/products')
            }}
            className='landerP  h-full'>VIEW ALL
            <span className='relative top-1.5' style={{ 
                display: 'inline-block', 
                marginLeft: '8px',
                color:'orange',
                scale:'1'
            }}>
                <ArrowUpRightIcon/>
            </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularProduct;
