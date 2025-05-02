# Mid Level Questions

## what is prop drilling in react?


## What is the difference between `useEffect` and `useLayoutEffect`?
  `useEffect` runs after the DOM has been painted, meaning that it does not block the browser's paint process. It is used for side effects like data fetching or setting up subscriptions that do not require immediate updates to the DOM
  `useLayoutEffect` runs synchronously after all DOM mutations but before the paint, so it is used when you need to measure or modify the DOM before the browser paints. It is useful for situations like animations or DOM manipulations that require immediate feedback.

## How does React’s Virtual DOM work?
  The Virtual DOM is a lightweight copy of the actual DOM in memory. When a state or prop changes, React updates the Virtual DOM first. It then compares the updated Virtual DOM with the previous version using a process called "reconciliation." The differences (or "diffs") are calculated and then applied to the actual DOM in the most efficient way possible, reducing the number of direct manipulations to the real DOM, which leads to better performance.

## How do you optimize the performance of a React application?
  Here are several strategies to optimize React performance:

    `Memoization`: Use React.memo for functional components and PureComponent for class components to prevent unnecessary re-renders.
    `useMemo and useCallback hooks`: Use these hooks to memoize values and functions so they are not re-created on every render.
    `Lazy loading`: Dynamically import components using React.lazy() and Suspense to split the bundle and load parts of the app only when needed.
    `Avoid inline functions`: Passing inline functions or objects as props can cause unnecessary re-renders. Use useCallback for functions or useMemo for objects.
    `Code splitting`: Use tools like Webpack or Vite to split the JavaScript bundle into smaller chunks that can be loaded only when needed.
    `Debouncing and Throttling`: Use these techniques to limit how often a function is called during user input or scroll events.
    `Virtualization`: For rendering large lists of data, use libraries like react-window or react-virtualized to render only the visible items.

## What is the useCallback hook and how does it differ from useMemo?
  `useCallback` returns a memoized version of a callback function that only changes if one of its dependencies has changed. It helps prevent unnecessary re-creations of functions that are passed as props to child components.
  `useMemo` is used to memoize a computed value (not a function). It recomputes the value only when one of the dependencies changes. It's useful for expensive calculations that you don’t want to repeat unless necessary.

## How does React Context work and when should you use it?
  React Context is a way to share values across components without having to pass props manually at every level. It provides a Provider component that passes values down the component tree and a Consumer (or useContext hook) to read the value in child components.

## What is the significance of key in React lists?
  The key is a special prop used to uniquely identify elements in a list. React uses keys to optimize the re-rendering of components when a list is updated. It helps React identify which items have changed, been added, or removed, and it minimizes DOM manipulations by efficiently updating only the changed elements.
  Using an index as a key can sometimes cause issues when the order of elements changes, so it's better to use a unique identifier for each list item if possible.

## Explain the difference between React Router's Route and Switch components?
  `Route`: Defines a mapping between a URL and a component. When the URL matches the path prop, it renders the specified component.
  `Switch`: A wrapper component that ensures only the first Route or Redirect that matches the current location will be rendered. It is typically used to group Route components and ensure exclusive rendering.

## What is React.lazy and Suspense? How are they used?
  `React.lazy` is a function that allows you to dynamically import components to enable code splitting. It helps load components only when they are needed (i.e., on demand), reducing the initial load time of the application.
  `Suspense` is a wrapper component that allows you to define a fallback UI (like a loading spinner) while the lazy-loaded component is being fetched.

##  What is the useRef hook and when would you use it?
  `useRef` is a hook that returns a mutable object called ref. This object has a current property that persists across renders. You can use useRef to:
    Store a reference to a DOM element (similar to React.createRef in class components).
    Store mutable values that don’t cause re-renders when updated (e.g., holding onto an interval ID or tracking previous state values).

## What is the difference between React.memo and PureComponent?
  `React.memo` is a higher-order component for functional components that prevents re-rendering when the props have not changed. It’s essentially a performance optimization for functional components.
  `PureComponent` is a base class for class components that implements shouldComponentUpdate with a shallow comparison of props and state to prevent unnecessary re-renders

##  What is the purpose of useImperativeHandle in React?
  `useImperativeHandle` is a hook used in functional components to customize the instance value that is exposed to parent components when using ref. It’s often used with forwardRef to control what methods or properties are exposed to the parent component.

## Explain how React's Suspense and Error Boundaries work together?
  `Suspense` is used for handling lazy loading and asynchronous rendering. It allows you to show a loading state until the component is fully loaded.
  `Error Boundaries` are used to catch JavaScript errors in any part of the component tree, log those errors, and display a fallback UI instead of crashing the whole application.

## What are custom hooks, where are they used, exaplain with example?

## What are Controlled vs Uncontrolled component?
In React, form elements can be handled in two main ways: **controlled components** and **uncontrolled components**. Understanding the distinction between them is essential for effective state management in forms.

### **Controlled Components**

A controlled component is a form element whose value is controlled by React state. The state serves as the "single source of truth" for the form field. Every change in the field is reflected in the state via event handlers, such as `onChange`.
In this example, React manages the state of the input field through the inputValue state. Any updates to the field's value trigger an update in React’s state.

#### Example:

```jsx
  import React, { useState } from 'react';
  
  function ControlledComponent() {
    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
      />
    );
  }
```

### **UnControlled Components**

An uncontrolled component, on the other hand, does not rely on React state to track the value of the form field. Instead, the form element itself keeps track of the value. You can access the value using a ref.
In this case, the input value is not controlled by React state. Instead, a ref is used to directly access the input value when the form is submitted.

```jsx
import React, { useRef } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Entered value: ' + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

```


## What are Higher Order Components?


## How do you acheive Lazy Loading in React?
React Suspense is a powerful feature that allows components to **"wait"** for something before rendering — like code-splitting or even **asynchronous data** — while showing a fallback (like a loading spinner or skeleton UI).

Suspense lets you **defer rendering** part of the component tree **until some condition is met**, like loading a component or fetching data.

```jsx
  <Suspense fallback={<div>Loading...</div>}>
    <MyLazyComponent />
  </Suspense>
```
### ✅ What It Can Do

- Lazy-load components using `React.lazy()`
- Show fallback UIs (like spinners or skeletons)
- Work with data-fetching libraries that support Suspense (React Query, Relay)
- Enable streaming server rendering in React 18+
- Improve perceived performance using `startTransition()`

---

### ❌ What It Can't Do (Yet)

- Suspense **does not natively support `fetch()`** or regular async calls in components
- It **won’t catch event handler errors**
- **You still need class components** for error boundaries
- You must use **compatible libraries** for data fetching (like React Query or Relay)

---

### 🧩 Use Case Table

| Use Case                        | Supported       | Description                                                                 |
|---------------------------------|------------------|-----------------------------------------------------------------------------|
| `React.lazy()` (code-splitting) | ✅ Yes           | Lazy-load components with built-in support using `React.lazy()`            |
| Component fallback UI           | ✅ Yes           | Show fallback UI while waiting for a component or resource to load         |
| API calls using `fetch()`       | ❌ Not directly  | Requires integration with Suspense-ready libraries (e.g., React Query)     |
| Data fetching with React Query  | ✅ Yes           | Supported via `suspense: true` in query options                            |
| Data fetching with Relay        | ✅ Yes           | Built-in support for Suspense-driven data loading                          |
| Server Components (Next.js)     | ✅ Yes           | Use experimental `use()` hook for server-side data loading                 |
| Event handler errors            | ❌ No            | Suspense doesn't catch errors in event handlers                            |
| State transitions with `startTransition` | ✅ Yes | Improves UX by deferring non-urgent updates                                |
| Streaming server rendering (SSR)| ✅ Yes           | Supported in React 18 and frameworks like Next.js                          |

---

### 🔧 Sample Usage – Lazy-loading a Component

```jsx
import React, { Suspense, lazy } from 'react';

const MyComponent = lazy(() => import('./MyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyComponent />
    </Suspense>
  );
}
```

## How do one handle routing in react? read query params?


## What is redux, when to use it, how does it work?


## How do you test your react components?


## How do you handle Async tasks(Api calls, handling events, promises) in react?


## How to make Componenets more Reusable / Modular / Redable / Testable?


## How do you scaffold a new project if create-react-app is removed next day?
