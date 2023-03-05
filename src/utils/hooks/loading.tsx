import { useState, useEffect } from "react";

interface IProps {
  initialCount: number;
  step: number;
}
export const useCounters = ({ initialCount, step = 1 }: IProps) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) =>
        prevCount < 3 ? prevCount + step : initialCount
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);
  return count;
};
