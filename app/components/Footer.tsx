"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define types for our state
type FooterSections = {
  aboutTripadvisor: boolean;
  explore: boolean;
  doBusiness: boolean;
  getTheApp: boolean;
  tripadvisorSites: boolean;
};

const Footer = () => {
  const [expandedSections, setExpandedSections] = useState<FooterSections>({
    aboutTripadvisor: false,
    explore: false,
    doBusiness: false,
    getTheApp: false,
    tripadvisorSites: false,
  });

  const toggleSection = (section: keyof FooterSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  // Plus/minus icon component
  const ToggleIcon = ({ isExpanded }: { isExpanded: boolean }) => (
    <span className="text-2xl">{isExpanded ? "−" : "+"}</span>
  );

  return (
    <footer className="bg-gray-100 pt-8 pb-2 mt-16 text-sm">
      <div className="container mx-auto max-w-[1136px] px-4">
        <div className="md:grid md:grid-cols-6 md:gap-8 mb-4">
          {/* About Tripadvisor - Mobile Collapsible / Desktop Expanded */}
          <div className="col-span-1 md:py-0">
            <div className="mb-4">
              <div
                className="flex gap-3 items-center cursor-pointer md:cursor-default"
                onClick={() => toggleSection("aboutTripadvisor")}
              >
                <h3 className="text-gray-700 text-base font-medium">
                  About Tripadvisor
                </h3>
                <span className="md:hidden text-3xl">
                  {expandedSections.aboutTripadvisor ? "-" : "+"}
                </span>
              </div>
            </div>
            <ul
              className={`space-y-0 mt-2 ${
                expandedSections.aboutTripadvisor ? "block" : "hidden"
              } md:block`}
            >
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Resources and Policies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Trust & Safety
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Bug Bounty Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="col-span-1 md:py-0">
            <div className="mb-4">
              <div
                className="flex gap-3 items-center cursor-pointer md:cursor-default"
                onClick={() => toggleSection("explore")}
              >
                <h3 className="text-gray-700 text-base font-medium">Explore</h3>
                <span className="md:hidden text-3xl">
                  {expandedSections.explore ? "-" : "+"}
                </span>
              </div>
            </div>
            <ul
              className={`space-y-0 mt-2 ${
                expandedSections.explore ? "block" : "hidden"
              } md:block`}
            >
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Write a review
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Add a Place
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Join
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Travelers' Choice
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Travel Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Do Business With Us */}
          <div className="col-span-1 md:py-0">
            <div className="mb-4">
              <div
                className="flex gap-3 items-center cursor-pointer md:cursor-default"
                onClick={() => toggleSection("doBusiness")}
              >
                <h3 className="text-gray-700 text-base font-medium">
                  Do Business With Us
                </h3>
                <span className="md:hidden text-3xl">
                  {expandedSections.doBusiness ? "-" : "+"}
                </span>
              </div>
            </div>
            <ul
              className={`space-y-0 mt-2 ${
                expandedSections.doBusiness ? "block" : "hidden"
              } md:block`}
            >
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Owners
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Business Advantage
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Sponsored Placements
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Advertise with Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Access our Content API
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-black hover:underline"
                >
                  Become an Affiliate
                </Link>
              </li>
            </ul>

            {/* Get The App - Nested under Do Business on mobile, separate on desktop */}
            <div className="mt-6 md:mt-6">
              <div className="mb-4">
                <div
                  className="flex gap-3 items-center cursor-pointer md:cursor-default"
                  onClick={() => toggleSection("getTheApp")}
                >
                  <h3 className="text-gray-700 text-base font-medium">
                    Get The App
                  </h3>
                  <span className="md:hidden text-3xl">
                    {expandedSections.getTheApp ? "-" : "+"}
                  </span>
                </div>
              </div>
              <ul
                className={`space-y-0 mt-2 ${
                  expandedSections.getTheApp ? "block" : "hidden"
                } md:block`}
              >
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-black hover:underline"
                  >
                    iPhone App
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-black hover:underline"
                  >
                    Android App
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-1 hidden md:block"></div>

          {/* Tripadvisor Sites */}
          <div className="col-span-2 md:py-0">
            <div className="mb-4">
              <div
                className="flex gap-3 items-center cursor-pointer md:cursor-default"
                onClick={() => toggleSection("tripadvisorSites")}
              >
                <h3 className="text-gray-700 text-base font-medium">
                  Tripadvisor Sites
                </h3>
                <span className="md:hidden text-3xl">
                  {expandedSections.tripadvisorSites ? "-" : "+"}
                </span>
              </div>
            </div>
            <ul
              className={`space-y-0 mt-2 ${
                expandedSections.tripadvisorSites ? "block" : "hidden"
              } md:block`}
            >
              <li>
                <span className="text-black">
                  Book the best restaurants with{" "}
                </span>
                <Link
                  href="#"
                  className="text-black underline hover:text-black hover:underline"
                >
                  TheFork
                </Link>
              </li>
              <li>
                <span className="text-black">
                  Book tours and attraction tickets on{" "}
                </span>
                <Link
                  href="#"
                  className="text-black underline hover:text-black hover:underline"
                >
                  Viator
                </Link>
              </li>
              <li>
                <span className="text-black">Read cruise reviews on </span>
                <Link
                  href="#"
                  className="text-black underline hover:text-black hover:underline"
                >
                  Cruise Critic
                </Link>
              </li>
              <li>
                <span className="text-black">
                  Get airline seating charts on{" "}
                </span>
                <Link
                  href="#"
                  className="text-black underline hover:text-black hover:underline"
                >
                  Seat Guru
                </Link>
              </li>
              <li>
                <span className="text-black">
                  Search for holiday rentals on{" "}
                </span>
                <Link
                  href="#"
                  className="text-black underline hover:text-black hover:underline"
                >
                  Holiday Lettings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 pb-2 border-t border-gray-300 mt-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:flex-1">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="mr-4">
                    <Image
                      src="/img/Tripadvisor_logoset_solid_green.svg"
                      alt="Tripadvisor Logo"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-black">
                      © 2025 Tripadvisor LLC All rights reserved.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <div className="grid grid-cols-2 md:flex md:flex-wrap md:space-x-4 mb-4 md:mb-0 text-xs md:text-base">
                  <Link
                    href="#"
                    className="underline font-semibold mb-2 md:mb-0 hover:underline"
                  >
                    Terms of Use
                  </Link>
                  <Link
                    href="#"
                    className="underline font-semibold mb-2 md:mb-0 hover:underline"
                  >
                    Privacy and Cookies Statement
                  </Link>
                  <Link
                    href="#"
                    className="underline font-semibold mb-2 md:mb-0 hover:underline"
                  >
                    Cookie consent
                  </Link>
                  <Link
                    href="#"
                    className="underline font-semibold mb-2 md:mb-0 hover:underline"
                  >
                    Site Map
                  </Link>
                  <Link
                    href="#"
                    className="underline font-semibold mb-2 md:mb-0 hover:underline"
                  >
                    How the site works
                  </Link>
                  <Link
                    href="#"
                    className="underline font-semibold mb-2 md:mb-0 hover:underline"
                  >
                    Contact us
                  </Link>
                </div>

                <p className="text-xs text-black mb-6 md:mb-4 mt-4">
                  This is the version of our website addressed to speakers of
                  English in the United States. If you are a resident of another
                  country or region, please select the appropriate version of
                  Tripadvisor for your country or region in the drop-down menu.
                  <Link
                    href="#"
                    className="text-black font-semibold hover:text-black hover:underline ml-2"
                  >
                    Show more
                  </Link>
                </p>
              </div>
            </div>

            <div className="md:ml-4 mt-6 md:mt-0">
              <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2 mb-6">
                <div className="border rounded-md px-4 py-2 flex items-center justify-between w-full md:w-48 bg-white">
                  <span>$ USD</span>
                  <span>▼</span>
                </div>
                <div className="border rounded-md px-4 py-2 flex items-center justify-between w-full md:w-48 bg-white">
                  <span>United States</span>
                  <span>▼</span>
                </div>
              </div>

              <div className="flex justify-center md:justify-end space-x-6 mt-6">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="hover:underline"
                >
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link href="#" aria-label="Twitter" className="hover:underline">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  aria-label="Pinterest"
                  className="hover:underline"
                >
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0a12 12 0 00-4.373 23.182c-.01-.937-.019-2.375.491-3.392.456-.92 2.933-5.878 2.933-5.878s-.749-1.49-.749-3.688c0-3.457 2.003-6.03 4.498-6.03 2.12 0 3.143 1.59 3.143 3.492 0 2.124-1.352 5.3-2.053 8.249-.584 2.469 1.24 4.482 3.677 4.482 4.413 0 7.388-5.666 7.388-12.38 0-5.105-3.432-8.922-9.663-8.922-7.044 0-11.44 5.26-11.44 11.14 0 2.029.588 3.458 1.506 4.565.422.5.48.702.327 1.278-.109.416-.356 1.417-.458 1.813-.149.569-.609.773-1.12.563-3.126-1.275-4.585-4.715-4.585-8.573 0-6.376 5.38-14.025 16.046-14.025 8.571 0 14.219 6.199 14.219 12.874 0 8.817-4.902 15.417-12.146 15.417-2.43 0-4.716-1.317-5.498-2.797 0 0-1.308 5.197-1.585 6.193-.477 1.738-1.412 3.49-2.266 4.85A12 12 0 1012 0z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="hover:underline"
                >
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link href="#" aria-label="YouTube" className="hover:underline">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" aria-label="TikTok" className="hover:underline">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
