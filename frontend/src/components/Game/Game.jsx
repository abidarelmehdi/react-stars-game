import React, { useState, useEffect } from "react";
import { random, range, sum, randomSumIn } from "./functions";
import BtnNumber from "./BtnNumber";
import Stars from "./Stars";
import PlayAgain from "./PlayAgain";

function Round({ startAgain }) {
  const starsRandNum = random(1, 9);
  const numbers = 9;

  const [stars, setStars] = useState(starsRandNum);
  const [availableNumbers, setAvailableNumbers] = useState(range(1, numbers));
  const [condidateNumbers, setCondidateNumbers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10);

  const condidatesAreWrong = sum(condidateNumbers) > stars;

  useEffect(() => {
    if (timeLeft > 0 && availableNumbers.length > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

  const numberStatus = (number) => {
    if (!availableNumbers.includes(number)) {
      return "used";
    }
    if (condidateNumbers.includes(number)) {
      return condidatesAreWrong ? "wrong" : "condidate";
    }
    return "available";
  };

  const gameStatus =
    availableNumbers.length === 0 ? "won" : timeLeft === 0 ? "lost" : "active";

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== "active" || currentStatus === "used") {
      return;
    }
    const newCondidateNumbers =
      currentStatus === "available"
        ? condidateNumbers.concat(number)
        : condidateNumbers.filter((cn) => cn !== number);

    if (sum(newCondidateNumbers) !== stars) {
      setCondidateNumbers(newCondidateNumbers);
    } else {
      const newAvailableNumbers = availableNumbers.filter(
        (num) => !newCondidateNumbers.includes(num)
      );
      setStars(randomSumIn(newAvailableNumbers, 9));
      setAvailableNumbers(newAvailableNumbers);
      setCondidateNumbers([]);
    }
  };

  return (
    <div className="mt-16 flex-inital bg-white border border-gray-300 overflow-hidden shadow-xl rounded-lg">
      <div className="-ml-4 -mt-2 px-4 py-5 border-b border-gray-300 sm:px-6 flex items-center justify-between flex-wrap sm:flex-no-wrap">
        <div className="ml-4 mt-2">
          <h3 className="text-xl leading-6 font-medium text-indigo-600">
            Stars Game
          </h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <h3 className="text-xl leading-6 font-medium text-yellow-400">
            Time Left: {timeLeft}
          </h3>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap items-center justify-center w-72 p-4 bg-cool-gray-100 border-r border-gray-300 text-center">
          {gameStatus !== "active" ? (
            <PlayAgain gameStatus={gameStatus} startAgain={startAgain} />
          ) : (
            <Stars stars={stars} />
          )}
        </div>
        <div className="w-72 p-4 text-center">
          {range(1, numbers).map((number) => (
            <BtnNumber
              key={`btn-${number}`}
              status={numberStatus(number)}
              number={number}
              onNumberClick={onNumberClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Game() {
  const [gameId, setGameId] = useState(1);
  return <Round key={gameId} startAgain={() => setGameId(gameId + 1)} />;
}
