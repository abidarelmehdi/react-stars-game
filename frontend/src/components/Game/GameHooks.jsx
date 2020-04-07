import { useState, useEffect } from "react";
import { random, range, sum, randomSumIn } from "./functions";

export default function useGameState(numbers) {
  const [stars, setStars] = useState(random(1, numbers));
  const [availableNumbers, setAvailableNumbers] = useState(range(1, numbers));
  const [condidateNumbers, setCondidateNumbers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft > 0 && availableNumbers.length > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

  const setGameState = (newCondidateNumbers) => {
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
  return {
    stars,
    availableNumbers,
    condidateNumbers,
    timeLeft,
    setGameState,
  };
}
