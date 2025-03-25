import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed w-35 h-35 bg-[#dda561] rounded-full pointer-events-none"
      animate={{ x: cursorPosition.x - 50, y: cursorPosition.y - 50 }}
      transition={{ stiffness: 100, damping: 10 }}
      style={{
        position: "fixed",
        zIndex: 9999,
        filter: "blur(40px)", // Adds the spreaded blur effect
        boxShadow: "0 0 20px 10px rgba(255, 165, 0, 0.5)", // Soft glow around the cursor
      }}
    />
  );
};

export default CustomCursor;
