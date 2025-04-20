"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the context
interface AIChatContextType {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
}

// Create the context with default values
const AIChatContext = createContext<AIChatContextType>({
  isOpen: false,
  openChat: () => {},
  closeChat: () => {},
});

// Context provider component
export function AIChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => {
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <AIChatContext.Provider
      value={{
        isOpen,
        openChat,
        closeChat,
      }}
    >
      {children}
    </AIChatContext.Provider>
  );
}

// Custom hook to use the context
export function useAIChat() {
  const context = useContext(AIChatContext);
  if (context === undefined) {
    throw new Error("useAIChat must be used within an AIChatProvider");
  }
  return context;
}
