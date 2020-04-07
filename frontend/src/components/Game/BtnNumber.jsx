import React from "react";

export default function BtnNumber({ number, status, onNumberClick }) {
  const colors = {
    used:
      "border-green-300 text-green-700 bg-green-100 hover:text-green-500 active:text-green-800 active:bg-green-50",
    available:
      "border-gray-300 text-gray-700 bg-white hover:text-gray-500 active:text-gray-800 active:bg-gray-50",
    wrong:
      "border-red-300 text-red-700 bg-red-100 hover:text-red-500 active:text-red-800 active:bg-red-50",
    condidate:
      "border-blue-300 text-blue-700 bg-blue-100 hover:text-blue-500 active:text-blue-800 active:bg-blue-50",
  };

  let btnClasses = `${colors[status]} px-6 py-3 border text-2xl font-medium rounded-md focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150`;
  return (
    <span className="inline-block rounded-md shadow-sm m-2">
      <button
        type="button"
        onClick={() => onNumberClick(number, status)}
        className={btnClasses}
      >
        {number}
      </button>
    </span>
  );
}
