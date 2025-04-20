"use client";

import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useAIChat } from "../context/AIChatContext";

// Define message types
type MessageType = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

// Predefined bot responses
const botResponses = [
  "Welcome to TripAdvisor! I can help you find hotels, restaurants, and activities for your next trip.",
  "Would you like me to recommend some popular destinations based on your interests?",
  "I can help you plan an itinerary for your vacation. Just let me know your destination and duration!",
  "Looking for budget-friendly options? I can suggest some affordable accommodations and activities.",
  "I can provide information about local attractions, cultural experiences, and hidden gems at your destination.",
  "Would you like me to help you compare prices for flights to your destination?",
];

export default function AIChatBot() {
  // Get isOpen and setter functions from context
  const { isOpen, openChat, closeChat } = useAIChat();

  const [message, setMessage] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isButtonDelayed, setIsButtonDelayed] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [firstMessageSent, setFirstMessageSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Make the button appear with a delay after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 500); // Half-second delay before showing the button

    return () => clearTimeout(timer);
  }, []);

  // Delay showing the button after closing chat
  useEffect(() => {
    if (isOpen) {
      setIsButtonDelayed(true);
    } else {
      const timer = setTimeout(() => {
        setIsButtonDelayed(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Reset states when chat closes
  useEffect(() => {
    if (!isOpen) {
      setShowWelcome(true);
      setMessages([]);
      setFirstMessageSent(false);
    }
  }, [isOpen]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Close on escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeChat();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, closeChat]);

  // Disable scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Hide welcome screen when first message is sent
      if (showWelcome) {
        setShowWelcome(false);
      }

      // Add user message
      const userMessage: MessageType = {
        id: Date.now().toString(),
        content: message,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setMessage(""); // Clear input

      // Track if this is the first message
      const isFirstMessage = !firstMessageSent;
      if (isFirstMessage) {
        setFirstMessageSent(true);
      }

      // Simulate bot response with typing indicator
      setTimeout(() => {
        // For first message, show the welcome message
        let botResponse = "";
        if (isFirstMessage) {
          botResponse = "Hello! How can I help with your travel plans today?";
        } else {
          // For subsequent messages, pick a random response
          botResponse =
            botResponses[Math.floor(Math.random() * botResponses.length)];
        }

        const botMessage: MessageType = {
          id: (Date.now() + 1).toString(),
          content: botResponse,
          sender: "bot",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMessage]);
      }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }
  };

  // Custom SVG component for sparkles to allow color control
  const SparklesIcon = ({ className = "", color = "currentColor" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d="M15 1.25C15.3507 1.25 15.6546 1.49305 15.7317 1.83518L16.2704 4.22676C16.6637 5.97278 18.0272 7.33629 19.7732 7.7296L22.1648 8.26833C22.507 8.3454 22.75 8.64929 22.75 9C22.75 9.35071 22.507 9.6546 22.1648 9.73167L19.7732 10.2704C18.0272 10.6637 16.6637 12.0272 16.2704 13.7732L15.7317 16.1648C15.6546 16.507 15.3507 16.75 15 16.75C14.6493 16.75 14.3454 16.507 14.2683 16.1648L13.7296 13.7732C13.3363 12.0272 11.9728 10.6637 10.2268 10.2704L7.83518 9.73167C7.49305 9.6546 7.25 9.35071 7.25 9C7.25 8.64929 7.49305 8.3454 7.83518 8.26833L10.2268 7.7296C11.9728 7.33629 13.3363 5.97278 13.7296 4.22676L14.2683 1.83518C14.3454 1.49305 14.6493 1.25 15 1.25Z" />
      <path d="M7 11.25C7.35071 11.25 7.6546 11.493 7.73167 11.8352L8.11647 13.5435C8.37923 14.7099 9.29012 15.6208 10.4565 15.8835L12.1648 16.2683C12.507 16.3454 12.75 16.6493 12.75 17C12.75 17.3507 12.507 17.6546 12.1648 17.7317L10.4565 18.1165C9.29012 18.3792 8.37923 19.2901 8.11647 20.4565L7.73167 22.1648C7.6546 22.507 7.35071 22.75 7 22.75C6.64929 22.75 6.3454 22.507 6.26833 22.1648L5.88353 20.4565C5.62077 19.2901 4.70988 18.3792 3.54345 18.1165L1.83518 17.7317C1.49305 17.6546 1.25 17.3507 1.25 17C1.25 16.6493 1.49305 16.3454 1.83518 16.2683L3.54345 15.8835C4.70988 15.6208 5.62077 14.7099 5.88353 13.5435L6.26833 11.8352C6.3454 11.493 6.64929 11.25 7 11.25Z" />
    </svg>
  );

  return (
    <>
      <AnimatePresence>
        {isButtonVisible && !isOpen && !isButtonDelayed && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6,
            }}
            className="z-50 !fixed bottom-4 left-1/2 -translate-x-1/2"
          >
            <div className="relative">
              <Button
                variant="black"
                className="!shadow-lg !flex items-center gap-1"
                onClick={() => openChat()}
              >
                <motion.div
                  animate={{
                    // Subtle sparkle effect
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                  }}
                >
                  <SparklesIcon color="#34e0a1" />
                </motion.div>
                AI <span className="hidden md:inline-block">Chat</span>{" "}
                Assistant
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated button when chat is open (slides down) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 120, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              duration: 0.5,
            }}
            className="z-[102] !fixed bottom-4 left-1/2 -translate-x-1/2"
          >
            <Button
              variant="black"
              className="!shadow-lg !flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
              onClick={() => closeChat()} // Using context's closeChat
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                }}
              >
                <SparklesIcon color="#34e0a1" />
              </motion.div>
              Close Chat
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated full screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[101] flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop with blur and gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40 backdrop-blur-sm"
              onClick={() => closeChat()} // Using context's closeChat
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />

            {/* Header - Always at the top on mobile */}
            <motion.div
              className="relative z-10 w-full "
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
            >
              <div className="flex justify-between items-center p-4 max-w-4xl mx-auto">
                <div></div>
                <button
                  onClick={() => closeChat()} // Using context's closeChat
                  className="p-2 rounded-full bg-black/30 cursor-pointer hover:bg-black/70 text-white transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Chat content container with animation */}
            <motion.div
              className="relative flex-1 w-full max-w-4xl mx-auto flex flex-col mt-auto"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.4,
              }}
            >
              {/* Chat content area - restructured for bottom alignment */}
              <div
                ref={chatContainerRef}
                className="flex-1 flex flex-col justify-end p-6 pb-0 overflow-hidden"
              >
                {showWelcome ? (
                  /* Welcome message in center */
                  <div className="h-full flex items-center justify-center">
                    <motion.div
                      className="flex flex-col items-center text-center mb-12"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {/* TripAdvisor logo with stars animation */}
                      <div className="relative w-28 h-28 mb-4">
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                        >
                          <Image
                            src="/img/Tripadvisor_logoset_solid_green.svg"
                            alt="TripAdvisor"
                            width={80}
                            height={80}
                            className="filter drop-shadow-[0_0_8px_rgba(52,224,161,0.8)]"
                          />
                        </motion.div>
                        <motion.div
                          className="absolute top-0 right-0 flex items-center justify-center"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.7, duration: 0.5 }}
                        >
                          <div className="text-xl text-[#34e0a1] filter drop-shadow-[0_0_5px_rgba(52,224,161,0.8)]">
                            ✧
                          </div>
                        </motion.div>
                        <motion.div
                          className="absolute bottom-0 left-0 flex items-center justify-center"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.8, duration: 0.5 }}
                        >
                          <div className="text-xl text-[#34e0a1] filter drop-shadow-[0_0_5px_rgba(52,224,161,0.8)]">
                            ✦
                          </div>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        <p className="text-gray-400 text-lg mb-1">
                          Welcome to TripAdvisor AI
                        </p>
                        <h3 className="text-white text-3xl md:text-5xl font-bold">
                          How can I help?
                        </h3>
                      </motion.div>
                    </motion.div>
                  </div>
                ) : (
                  /* Chat messages - now aligned to bottom */
                  <div className="flex flex-col space-y-4 overflow-y-auto max-h-[calc(80vh-120px)] pb-2">
                    <AnimatePresence mode="popLayout">
                      {messages.map((msg) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${
                            msg.sender === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          {msg.sender === "bot" && (
                            <div className="mr-2 flex-shrink-0 relative">
                              <Image
                                src="/img/Tripadvisor_logoset_solid_green.svg"
                                alt="TripAdvisor"
                                width={32}
                                height={32}
                                className="rounded-full bg-white p-1"
                              />
                              <motion.div
                                className="absolute -top-1 -right-1"
                                animate={{
                                  scale: [1, 1.2, 1],
                                  rotate: [0, 5, 0, -5, 0],
                                }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  repeatType: "loop",
                                  ease: "easeInOut",
                                }}
                              >
                                <div className="text-xs text-[#34e0a1] filter drop-shadow-[0_0_3px_rgba(52,224,161,0.8)]">
                                  ✦
                                </div>
                              </motion.div>
                            </div>
                          )}
                          <div
                            className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-md ${
                              msg.sender === "user"
                                ? "bg-black text-white"
                                : "bg-white text-black"
                            }`}
                          >
                            <p>{msg.content}</p>
                            <div
                              className={`text-xs mt-1 ${
                                msg.sender === "user"
                                  ? "text-white/60"
                                  : "text-black/60"
                              }`}
                            >
                              {msg.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    <div ref={messagesEndRef} /> {/* Empty div for scrolling */}
                  </div>
                )}
              </div>

              {/* White text input box fixed to bottom */}
              <form onSubmit={handleSendMessage} className="p-6 pt-4">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full bg-white rounded-full py-3 px-4 pr-12 text-black focus:outline-none focus:ring-2 focus:ring-[#34e0a1]"
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 p-2 text-[#34e0a1] hover:text-[#2bc18a]"
                    disabled={!message.trim()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 rotate-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
