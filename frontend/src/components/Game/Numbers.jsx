import React from "react";
import { starRange } from "./functions";

export default function Numbers({ numbers }) {
  return starRange(1, numbers).map((number) => (
    <span
      key={"btn-" + number}
      className="inline-block rounded-md shadow-sm m-2"
    >
      <button
        type="button"
        className="p-6 border border-gray-300 text-2xl leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
      >
        {number}
      </button>
    </span>
  ));
}
