"use client";

import { motion } from "framer-motion";

export default function WeddingDate() {
  return (
    <section className="py-28 luxury-gradient text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.3em] text-blue-700 text-sm mb-4">
          Save The Date
        </p>

        <h2 className="text-6xl md:text-7xl font-bold text-blue-950 mb-6">
          24th
        </h2>

        <p className="text-3xl text-gray-700 mb-4">
          March 2028
        </p>

        <div className="gold-line" />
      </motion.div>
    </section>
  );
}