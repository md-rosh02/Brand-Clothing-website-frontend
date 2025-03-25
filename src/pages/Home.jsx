import React, { useState } from 'react';
import Lander from '../components/Lander';
import Gallery from '../components/Gallery';
import ProductAbout from '../components/ProductAbout';
import Cards from '../components/Cards';
import PromoteToLocal from '../components/PromoteToLocal';
import PopularProduct from "../components/PopularProduct";
import PopularCards from '../components/PopularCards'; // Ensure this import is correct
import Feature from '../components/Feature';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1, cartId: Date.now() }];
    });
    setCartOpen(true);
  };

  return (
    <div className='backG'>
      <NavBar cartItems={cartItems} setCartItems={setCartItems} cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <Lander />
      <Gallery />
      <ProductAbout />
      <Cards addToCart={addToCart} />
      <PromoteToLocal />
      <PopularProduct />
      <PopularCards addToCart={addToCart} /> {/* Pass addToCart here */}
      <Feature />
      <Contact />
    </div>
  );
};

export default Home;