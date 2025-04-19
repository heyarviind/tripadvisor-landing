"use client";

import { motion } from "framer-motion";
import { useState, ReactNode, useEffect } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

interface ListSliderProps {
  children: ReactNode[];
  itemsPerView?: number;
}

export default function ListSlider({
  children,
  itemsPerView = 4,
}: ListSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = children.length;
  const [currentItemsPerView, setCurrentItemsPerView] = useState(itemsPerView);
  const [isMobile, setIsMobile] = useState(false);

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);

      if (mobile) {
        // Show 1.5 items on mobile (1 full + 0.5 of next)
        setCurrentItemsPerView(1.5);
      } else if (window.innerWidth < 1024) {
        // Show 2 items on tablets
        setCurrentItemsPerView(2);
      } else {
        // Show default number on desktop
        setCurrentItemsPerView(itemsPerView);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerView]);

  const handleNext = () => {
    if (currentIndex < totalItems - currentItemsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // For mobile: enable native scrolling with no arrows
  if (isMobile) {
    return (
      <div className="relative mt-4">
        <div
          className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <ul className="flex gap-4 w-max pb-4">
            {children.map((child, index) => (
              <li
                key={index}
                className="shrink-0 w-[65%] snap-start"
                style={{
                  maxWidth: "260px",
                  maxHeight: "260px",
                  width: "65%",
                  aspectRatio: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="w-full h-full overflow-hidden">{child}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // For desktop: use animated slider with arrow controls
  return (
    <div className="relative mt-4">
      <div className="overflow-hidden">
        <motion.ul
          className="flex gap-4"
          animate={{
            x: `-${currentIndex * (100 / currentItemsPerView)}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
          }}
        >
          {children.map((child, index) => (
            <li
              key={index}
              className="shrink-0 sm:w-[calc((100%-1*1rem)/2)] md:w-[calc((100%-2*1rem)/3)] lg:w-[calc((100%-3*1rem)/4)]"
            >
              {child}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Navigation Buttons */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 group -translate-y-1/2 -translate-x-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-black shadow-lg flex items-center justify-center ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-black hover:text-white"
          }`}
        >
          <ArrowLeftIcon className="w-4 h-4 sm:w-6 sm:h-6 text-black group-hover:text-white" />
        </button>
      )}

      {currentIndex < totalItems - currentItemsPerView && (
        <button
          onClick={handleNext}
          disabled={currentIndex >= totalItems - currentItemsPerView}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full group bg-white border-2 border-black shadow-lg flex items-center justify-center ${
            currentIndex >= totalItems - currentItemsPerView
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-black hover:text-white"
          }`}
        >
          <ArrowRightIcon className="w-4 h-4 sm:w-6 sm:h-6 text-black group-hover:text-white" />
        </button>
      )}
    </div>
  );
}
