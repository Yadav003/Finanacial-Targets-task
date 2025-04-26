"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaCheckCircle } from "react-icons/fa";

export default function ProgressCard() {
  const percentage = 85;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-center">
        Account Progress
      </h2>

      {/* Circular Progress */}
      <div className="w-20 h-20 md:w-24 md:h-24 mb-6">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: "20px",
            pathColor: "#3B82F6",
            textColor: "#3B82F6",
            trailColor: "#d6d6d6",
          })}
        />
      </div>

      {/* Steps Boxes */}
      <div className="flex flex-col gap-4 w-full">
        {/* Steps Completed */}
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-md font-semibold mb-2">Steps Completed</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-green-600">
              <FaCheckCircle />
              <span className="text-gray-700 text-sm">Profile Setup</span>
            </li>
            <li className="flex items-center gap-2 text-green-600">
              <FaCheckCircle />
              <span className="text-gray-700 text-sm">Initial Training</span>
            </li>
            <li className="flex items-center gap-2 text-green-600">
              <FaCheckCircle />
              <span className="text-gray-700 text-sm">Legal Documents</span>
            </li>
          </ul>
        </div>

        {/* Steps Remaining */}
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-md font-semibold mb-2">Steps Remaining</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-500">
              <div className="w-3 h-3 rounded-full bg-gray-400" />
              <span className="text-gray-700 text-sm">Financial Integration</span>
            </li>
            <li className="flex items-center gap-2 text-gray-500">
              <div className="w-3 h-3 rounded-full bg-gray-400" />
              <span className="text-gray-700 text-sm">Final Review</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
