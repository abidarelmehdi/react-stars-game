import React from "react";

export default function PlayAgain({ gameStatus, startAgain }) {
  return (
    <div>
      {gameStatus === "won" ? (
        <span className="block text-4xl font-medium text-indigo-700">
          Nice... You Won{" "}
          <span role="img" aria-label="happy">
            🤗
          </span>
        </span>
      ) : (
        <span className="block text-4xl font-medium text-red-600">
          Game Over
          <span role="img" aria-label="confused">
            😯
          </span>
        </span>
      )}
      <button
        type="button"
        onClick={() => startAgain()}
        className="mt-6 px-4 py-2 border border-cool-gray-400 text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150"
      >
        Play Again
      </button>
    </div>
  );
}
