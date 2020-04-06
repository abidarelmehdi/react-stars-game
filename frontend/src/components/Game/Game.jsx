import React, { useState } from "react";
import { random } from "./functions";
import Numbers from "./Numbers";
import Stars from "./Stars";

export default function Game() {
  const [stars, setStars] = useState(random(1, 9));
  const [numbers, setNumbers] = useState(9);
  return (
    <div className="mt-16 flex-inital bg-white border border-gray-300 overflow-hidden shadow-xl rounded-lg">
      <div className="-ml-4 -mt-2 px-4 py-5 border-b border-gray-300 sm:px-6 flex items-center justify-between flex-wrap sm:flex-no-wrap">
        <div className="ml-4 mt-2">
          <h3 className="text-xl leading-6 font-medium text-indigo-600">
            Stars Game
          </h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0"></div>
      </div>
      <div className="flex justify-center">
        <div className="w-72 p-4 bg-cool-gray-100 border-r border-gray-300 text-center">
          <Stars stars={stars} />
        </div>
        <div className="w-72 p-4 text-center">
          <Numbers numbers={numbers} />
        </div>
      </div>
    </div>
  );
}
