"use client";

import { FaArrowRight } from "react-icons/fa";

export default function ChatAssistant() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full">
      {/* Logo */}
      <div className="text-4xl text-blue-600 mb-4">∞</div>

      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
        Welcome to the AI Chat Assistant
      </h2>

      {/* Input + Button */}
      <div className="mt-4 w-full flex border border-gray-300 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Ask your question here..."
          className="flex-1 px-4 py-2 text-sm md:text-base focus:outline-none"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 flex items-center justify-center">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
