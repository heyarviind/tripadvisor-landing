"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TravellersChoiceBanner() {
  return (
    <section className="my-16 px-6 md:px-0 bg-[#fff7e1] ">
      <div className="container mx-auto max-w-[1136px] relative flex flex-col md:flex-row">
        {/* Left content */}
        <div className="md:w-1/2 p-8 md:py-12 flex flex-col justify-center relative z-10">
          <img
            src="https://static.tacdn.com/img2/travelers_choice/2023/TC_badge_yellow.svg"
            alt="Tripadvisor Owl"
            className="w-20 h-20"
          />

          <h2 className="text-3xl md:text-5xl font-[900] text-black mb-2">
            Travellers' Choice Awards Best of the Best
          </h2>

          <p className="text-base md:text-2xl text-gray-800 mb-6">
            Among our top 1% of places, stays, eats, and experiences—decided by
            you.
          </p>

          <Link href="/travelers-choice">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white font-semibold py-3 px-6 rounded-full inline-block"
            >
              See the winners
            </motion.button>
          </Link>
        </div>

        {/* Right image */}
        <div className="md:w-1/2 relative h-80 md:h-auto">
          <img
            src="/img/tc_cards_2025.png"
            alt="Travellers' Choice Awards"
            className="absolute top-0 right-0 h-full w-full object-cover md:object-contain object-right"
          />

          {/* Decorative shapes */}
          <div className="absolute top-24 right-24 w-48 h-48 rounded-full bg-[#4CD3A9] opacity-80 -z-10"></div>
          <div className="absolute bottom-12 left-12 w-40 h-40 rounded-full bg-[#ffcb00] opacity-70 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
