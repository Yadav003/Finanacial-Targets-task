"use client";

export default function PendingQuestions() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-4">
        Pending Questions
      </h2>

      {/* Pending Questions List */}
      <div className="flex flex-col gap-6">
        {/* Question 1 */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold text-gray-800 text-sm md:text-base">
              Phoenix Baker
            </span>
            <span className="text-xs text-gray-400">5 min ago</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            What are the requirements for opening a new store?
          </p>
        </div>

        {/* Question 2 */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold text-gray-800 text-sm md:text-base">
              Koray Okumus
            </span>
            <span className="text-xs text-gray-400">1 hr ago</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            How do I manage inventory effectively?
          </p>
        </div>
      </div>
    </div>
  );
}
