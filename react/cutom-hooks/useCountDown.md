# Describe an elegant way to implement a countdown timer with pause/resume/reset functionality.

```jsx
import React, { useState, useRef, useEffect } from 'react';

function useCountdown(initialSeconds) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (isRunning || secondsLeft === 0) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setSecondsLeft(initialSeconds);
    setIsRunning(false);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  return {
    secondsLeft,
    isRunning,
    start,
    pause,
    reset
  };
}
```
```jsx
export default function CountdownTimer() {
  const { secondsLeft, isRunning, start, pause, reset } = useCountdown(60); // 60 seconds

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>Countdown: {secondsLeft}s</h2>
      <button onClick={start} disabled={isRunning}>Start</button>
      <button onClick={pause} disabled={!isRunning}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```
