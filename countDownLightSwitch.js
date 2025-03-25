import { useState, useEffect } from "react";

const CountdownLightSwitch = () => {
  const [isDark, setIsDark] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsDark((prev) => !prev);
    }
  }, [timeLeft, isRunning]);

  return (
    <div className={`container ${isDark ? "dark" : "light"}`}>
      <button onClick={() => {
    setIsDark(!isDark)}}>Toggle Theme</button>
      <div className="countdown">
        <p>{timeLeft > 0 ? `Time Left: ${timeLeft}s` : "Time's Up!"}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(30 - timeLeft) * (100 / 30)}%` }}></div>
        </div>
        <button onClick={() => {
    if (!isRunning) setIsRunning(true);
  }} disabled={isRunning}>Start Timer</button>
        <button onClick={() => {
    setIsRunning(false);
    setTimeLeft(30);
  }}>Reset Timer</button>
      </div>
    </div>
  );
};

export default CountdownLightSwitch;
