"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen luxury-gradient flex flex-col items-center justify-center text-center px-6 overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-72 h-72 border border-blue-900 rounded-full"
      />

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-blue-800 tracking-[0.35em] uppercase mb-6 text-sm"
      >
        Together With Their Families
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mb-6 text-[#d4af37]"
      >
        <Heart size={34} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        className="text-6xl md:text-8xl font-bold text-blue-950"
      >
        Hiruni
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="text-4xl text-[#d4af37] my-4 font-serif"
      >
        &
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 1.1 }}
        className="text-6xl md:text-8xl font-bold text-blue-950"
      >
        Chamath
      </motion.h1>

      <div className="gold-line" />

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="mt-4 text-gray-700 text-lg tracking-wide"
      >
        24 March 2028 · Water&apos;s Edge, Battaramulla
      </motion.p>
    </section>
  );
}