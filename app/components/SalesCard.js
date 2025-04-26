"use client";

import React from "react";

const SalesCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col w-full">
      <h3 className="text-lg md:text-xl font-semibold mb-4">
        Key Insights & Feedback
      </h3>

      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 leading-tight">
          10%
        </h1>
        <p className="text-gray-500 mt-1 text-sm md:text-base">Sales Growth</p>
        <span className="mt-2 inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
          Top Performer
        </span>
      </div>

      {/* Feedback Section */}
      <div className="bg-gray-50 rounded-md p-4">
        <h4 className="text-sm md:text-base font-semibold text-gray-700 mb-2">
          Feedback
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          Recommendations on requesting more detailed training materials.
        </p>
      </div>
    </div>
  );
};

export default SalesCard;
