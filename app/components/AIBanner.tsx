"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define a UI Button component since it appears to be missing
const Button = ({
  children,
  variant = "default",
  size = "medium",
  ...props
}: {
  children: React.ReactNode;
  variant?: "default" | "light" | "dark";
  size?: "small" | "medium" | "large";
  [key: string]: any;
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "light":
        return "bg-white text-black hover:bg-gray-100";
      case "dark":
        return "bg-black text-white hover:bg-gray-900";
      default:
        return "bg-blue-500 text-white hover:bg-blue-600";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "py-1 px-3 text-sm";
      case "large":
        return "py-3 px-6 text-lg";
      default:
        return "py-2 px-4 text-base";
    }
  };

  return (
    <button
      className={`font-semibold rounded-lg transition-colors ${getVariantClasses()} ${getSizeClasses()}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function AIBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const images = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/20/6c/10/app-relaunch-banner-2.jpg?w=2400&h=-1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/20/6c/35/app-relaunch-banner-3.jpg?w=800&h=-1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/20/6b/e0/app-relaunch-banner-1.jpg?w=800&h=-1",
  ];

  // Preload images
  useEffect(() => {
    const loadedStates = Array(images.length).fill(false);

    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedStates[index] = true;
        setImagesLoaded([...loadedStates]);

        // Check if all images are loaded
        if (loadedStates.every((isLoaded) => isLoaded)) {
          setAllImagesLoaded(true);
        }
      };
    });
  }, []);

  // Start the image rotation once all images are loaded
  useEffect(() => {
    if (!allImagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [allImagesLoaded, images.length]);

  // Animation variants for the zoom effect
  const zoomVariants = {
    enter: { scale: 1.0, opacity: 0 },
    center: {
      scale: 1.05,
      opacity: 1,
      transition: {
        scale: { duration: 5, ease: "easeInOut" },
        opacity: { duration: 1, ease: "easeOut" },
      },
    },
    exit: {
      scale: 1.1,
      opacity: 0,
      transition: {
        scale: { duration: 5, ease: "easeInOut" },
        opacity: { duration: 1, ease: "easeIn" },
      },
    },
  };

  return (
    <section className="relative md:px-24 md:pb-10 p-6 md:pt-18 pt-40 overflow-hidden container mx-auto max-w-[1136px] rounded-xl mt-16">
      {/* Hidden image preloaders */}
      <div className="hidden">
        {images.map((src, index) => (
          <img key={`preload-${index}`} src={src} alt="Preload banner" />
        ))}
      </div>

      {/* Background image container */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImageIndex}
            variants={zoomVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
            }}
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 right-1/4 bg-gradient-to-r from-black/50 to-transparent"></div>

      <div className="relative z-10 text-white md:w-1/2">
        <div className="text-white text-sm font-bold mb-2">
          Powered by AI{" "}
          <span className="inline-flex bg-white py-1.5 px-2 text-black rounded-lg ml-1">
            BETA
          </span>
        </div>
        <h2 className="!text-[40px] !md:text-[56px] !font-[800] !leading-[36px] !md:leading-[58px]">
          Plan your kind of trip
        </h2>
        <p className="text-lg md:text-[32px] font-[700] md:leading-[36px] mb-6">
          Get custom recs for all the things you're into with AI trip builder.
        </p>
        <Button variant="light">Start a trip with AI</Button>
      </div>
    </section>
  );
}
