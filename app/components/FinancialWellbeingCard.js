"use client";

export default function FinancialWellbeingCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-6">
        Financial Wellbeing
      </h2>

      <div className="text-gray-700 space-y-4 text-sm">
        <div className="flex justify-between">
          <span>Target</span>
          <span className="font-semibold">$500,000</span>
        </div>
        <div className="flex justify-between">
          <span>Current</span>
          <span className="font-semibold">$450,000</span>
        </div>
        <div className="flex justify-between">
          <span>Financial Health</span>
          <span className="text-green-500 font-semibold">+4.21%</span>
        </div>
      </div>
    </div>
  );
}
