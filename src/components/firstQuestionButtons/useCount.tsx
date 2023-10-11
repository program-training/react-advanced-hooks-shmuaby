import { useState } from "react";

function useClickCounter() {
  const [clickCountBlue, setClickCountBlue] = useState(0);
  const [clickCountGreen, setClickCountGreen] = useState(0);
  const [enterCount, setEnterCount] = useState(0);

  const incrementClickCountBlue = () => {
    setClickCountBlue(clickCountBlue + 1);
  };
  const incrementClickCountGreen = () => {
    setClickCountGreen(clickCountGreen + 1);
  };

  const handleMouseEnter = () => {
    setEnterCount(enterCount + 1);
  };

  return {
    clickCountBlue,
    incrementClickCountBlue,
    clickCountGreen,
    incrementClickCountGreen,
    enterCount,
    handleMouseEnter,
  };
}

export default useClickCounter;
