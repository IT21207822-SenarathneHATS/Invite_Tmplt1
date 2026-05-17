"use client";

import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";

const weddingDate = new Date("2028-03-24T09:00:00");

export default function WeddingCountdown() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-28 bg-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.3em] text-blue-700 text-sm mb-4">
          Counting The Days
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-blue-950 mb-12">
          Until We Say I Do
        </h2>

        {!mounted ? null : (
          <Countdown
            date={weddingDate}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  ["Days", days],
                  ["Hours", hours],
                  ["Minutes", minutes],
                  ["Seconds", seconds],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="bg-[#f8fbff] rounded-[30px] shadow-lg p-8 border border-blue-100"
                  >
                    <h3 className="text-4xl md:text-5xl font-bold text-blue-950">
                      {value}
                    </h3>
                    <p className="text-gray-500 mt-2 uppercase tracking-widest text-sm">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          />
        )}
      </motion.div>
    </section>
  );
}