"use client";

import Button from "./Button";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

type TabType =
  | "Search All"
  | "Hotels"
  | "Things to Do"
  | "Restaurants"
  | "Flights"
  | "Vacation Rentals";

type TabConfigType = {
  [K in TabType]: {
    title: string;
    placeholder: string;
  };
};

const tabConfig: TabConfigType = {
  "Search All": {
    title: "Where to?",
    placeholder: "Places to go, things to do, hotels...",
  },
  Hotels: {
    title: "Stay somewhere great",
    placeholder: "Hotel name or destination",
  },
  "Things to Do": {
    title: "Do something fun",
    placeholder: "Attraction, activity or destination",
  },
  Restaurants: {
    title: "Find places to eat",
    placeholder: "Restaurant or destination",
  },
  Flights: {
    title: "Find the best flight",
    placeholder: "Find the best flight",
  },
  "Vacation Rentals": {
    title: "Explore places to rent",
    placeholder: "Destination",
  },
};

export default function Search() {
  const [activeTab, setActiveTab] = useState<TabType>("Search All");
  const scrollY = useMotionValue(0);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  useEffect(() => {
    const handleTabsScroll = () => {
      if (tabsContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          tabsContainerRef.current;
        setShowLeftFade(scrollLeft > 10);
        setShowRightFade(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const tabsContainer = tabsContainerRef.current;
    if (tabsContainer) {
      tabsContainer.addEventListener("scroll", handleTabsScroll);
      // Initialize the fade state
      handleTabsScroll();

      // Check on resize too
      window.addEventListener("resize", handleTabsScroll);

      return () => {
        tabsContainer.removeEventListener("scroll", handleTabsScroll);
        window.removeEventListener("resize", handleTabsScroll);
      };
    }
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const borderOpacity = useTransform(scrollY, [0, 120], [1, 0]);

  return (
    <>
      <div className="container mx-auto max-w-[1184px] text-center my-10 hidden md:block">
        <div className="h-[60px] relative">
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeTab}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-[56px] font-[900] leading-[62px] absolute w-full"
            >
              {tabConfig[activeTab].title}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative md:sticky md:top-18 z-20">
        {/* Left fade effect */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            showLeftFade ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Tabs container with horizontal scroll */}
        <div
          ref={tabsContainerRef}
          className="flex justify-start md:justify-center overflow-x-auto flex-nowrap gap-10 md:gap-6 font-bold text-lg mt-9 sticky top-18 bg-white z-10 scrollbar-hide px-6 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <Tab
            href="/"
            icon="/img/icons/home.svg"
            label="Search All"
            active={activeTab === "Search All"}
            onClick={() => handleTabChange("Search All")}
            borderOpacity={borderOpacity}
          />
          <Tab
            href="/"
            icon="/img/icons/hotels.svg"
            label="Hotels"
            active={activeTab === "Hotels"}
            onClick={() => handleTabChange("Hotels")}
            borderOpacity={borderOpacity}
          />
          <Tab
            href="/"
            icon="/img/icons/camera.svg"
            label="Things to Do"
            active={activeTab === "Things to Do"}
            onClick={() => handleTabChange("Things to Do")}
            borderOpacity={borderOpacity}
          />
          <Tab
            href="/"
            icon="/img/icons/restraunts.svg"
            label="Restaurants"
            active={activeTab === "Restaurants"}
            onClick={() => handleTabChange("Restaurants")}
            borderOpacity={borderOpacity}
          />
          <Tab
            href="/"
            icon="/img/icons/flights.svg"
            label="Flights"
            active={activeTab === "Flights"}
            onClick={() => handleTabChange("Flights")}
            borderOpacity={borderOpacity}
          />
          <Tab
            href="/"
            icon="/img/icons/vacation-rentals.svg"
            label="Vacation Rentals"
            active={activeTab === "Vacation Rentals"}
            onClick={() => handleTabChange("Vacation Rentals")}
            borderOpacity={borderOpacity}
          />
          {/* Add padding at the end to ensure last element is visible with right fade */}
          <div className="pr-4 md:hidden"></div>
        </div>

        {/* Right fade effect */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            showRightFade ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="container mx-auto max-w-[1184px] text-center my-5">
        <div className="mt-4 max-w-4xl px-4 md:px-12 mx-auto">
          {/* Desktop search box */}
          <div className="border-2 shadow-md shadow-stone-150 border-stone-200 rounded-full w-full px-1.5 py-1 mx-auto items-center hidden md:flex">
            <img
              src="/img/icons/search.svg"
              className="w-6 h-6 ml-2"
              alt="search"
            />
            <input
              type="text"
              className="w-full h-full rounded-full bg-transparent outline-none px-2"
              placeholder={tabConfig[activeTab].placeholder}
            />
            <Button variant="primary">Search</Button>
          </div>

          {/* Mobile search box */}
          <div className="md:hidden bg-white rounded-lg shadow-md p-6 mx-auto border-2 border-stone-200">
            <div className="flex items-center border-b border-gray-200 pb-3">
              <img
                src="/img/icons/search.svg"
                className="w-6 h-6 mr-3"
                alt="search"
              />
              <input
                type="text"
                className="w-full bg-transparent outline-none"
                placeholder={tabConfig[activeTab].placeholder}
              />
            </div>
            <button className="w-full bg-[#4FD3A4] text-black font-bold py-3 px-4 rounded-full mt-6">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const Tab = ({
  href,
  icon,
  label,
  active = false,
  onClick,
  borderOpacity,
}: {
  href: string;
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  borderOpacity: any;
}) => {
  return (
    <motion.a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className="flex items-center gap-1 py-1.5 relative text-black/80 hover:text-black/60 whitespace-nowrap"
    >
      <img src={icon} className="w-6 h-6" alt={label} />
      {label}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
        initial={false}
        animate={{
          scaleX: active ? 1 : 0,
        }}
        style={{
          opacity: active ? borderOpacity : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      />
    </motion.a>
  );
};

// Add a global style to hide scrollbars
// This needs to be added somewhere in your global CSS file, but I'll include it here for reference
/*
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
*/
