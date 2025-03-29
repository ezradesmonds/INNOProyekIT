"use client";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section id="features">
      <div className="parallax"></div>
      <motion.h2 
        className="requirement-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Requirement
      </motion.h2>
      
      <div className="features">
        {["🔥 PCU Student batch 2022-2024", "🚀 Passed WGG & LKMIM-TD", "💡 Submit your CV & Portfolio"].map((text, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {text}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
