# Interview Questions

## Sapient
- What are error boundaries and how is that implemented?
- What is suspense? Can it work with Apis calls as well for fallback or loading?
- What is the use of useRef?
- What are the patterns used in react, RenderProp, Container..?

### Code:
- Create a table of pokemon, one api will return list and url, hit urls for each item and add abilities and show name and abilities (join them) in table
  Hint useReducer, promise.all(to reduce render cycles)
  
Find the solution [here](https://codesandbox.io/p/devbox/condescending-cori-25y7z5?file=%2Fsrc%2FApp.jsx)


## Geminush Tech
- What is Virtual Dom in React
- How to stop virtual DOM re-rendering
- Create a Data structure to only change one checkbox out of 5 outside of virtual DOM
- Long Polling vs Web Sockets
- How to keep the enitre map offilne for military related application
- 3d bucketing, -> s3 buckets
- How to persist scroll position in a table where data is constantly coming from pipeling from top.


## Azodha
- Create a counter updates every sec from 0 to 10 & 10 to 0 infinitely
```jsx
import { useState, useEffect } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  useEffect(() => {
    const int = setInterval(() => {
      if (counter === 0) {
        setMultiplier(1);
      } else if (counter === 10) {
        setMultiplier(-1);
      } else {
        setCounter(counter + multiplier);
      }
    }, 1000);

    return () => clearInterval(int);
  }, [counter, multiplier]);

  return <p>Counter: {counter}</p>;
};

export default Counter;
```
- Create a custom useState Hook. Asked if we could use other hook like useReducer or anything -> No
```js
  
  const useState1 = (initialState) => {
  let state = intialState;
  function setState(newState) {
    if (typeof newState === "function") {
      state = newState(state);
    } else {
      state = newState;
    }
  }

  return [state, setState];
};

useState1(0);

tried using classbased first
class useState1 {
  setState(newState) {
    this.state = newState;
  }
  constructor(initialState) {
    this.state = initialState;

    return [this.state, this.setState];
  }
}

```

# GlobalLogic
- What are some of the most used hooks in react
- What are synthetic events?
- Do we need to do event delegation with say list comp or we can attach event listener to each item?
- What are the ways that you could optimise the react performance?
- what is the diff between `useMemo` and `useCallback`?
- How do you share state between two remote apps in MFE?
- 

- 
