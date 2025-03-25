import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import CustomCursor from "./components/CustomCursor"; // Import the custom cursor
import Products from "./pages/Products";

const App = () => {
  return (
    <Router>
      <CustomCursor /> {/* Cursor is active globally */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </Router>
  );
};

export default App;
