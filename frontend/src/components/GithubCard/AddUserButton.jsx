import React from "react";

export default function AddUserButton() {
  return (
    <div className="flex rounded-md shadow-sm">
      <div className="relative flex-grow focus-within:z-10">
        <input
          id="text"
          className="form-input block w-full rounded-none rounded-l-md p-2 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          placeholder="Username"
        />
      </div>
      <button className="-ml-px relative inline-flex items-center p-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-5 h-5 text-cool-gray-600"
        >
          <path d="M12 4v16m8-8H4"></path>
        </svg>
      </button>
    </div>
  );
}
