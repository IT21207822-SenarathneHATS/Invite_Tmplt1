"use client";

import { motion } from "framer-motion";

export default function RSVP() {
  return (
    <section className="py-28 luxury-gradient text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.3em] text-blue-700 text-sm mb-4">
          Join With Us
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-blue-950 mb-6">
          RSVP
        </h2>

        <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
          We would be delighted to celebrate this beautiful moment with you.
        </p>

        <button className="bg-blue-950 hover:bg-blue-800 transition text-white px-12 py-5 rounded-full text-lg shadow-lg">
          Confirm Attendance
        </button>
      </motion.div>
    </section>
  );
}