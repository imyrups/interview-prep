# Write a React hook that throttles updates to a component rendering a real-time score.

```jsx
import { useState, useEffect, useRef } from 'react';

function useThrottledValue(value, delay) {
  const [throttled, setThrottled] = useState(value);
  const lastUpdate = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();
    if (now - lastUpdate.current >= delay) {
      setThrottled(value);
      lastUpdate.current = now;
    }
  }, [value, delay]);

  return throttled;
}
```
