import React, { useState } from "react";

function Button({ label }) {
  const [counter, setCounter] = useState(0);
  return (
    <span className="relative z-0 inline-flex shadow-sm m-10">
      <button
        type="button"
        onClick={() => setCounter(counter + 1)}
        className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
        {label} {counter > 0 ? counter : ""}
      </button>
      <button
        type="button"
        onClick={() => setCounter(0)}
        className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-red-600 hover:text-red-500  active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </span>
  );
}

export default Button;
