"use client";

import { motion } from "framer-motion";

type Props = {
  onOpen: () => void;
};

export default function OpeningScreen({ onOpen }: Props) {
  const handleOpen = () => {
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-hidden bg-blue-950"
    >
      {/* Background content */}
      <div className="absolute inset-0 luxury-gradient flex items-center justify-center px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.4em] text-blue-700 text-xs mb-6">
            Wedding Invitation
          </p>

          <h1 className="text-5xl md:text-8xl font-bold text-blue-950">
            Ruchini
          </h1>

          <p className="text-[#d4af37] text-3xl my-4">&</p>

          <h1 className="text-5xl md:text-8xl font-bold text-blue-950">
            Sahan
          </h1>

          <button
            onClick={handleOpen}
            className="mt-10 bg-blue-950 hover:bg-blue-800 transition text-white px-10 py-4 rounded-full text-base shadow-xl"
          >
            Open Invitation
          </button>
        </div>
      </div>

      {/* Left door */}
        <motion.div
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="absolute left-0 top-0 h-full w-1/2 bg-blue-950 border-r border-[#d4af37]"
        />

        {/* Right door */}
        <motion.div
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="absolute right-0 top-0 h-full w-1/2 bg-blue-950 border-l border-[#d4af37]"
        />

      {/* Door design */}
      <div className="absolute inset-0 pointer-events-none flex">
        <div className="w-1/2 h-full flex items-center justify-end pr-6">
          <div className="w-4 h-4 rounded-full bg-[#d4af37]" />
        </div>

        <div className="w-1/2 h-full flex items-center justify-start pl-6">
          <div className="w-4 h-4 rounded-full bg-[#d4af37]" />
        </div>
      </div>

      {/* Front text */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.4em] text-[#d4af37] text-xs mb-6">
            You Are Invited
          </p>

          <h1 className="text-5xl font-bold text-white">
            Hiruni
          </h1>

          <p className="text-[#d4af37] text-3xl my-3">&</p>

          <h1 className="text-5xl font-bold text-white">
            Chamath
          </h1>

          <button
            onClick={handleOpen}
            className="mt-10 bg-white text-blue-950 px-10 py-4 rounded-full text-base shadow-xl"
          >
            Open Invitation
          </button>
        </div>
      </div>
    </motion.div>
  );
}