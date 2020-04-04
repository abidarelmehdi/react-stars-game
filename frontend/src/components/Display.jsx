import React, { useState } from "react";
import Button from "./Button";

function Display() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (increment) => {
    if (increment !== 0) {
      setCounter(counter + increment)
    } else {
      setCounter(0)
    }
  }
  return (
    <div className="bg-white mt-8 md:w-1/2 mx-auto overflow-hidden shadow-md rounded-lg">
      <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
        <h3 class="text-2xl leading-6 font-medium text-gray-900">
          Display
        </h3>
      </div>
      <div className="px-4 py-5 sm:p-6 bg-gray-100">
        <pre className="w-full text-5xl text-green-900 font-semibold">
          {counter > 0 ? counter : "--"}
        </pre>
      </div>
      <div className="text-center border-t border-gray-200 px-4 py-4 sm:px-6">
        <Button onClickFunction={incrementCounter} increment={1} />
        <Button onClickFunction={incrementCounter} increment={5} />
        <Button onClickFunction={incrementCounter} increment={10} />
        <Button onClickFunction={incrementCounter} increment={100} />
        <Button onClickFunction={incrementCounter} increment={0} />
      </div>
    </div>
  );
}

export default Display;
