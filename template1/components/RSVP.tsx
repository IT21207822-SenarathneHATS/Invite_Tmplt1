"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

export default function RSVP() {
  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");
  const [attending, setAttending] = useState("Yes");
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Submitting...");

    const { error } = await supabase.from("rsvps").insert([
      {
        guest_name: guestName,
        phone,
        attending,
        guest_count: guestCount,
        message,
      },
    ]);

    if (error) {
      console.error("RSVP error:", error.message);
      setStatus(error.message);
      return;
    }

    setStatus("Thank you! Your RSVP has been received.");
    setGuestName("");
    setPhone("");
    setAttending("Yes");
    setGuestCount(1);
    setMessage("");
  }

  return (
    <section className="py-28 luxury-gradient text-center px-5 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <p className="uppercase tracking-[0.3em] text-blue-700 text-sm mb-4">
          Join With Us
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-blue-950 mb-6">
          RSVP
        </h2>

        <form onSubmit={handleSubmit} className="bg-white rounded-[32px] shadow-xl p-6 sm:p-10 space-y-5 text-left">
          <input
            type="text"
            required
            placeholder="Guest Name"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="w-full border border-blue-100 rounded-2xl px-5 py-4 outline-none focus:border-blue-900"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-blue-100 rounded-2xl px-5 py-4 outline-none focus:border-blue-900"
          />

          <select
            value={attending}
            onChange={(e) => setAttending(e.target.value)}
            className="w-full border border-blue-100 rounded-2xl px-5 py-4 outline-none focus:border-blue-900"
          >
            <option value="Yes">Yes, I will attend</option>
            <option value="No">Sorry, I cannot attend</option>
          </select>

          <input
            type="number"
            min="1"
            value={guestCount}
            onChange={(e) => setGuestCount(Number(e.target.value))}
            className="w-full border border-blue-100 rounded-2xl px-5 py-4 outline-none focus:border-blue-900"
          />

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-blue-100 rounded-2xl px-5 py-4 outline-none focus:border-blue-900 min-h-32"
          />

          <button
            type="submit"
            className="w-full bg-blue-950 hover:bg-blue-800 transition text-white px-8 py-4 rounded-full text-lg shadow-lg"
          >
            Confirm Attendance
          </button>

          {status && (
            <p className="text-center text-blue-900 font-medium">
              {status}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}