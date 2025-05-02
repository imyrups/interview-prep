# Basic Level Questions

## What is React?
React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, manage state efficiently, and update the UI efficiently with its virtual DOM.

## What are react components?
Components are the building blocks of a React application. They are JavaScript functions(`Functional component`) or classes (`Class Component`) that accept inputs (called "props") and return a description of what should be rendered to the UI. 

## What is JSX in React?
JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It is used in React to describe what the UI should look like. JSX allows HTML-like code in JavaScript files and gets compiled into `React.createElement` calls.

## What are props in React?
Props (short for "properties") are used to pass data from a parent component to a child component. Props are read-only and cannot be modified by the child component. They allow components to be reusable with different data.

## What is state in React?
State is a built-in object in React that allows components to create and manage their own data. State is mutable, meaning it can be changed during the lifecycle of a component. When state changes, React re-renders the component.

## Diff between state and props?


## How do you manage state in react?


## What are stateful & stateless components?


## What is Virtual DOM?
The virtual DOM is a lightweight copy of the actual DOM in memory. React maintains this virtual DOM to optimize updates to the real DOM. When the state or props of a component change, React updates the virtual DOM first, compares it with the previous virtual DOM (a process called "reconciliation"), and then makes minimal updates to the actual DOM, improving performance.


## List the Life cycle hooks of react component?

    1. `constructor(props)`: called when the component is created. It is typically used to initialize state and bind methods to the component instance.

    2. `static getDerivedStateFromProps(nextProps, nextState)`: called right before every render, both during mounting and updating. It allows you to update the state based on changes to props.

    3. `componentDidMount()`: called once the component is mounted (i.e., inserted into the DOM). It is commonly used for tasks like fetching data, setting up subscriptions, or performing side effects.

    4. `shouldComponentUpdate(nextProps, nextState)`: called before a component re-renders, allowing you to prevent unnecessary re-renders by returning false when the state or props haven’t changed.

    5. `getSnapshotBeforeUpdate(prevProps, prevState)`: called right before the changes from `render()` are committed to the DOM. It allows you to capture some information (e.g., scroll position) before the DOM is updated.

    6. `componentDidUpdate(prevProps, prevState, snapshot)`: called immediately after the component updates (i.e., when state or props change). It can be used to perform additional operations after a component has re-rendered.

    7. `componentWillUnmount()`: called immediately before the component is unmounted and destroyed. It is typically used for cleanup tasks such as removing event listeners, canceling network requests, or clearing timers.

    8. `render()`:  is required in every class component and is used to render the JSX for the component. This method should be pure and return the same output given the same input (state and props).

Find Deep dive [here](https://medium.com/@arpitparekh54/understanding-the-react-component-lifecycle-a-deep-dive-into-the-life-of-a-react-component-74813cb8dfb5)

![lefecycle visualisation](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*U-pXh1j7GhUo1fE9Tz6dAQ.png)


## List the 7 prominent hooks by react?

    1. `useState` is a hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that value.

    2. `useEffect` is used to perform side effects in function components (e.g., fetching data, subscribing to events, manually changing the DOM). It replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

    3. `useContext` allows you to access the value of a context within a functional component. It's an easier way to consume context data without using the `Context.Consumer` component.

    4. `useReducer` is used to manage complex state logic in a component. It's an alternative to `useState` when you need more control over state updates, like in cases of multiple sub-values or when the next state depends on the previous one.

    5. `useMemo` is used to memoize expensive function calls and optimize performance. It returns a memoized value and recomputes it only when the dependencies change.

    6. `useCallback` is similar to `useMemo`, but it's specifically used for memoizing functions. It ensures that a function is only recreated if its dependencies change.

    7. `useRef` is used to persist values across renders without causing a re-render. It can also be used to reference DOM elements directly.
    
watch more in depth [here](https://m.youtube.com/playlist?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A)

### Extra Hooks:
1. useForm: [here](https://github.com/react-hook-form/react-hook-form)
2. beautiful react hooks: [here](https://github.com/antonioru/beautiful-react-hooks)



## What is the difference between a functional component and a class component?
`Functional Components`: These are simpler and stateless by default, but with hooks, they can now hold state and side effects. They are just JavaScript functions that return JSX.

`Class Components`: These are more complex and are ES6 classes that extend React.Component. They have lifecycle methods and can manage local state through this.state and this.setState.

## What is React Router?
React Router is a library used for routing in React applications. It allows you to navigate between different components/views based on the URL. React Router provides components like <Route>, <Link>, and <BrowserRouter> to handle routing in single-page applications (SPAs).

## What is the purpose of key in React lists?
The key prop helps React identify which items in a list are changed, added, or removed. It improves the performance of the reconciliation process by allowing React to efficiently update only the items that have changed.

## How do you handle events in React?
In React, events are handled using camelCase syntax (e.g., onClick, onChange). You pass a function as the event handler. The event handler can access the event object and be used to update state or perform other actions.

## What is React Context?
React Context is used for passing data through the component tree without having to manually pass props to every level. It is useful for managing global state such as themes, authentication, or language preferences.

## What are React Fragments?
In React, a **Fragment** is a component that lets you return multiple child elements without introducing an extra DOM node. It is especially useful for keeping the DOM tree clean and improving performance by avoiding unnecessary wrapper elements.
**Using `<React.Fragment>` or `<>`** :
```jsx
    import React from 'react';

   function MyComponent() {
     return (
       <React.Fragment> 
         <h1>Title</h1>
         <p>Some paragraph text.</p>
       </React.Fragment>
     );
   }

    function MyComponent() {
      return (
        <>
          <h1>Title</h1>
          <p>Some paragraph text.</p>
        </>
      );
    }
```

## why do we use key in react fragments?



## What are synthetic events in react?
