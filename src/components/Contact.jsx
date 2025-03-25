import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import con_1 from '../assets/images/con_1.jpg';
import con_2 from '../assets/images/con_2.jpg';
import con_3 from '../assets/images/con_3.jpg';
import con_4 from '../assets/images/con_4.jpg';
import con_5 from '../assets/images/con_5.jpg';
import { Mail, MapPin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import contact from '../assets/contact.jpg';

const Contact = (props) => {
  const [sub, setSub] = useState(false);
  const [email, setEmail] = useState('');

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const con1Transform = {
    x: useTransform(scrollYProgress, [0, 1], [150, 0]),
    y: useTransform(scrollYProgress, [0, 1], [150, 0]),
  };
  const con2Transform = {
    x: useTransform(scrollYProgress, [0, 1], [-150, 0]),
    y: useTransform(scrollYProgress, [0, 1], [-150, 0]),
  };
  const con3Transform = {
    x: useTransform(scrollYProgress, [0, 1], [150, 0]),
    y: useTransform(scrollYProgress, [0, 1], [150, 0]),
  };
  const con4Transform = {
    x: useTransform(scrollYProgress, [0, 1], [-150, 0]),
    y: useTransform(scrollYProgress, [0, 1], [150, 0]),
  };
  const con5Transform = {
    x: useTransform(scrollYProgress, [0, 1], [150, 0]),
    y: useTransform(scrollYProgress, [0, 1], [-150, 0]),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSub(true);
      setEmail('');
      setTimeout(() => setSub(false), 3000);
    }
  };

  return (
    <div className='z-99999999'>
      <div
        ref={containerRef}
        className="min-h-[230vh] bg-[#1a1a1a] text-white text-center flex flex-col z-9999999999"
        {...props} // Spread props to include onMouseEnter and onMouseLeave
      >
        {sub && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className='fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-99999999999'
          >
            <h1 className='z-9999999999999'>Subscribed 🤩</h1>
          </motion.div>
        )}
        <div className="flex flex-col gap-40 w-full z-999999">
          <h1 className="mt-50 text-4xl landerP leading-11 z-9999999">
            Put your hands first at our <br />premium and limited products
          </h1>

          <div className="z-999999999 w-full h-full flex flex-col items-center gap-5">
            <h1 className="landerP">Subscribe to our newsletter.</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-1/2 items-center justify-center gap-5">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border-2 w-160 p-5 landerP rounded placeholder:text-center text-center"
                type="email"
                placeholder="E-mail"
              />
              <button 
                type="submit"
                className="w-160 p-5 landerP rounded tracking-wide bg-white text-black"
              >
                <div className="flex items-center justify-center gap-5">
                  <Mail />
                  <h1 className="landerP">SUBSCRIBE</h1>
                </div>
              </button>
            </form>
          </div>
        </div>

        <div className="absolute w-full h-full opacity-35">
          <motion.img
            style={{ x: con1Transform.x, y: con1Transform.y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-60 absolute bottom-0 right-120"
            src={con_1}
            alt=""
          />
          <motion.img
            style={{ x: con2Transform.x, y: con2Transform.y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-45 absolute top-48 left-110"
            src={con_2}
            alt=""
          />
          <motion.img
            style={{ x: con3Transform.x, y: con3Transform.y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-45 absolute bottom-40 right-60"
            src={con_3}
            alt=""
          />
          <motion.img
            style={{ x: con4Transform.x, y: con4Transform.y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-40 absolute bottom-10 left-90"
            src={con_4}
            alt=""
          />
          <motion.img
            style={{ x: con5Transform.x, y: con5Transform.y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-30 absolute top-60 right-100"
            src={con_5}
            alt=""
          />
        </div>

        <div className="mt-50 bg-white h-20 text-center flex flex-col items-center justify-center rotate-1 z-9999999 -mb-3">
          <div className="overflow-hidden w-full">
            <div className="animate-slide whitespace-nowrap inline-block">
              <h1 className="text-4xl landerP tracking-wider text-black inline-flex items-center">
                {Array(6).fill().map((_, i) => (
                  <React.Fragment key={i}>
                    <span className="border-2 text-black text-4xl py-1.5 px-3 mx-2 rounded landerP">F</span>
                    <span className="w-2 h-2 bg-black rounded-full mx-2"></span>
                    FASHION
                    <span className="w-2 h-2 bg-black rounded-full mx-2"></span>
                  </React.Fragment>
                ))}
              </h1>
              <h1 className="text-4xl landerP tracking-wider text-black inline-flex items-center">
                {Array(6).fill().map((_, i) => (
                  <React.Fragment key={i + 6}>
                    <span className="border-2 text-black text-4xl py-1.5 px-3 mx-2 rounded landerP">F</span>
                    <span className="w-2 h-2 bg-black rounded-full mx-2"></span>
                    FASHION
                    <span className="w-2 h-2 bg-black rounded-full mx-2"></span>
                  </React.Fragment>
                ))}
              </h1>
            </div>
          </div>
        </div>

        <div className='h-full flex w-full z-999999'>
          <div className='relative flex bg-black w-1/3 h-180'>
            <img className='w-full opacity-25' src={contact} alt="" />
            <div className='absolute flex w-full h-full p-25 px-23 gap-20 flex-col'>
              <h1 className="text-white border-2 w-fit h-fit text-5xl py-1.5 px-3 mx-2 font-light landerP">F</h1>
              <div className='flex flex-col gap-10 w-full'>
                <span className='text-orange-500'><MapPin/></span>
                <h1 className='text-4xl text-start landerP font-extralight leading-10 w-100'>
                  Find out about the sales at our local shop
                </h1>
                <button className='text-start border-2 w-fit px-8 py-2 landerP font-extrabold text-xs rounded'>
                  FIND SHOPS
                </button>
                <h1 className='landerP font-light text-start'>
                  Crafted with ❤️ by rosh
                </h1>
              </div>
            </div>
          </div>
          <div className='h-h-180 flex w-2/3 items-center justify-center z-9999999'>
            <div className='h-full flex flex-row w-full items-center justify-between p-22'>
              <div className='flex flex-col gap-6 text-start landerP'>
                <h1 className='landerP text-sm'>CATEGORIES</h1>
                <ul className='flex flex-col gap-1'>
                  <li className='landerP text-zinc-500'>Hoodies</li>
                  <li className='landerP text-zinc-500'>Sweatshirts</li>
                  <li className='landerP text-zinc-500'>Shirts</li>
                  <li className='landerP text-zinc-500'>T-Shirts</li>
                  <li className='landerP text-zinc-500'>Jackets</li>
                </ul>
              </div>
              <div className='flex flex-col gap-6 text-start landerP'>
                <h1 className='landerP text-sm'>COMPANY</h1>
                <ul className='flex flex-col gap-1'>
                  <li className='landerP text-zinc-500'>About</li>
                  <li className='landerP text-zinc-500'>Blog</li>
                  <li className='landerP text-zinc-500'>Contact</li>
                  <li className='landerP text-zinc-500'>Guarantee</li>
                  <li className='landerP text-zinc-500'>Shipping</li>
                </ul>
              </div>
              <div className='flex flex-col gap-6 text-start landerP'>
                <h1 className='landerP text-sm'>SUPPORT</h1>
                <ul className='flex flex-col gap-1'>
                  <li className='landerP text-zinc-500'>Style Guide</li>
                  <li className='landerP text-zinc-500'>Licensing</li>
                  <li className='landerP text-zinc-500'>Change log</li>
                  <li className='landerP text-zinc-500'>Instructions</li>
                  <li className='landerP text-zinc-500'>Shops</li>
                </ul>
              </div>
              <div className='flex flex-col gap-6 text-start landerP'>
                <ul className='flex flex-col gap-3'>
                  <li className='landerP text-zinc-500 hover:text-blue-500'><Facebook /></li>
                  <li className='landerP text-zinc-500 hover:text-blue-500'><Twitter /></li>
                  <li className='landerP text-zinc-500 hover:text-blue-500'><Youtube /></li>
                  <li className='landerP text-zinc-500 hover:text-blue-500'><Instagram /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;