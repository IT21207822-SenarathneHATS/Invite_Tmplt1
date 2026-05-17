"use client";

import { motion } from "framer-motion";

export default function Couple() {
  return (
    <section className="py-28 bg-[#f8fbff] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.3em] text-blue-700 text-sm mb-4">
          Bride & Groom
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-blue-950 mb-4">
          The Couple
        </h2>

        <div className="gold-line mb-16" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-[40px] shadow-xl"
        >
          <h3 className="text-4xl font-bold text-blue-900 mb-6">
            Hiruni
          </h3>

          <p className="text-gray-600 leading-8 text-lg">
            Daughter of Mr. and Mrs. Jayawardhana
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-[40px] shadow-xl"
        >
          <h3 className="text-4xl font-bold text-blue-900 mb-6">
            Chamath
          </h3>

          <p className="text-gray-600 leading-8 text-lg">
            Son of Mr. and Mrs. Wickramasinghe
          </p>
        </motion.div>
      </div>
    </section>
  );
}