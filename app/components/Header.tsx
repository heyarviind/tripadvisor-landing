"use client";

import Image from "next/image";
import Button from "./Button";
import { Popover, Transition, Dialog } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import SignInModal from "./modals/SignInModal";
import PreferenceModal from "./modals/PreferenceModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("region"); // 'region' or 'currency'

  // Only run this after component has mounted to prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants for the sidebar
  const sidebarVariants = {
    closed: {
      x: "-100%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  };

  // Animation variants for the overlay
  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        delay: 0.2,
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      {/* Desktop Header */}
      <header className="hidden md:flex w-full items-center justify-between py-4 bg-white container mx-auto max-w-[1184px] px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/img/trip-advisor-logo.svg"
            alt="Tripadvisor Logo"
            width={188}
            height={40}
          />
        </div>
        {/* Navigation */}
        <nav className="flex">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button as={Button} variant="secondary" size="medium">
                  Discover
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 py-2 mt-2 w-48 bg-white rounded-xl dropdown-card p-0 border-gray-100">
                    <div className="flex flex-col">
                      <a
                        href="#"
                        className="px-6 py-3 hover:bg-gray-50 block font-semibold text-base text-black"
                      >
                        Travelers' Choice
                      </a>
                      <a
                        href="#"
                        className="px-6 py-3 hover:bg-gray-50 block font-semibold text-base text-black"
                      >
                        Travel Stories
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button as={Button} variant="secondary" size="medium">
                  Trips
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 py-2 mt-2 w-48 bg-white rounded-xl dropdown-card p-0 border-gray-100">
                    <div className="flex flex-col">
                      <a
                        href="#"
                        className="px-6 py-3 hover:bg-gray-50 block font-semibold text-base text-black"
                      >
                        View my trips
                      </a>
                      <a
                        href="#"
                        className="px-6 py-3 hover:bg-gray-50 block font-semibold text-base text-black"
                      >
                        Start a new trip
                      </a>
                      <a
                        href="#"
                        className="px-6 py-3 hover:bg-gray-50 block font-semibold text-base text-black"
                      >
                        Create trip with AI
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button as={Button} variant="secondary" size="medium">
                  Review
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 py-2 mt-2 w-48 bg-white rounded-xl dropdown-card p-0 border-gray-100">
                    <div className="flex flex-col">
                      <a
                        href="#"
                        className="px-6 py-3 hover:bg-gray-50 block font-semibold text-base text-black"
                      >
                        Write a review
                      </a>
                      <a
                        href="#"
                        className="px-6 py-3 hover:bg-gray-50 block font-semibold text-base text-black"
                      >
                        Post photos
                      </a>
                      <a
                        href="#"
                        className="px-6 py-3 hover:bg-gray-50 block font-semibold text-base text-black"
                      >
                        Add a place
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button as={Button} variant="secondary" size="medium">
                  More
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 py-2 mt-2 w-48 bg-white rounded-xl dropdown-card p-0 border-gray-100">
                    <div className="flex flex-col">
                      <a
                        href="#"
                        className="px-6 py-3 hover:bg-gray-50 block font-semibold text-base text-black"
                      >
                        Cruises
                      </a>
                      <a
                        href="#"
                        className="px-6 py-3 hover:bg-gray-50 block font-semibold text-base text-black"
                      >
                        Rental Cars
                      </a>
                      <a
                        href="#"
                        className="px-6 py-3 hover:bg-gray-50 block font-semibold text-base text-black"
                      >
                        Forums
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </nav>
        {/* Right section */}
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="medium"
            className="!flex !items-center gap-2"
            onClick={() => setPreferencesOpen(true)}
          >
            <Image
              src="/img/icons/language.svg"
              alt="Language"
              className=""
              height={20}
              width={20}
            />
            <span className="w-0.5 h-full bg-gray-200">&nbsp;</span>
            <span className="text font-bold text-black">USD</span>
          </Button>
          <Button
            variant="black"
            size="medium"
            onClick={() => setSignInOpen(true)}
          >
            Sign in
          </Button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="flex md:hidden w-full items-center justify-between py-3 px-5 bg-white">
        <button
          type="button"
          className="text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div className="flex justify-center flex-1">
          <Image
            src="/img/trip-advisor-logo.svg"
            alt="Tripadvisor Logo"
            width={150}
            height={32}
            className="h-8 w-auto"
          />
        </div>

        <button type="button" className="text-gray-700 rounded-full">
          <span className="sr-only">User profile</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      </header>

      {/* Mobile Menu with Framer Motion */}
      {mounted && (
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop overlay */}
              <motion.div
                className="fixed inset-0 bg-black/30 z-40 md:hidden"
                initial="closed"
                animate="open"
                exit="closed"
                variants={overlayVariants}
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Sliding sidebar */}
              <motion.div
                className="fixed inset-y-0 left-0 z-50 w-full max-w-xs overflow-y-auto bg-white md:hidden"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sidebarVariants}
              >
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5 relative">
                  <button
                    type="button"
                    className="text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 text-sm font-semibold">
                      <Image
                        src="/img/icons/language.svg"
                        alt="Language"
                        className=""
                        height={20}
                        width={20}
                      />
                      <span>United States, EN</span>
                      <span className="mx-2">|</span>
                      <span>USD</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-2">
                  {/* First Section - Active Links */}
                  <div className="border-b border-gray-200 py-4">
                    <a
                      href="#"
                      className="block py-3 text-base font-semibold text-black"
                    >
                      Write a review
                    </a>
                    <a
                      href="#"
                      className="block py-3 text-base font-semibold text-black"
                    >
                      Trips
                    </a>
                    <a
                      href="#"
                      className="block py-3 text-base font-semibold text-black"
                    >
                      Travelers' Choice
                    </a>
                    <a
                      href="#"
                      className="block py-3 text-base font-semibold text-black"
                    >
                      Travel Stories
                    </a>
                  </div>

                  {/* Bottom Categories */}
                  <div className="py-4 space-y-1">
                    <a
                      href="#"
                      className="block py-3 text-xl font-bold text-black"
                    >
                      Hotels
                    </a>
                    <a
                      href="#"
                      className="block py-3 text-xl font-bold text-black"
                    >
                      Things to Do
                    </a>
                    <a
                      href="#"
                      className="block py-3 text-xl font-bold text-black"
                    >
                      Restaurants
                    </a>
                    <a
                      href="#"
                      className="block py-3 text-xl font-bold text-black"
                    >
                      Flights
                    </a>
                    <a
                      href="#"
                      className="block py-3 text-xl font-bold text-black"
                    >
                      Vacation Rentals
                    </a>
                    <a
                      href="#"
                      className="block py-3 text-xl font-bold text-black"
                    >
                      Cruises
                    </a>
                    <a
                      href="#"
                      className="block py-3 text-xl font-bold text-black"
                    >
                      Rental Cars
                    </a>
                    <a
                      href="#"
                      className="block py-3 text-xl font-bold text-black"
                    >
                      Forums
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}

      {/* Preferences Modal */}
      <PreferenceModal
        preferencesOpen={preferencesOpen}
        setPreferencesOpen={setPreferencesOpen}
      />

      {/* Sign In Modal */}
      <SignInModal signInOpen={signInOpen} setSignInOpen={setSignInOpen} />
    </div>
  );
}
