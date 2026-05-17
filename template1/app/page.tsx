"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Hero from "@/components/Hero";
import Couple from "@/components/Couple";
import WeddingDate from "@/components/WeddingDate";
import WeddingCountdown from "@/components/Countdown";
import Venue from "@/components/Venue";
import RSVP from "@/components/RSVP";
import OpeningScreen from "@/components/OpeningScreen";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!opened && <OpeningScreen onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      <main>
        <Hero />
        <Couple />
        <WeddingDate />
        <WeddingCountdown />
        <Venue />
        <RSVP />
      </main>
    </>
  );
}