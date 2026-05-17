"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Venue() {
  return (
    <section className="py-28 bg-[#f8fbff] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-6 text-[#d4af37]">
          <MapPin size={34} />
        </div>

        <p className="uppercase tracking-[0.3em] text-blue-700 text-sm mb-4">
          Wedding Venue
        </p>

        <h2 className="text-5xl font-bold text-blue-950 mb-6">
          Water&apos;s Edge
        </h2>

        <p className="text-gray-600 text-xl mb-10">
          Battaramulla, Sri Lanka
        </p>

        <a
          href="https://maps.app.goo.gl/Pqte8HqH4fyxYV6x7"
          target="_blank"
          className="inline-block bg-blue-950 hover:bg-blue-800 transition text-white px-10 py-4 rounded-full"
        >
          View Location
        </a>
      </motion.div>
    </section>
  );
}