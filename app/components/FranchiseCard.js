"use client";

import { FaArrowUp } from "react-icons/fa";

export default function FranchiseOnboardCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-6">
        Total Franchises Onboard
      </h2>

      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl md:text-4xl font-bold text-gray-800">20</div>
        <div className="flex items-center gap-1 text-green-500 text-sm font-semibold">
          <FaArrowUp className="text-base" />
          +2.1%
        </div>
      </div>

      {/* Stages */}
      <div className="space-y-2 mt-6 text-gray-600 text-sm">
        <div>Stage 1 (Initial Inquiry) - 14</div>
        <div>Stage 2 (Document Submission) - 02</div>
        <div>Stage 3 (Training) - 04</div>
      </div>
    </div>
  );
}
