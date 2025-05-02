### Advanced level questions

##  What is "Reconciliation" in React, and how does it optimize rendering performance?

Reconciliation is the process by which React determines how to update the DOM based on changes to the component's state or props. It compares the old Virtual DOM with the new one and applies the minimal set of changes to the actual DOM, optimizing performance.

Key Points in Reconciliation:
    - Keyed Updates: React uses keys to identify elements in a list and efficiently update only the changed elements.
    
    - Shallow Comparison: React compares components at a shallow level. If the type of a component has changed, React will discard the previous tree and render the new one from scratch.
    
    - Batched Updates: React batches multiple updates together to reduce the number of re-renders, improving performance.



## How does React's reconciliation algorithm work?
React’s reconciliation algorithm, also known as "diffing," is responsible for efficiently updating the DOM when the state or props of a component change. The algorithm works by comparing the new Virtual DOM with the previous one (a process called "diffing"). Here’s how it works:

1. Two Types of Updates:
   
  - `Reconciliation`: When a component’s state or props change, React creates a new Virtual DOM and compares it with the old one to figure out what changed.
    
  - `Keyed Updates`: React uses the key attribute in lists to optimize updates by identifying which items in a list were added, removed, or reordered.

2. Batched Updates: React batches updates to minimize the number of renders. Instead of updating the DOM every time state or props change, React groups the changes together and processes them in a single render cycle.

3. Efficient Diffing: React only compares elements with the same type. If two components have different types, React completely replaces the component. If the types are the same, React performs a shallow comparison of props and state to decide what needs to be updated.


## 5 stages of reconciliation?
### 1. **Triggering a Render (Component Update)**

Reconciliation begins when a component's state or props change. This triggers a re-render of the component. The primary triggers are:

- **State changes**: When the state of a component changes (via `setState` for class components or `useState` for functional components).
- **Prop changes**: When the props passed from the parent component to a child component change.
- **Force re-render**: By calling `forceUpdate` in class components, you can manually trigger a re-render, even if state or props haven’t changed.

React then marks the component as needing an update and proceeds to the next stage, where it builds a new virtual DOM.

---

### 2. **Building the New Virtual DOM Tree**

After triggering a re-render, React constructs a **new virtual DOM** to represent the updated UI. The virtual DOM is a lightweight, in-memory representation of the UI. This step is essential for comparison in the next phase, where React will compare the new virtual DOM with the previous one.

- **What happens here?** React calls the `render` method for class components or the function body for functional components to generate the virtual DOM. The result is a tree of virtual DOM nodes, which are plain JavaScript objects representing the current state of the UI.
- **Why is it important?** The new virtual DOM will be compared with the old one in the diffing process, allowing React to find and apply the minimal changes to the real DOM.

---

### 3. **Diffing the Virtual DOMs**

The next step in reconciliation is the **diffing algorithm**. React compares the newly created virtual DOM with the previous version of the virtual DOM to identify the differences (or "diffs").

#### React compares the following during this stage:
1. **Root Element Comparison**: React first checks if the root element of the virtual DOM trees has changed. If the root element type has changed (for example, from `<div>` to `<h1>`), React will remove the old node and replace it with the new one.
   
2. **Children Comparison**: If the root element hasn't changed, React recursively compares the children of the old and new virtual DOM trees.
   
3. **Node Type Comparison**: For nodes of the same type, React compares their properties (e.g., `class`, `style`, event handlers). If any property has changed, React updates it in the DOM.
   
4. **Keys in Lists**: When rendering lists, React uses the `key` prop to efficiently identify which items have changed, been added, or removed. Keys help React distinguish between elements in a list and match them across renders.

The diffing process ensures that React only updates the parts of the UI that have actually changed, making the update process more efficient.

---

### 4. **Updating the Real DOM (Reconciliation Phase)**

Once the diffing is complete, React has identified the differences between the old and new virtual DOMs. In this phase, React applies those changes to the **real DOM**.

#### The steps include:
1. **Adding New Nodes**: React inserts any new elements that were added in the updated virtual DOM but did not exist in the previous one.
   
2. **Removing Old Nodes**: React removes elements that are no longer part of the updated virtual DOM.
   
3. **Updating Existing Nodes**: If the element types are the same, React updates the properties (e.g., attributes, event handlers) of the corresponding DOM nodes.

By applying only the necessary updates, React minimizes the number of operations needed to synchronize the real DOM with the virtual DOM, which boosts performance.

---

### 5. **Commit Phase (Applying Changes)**

After the reconciliation phase, React enters the **commit phase**, where it applies all changes to the real DOM and runs any necessary lifecycle methods or hooks.

#### This phase involves two parts:
1. **Before Mutation**: React calls lifecycle methods like `componentWillUpdate` (class components) or `getSnapshotBeforeUpdate` just before it applies changes to the DOM.
   
2. **Mutating the DOM**: React updates the real DOM, including inserting, removing, or updating elements. This is where React makes the actual DOM manipulations.

3. **After Mutation**: After the mutation, React calls lifecycle methods such as `componentDidUpdate` (class components) or triggers the `useEffect` hooks (functional components) to notify the components about the completed update.

The commit phase ensures that React applies changes in a consistent manner while running the necessary lifecycle methods, allowing components to respond to updates.

---

## Why Reconciliation is Important

Reconciliation allows React to:
- **Minimize DOM updates**: By updating only the necessary parts of the DOM, React avoids unnecessary reflows and repaints, which can be costly in terms of performance.
- **Improve performance**: React's diffing algorithm optimizes the rendering process by making sure that only the differences between the previous and new virtual DOM are applied.
- **Ensure a smooth user experience**: By efficiently synchronizing the UI with the application state, React ensures that the application remains fast and responsive, even with complex and dynamic UIs.

---

## Conclusion

The 5 stages of React reconciliation are key to understanding how React updates the DOM efficiently. By using a virtual DOM and applying a diffing algorithm, React ensures that the UI is updated with minimal performance overhead. 

The stages of reconciliation—**Triggering a Render**, **Building the New Virtual DOM**, **Diffing the Virtual DOMs**, **Updating the Real DOM**, and the **Commit Phase**—ensure that only the necessary changes are made to the real DOM, optimizing performance and providing a smooth user experience.

Understanding these stages helps developers build more efficient React applications and optimize rendering behavior for better performance.



##  How does the Context API differ from Redux? When would you choose one over the other?
Both the Context API and Redux are used for state management in React, but they have different use cases:

    - Context API:
  
       - The Context API is a built-in React feature for passing data through the component tree without having to manually pass props at every level.
       
       - Ideal for low-to-moderate complexity state management, such as themes, authentication, language preferences, etc.
       
       - Can lead to performance issues if used for frequently changing state since it triggers re-renders for all components that consume the context.
       
    - Redux:
    
       - Redux is a more complex and flexible library for managing application state, often used for more global state management in large applications.
       
       - Uses a centralized store and provides middleware for handling asynchronous actions (e.g., Redux Thunk, Redux Saga).
       
       - Redux is more suited for complex state logic, especially in large-scale applications where actions need to be dispatched from various components, and side effects need to be handled.

When to use Context API:
    For small to medium-sized apps with shared data like themes, authentication, and settings.

When to use Redux:
    For larger applications with complex state logic, actions, reducers, and middleware (such as for handling async operations like data fetching).


## What is Server-Side Rendering (SSR) in React? How does it differ from Client-Side Rendering (CSR)?

Server-Side Rendering (SSR):
  - SSR involves rendering the React application on the server and sending a fully rendered HTML page to the client.
  - The initial load of the page is fast, as the HTML is already generated on the server.
  - After the page is loaded, React takes over to handle client-side interactions (this is known as hydration).
  
  Benefits:
    - SEO-friendly: Since the content is pre-rendered, search engines can easily crawl and index the page.
    - Faster initial load: The browser receives fully rendered HTML, reducing the time to first meaningful paint.
  
  Example of SSR setup:
    - Next.js is a popular framework for SSR in React.

Client-Side Rendering (CSR):
  - CSR involves rendering the React application entirely on the client side using JavaScript. Initially, the server sends a minimal HTML file and loads the necessary JavaScript to render the UI.
  - The content is rendered in the browser, and React manages the UI updates.
  
  Benefits:
    - Rich Interactivity: Since the rendering happens on the client-side, the UI can be highly interactive without the need for full page reloads.
    - Faster subsequent navigation: Since the app has already been loaded, navigating between pages is fast.
  
  Example of CSR:
    - Create React App is an example of a CSR setup.

SSR vs CSR:
    - SSR is better for SEO and initial load performance but can be more complex to set up.
    - CSR is better for dynamic web apps where interactivity is prioritized, and SEO is not a concern.

## What are some common performance optimization techniques in React?
- Memoization:
    - Use React.memo to prevent unnecessary re-renders of functional components when their props don’t change.
    - Use useMemo to memoize expensive computations.
    - Use useCallback to memoize functions that are passed as props to child components, preventing unnecessary re-renders.
- Lazy Loading:
    - Split your code into smaller bundles using React.lazy() and Suspense, so only the components needed for the current view are loaded.
- Virtualization:
    - Use libraries like react-window or react-virtualized to render only the visible elements in large lists, improving performance for long lists or tables.
- Avoid Inline Functions:
    - Inline functions or objects passed as props to child components can cause unnecessary re-renders. Use useCallback or move the function outside the render method.
- ShouldComponentUpdate / PureComponent:
    - Use shouldComponentUpdate in class components or PureComponent to avoid re-renders for props that haven't changed.
Use of Web Workers:
    - For expensive tasks like image processing or computations, offload the work to web workers to keep the UI thread free.
Avoiding Large React Trees:
    - Keep your component tree shallow and avoid deeply nested components where possible to reduce the overhead of reconciliation.

## What is React Concurrent Mode, and how does it improve performance?

- React Concurrent Mode is an experimental feature that allows React to work on multiple tasks at the same time. It makes rendering more efficient by breaking the rendering work into smaller chunks and spreading it out over time.
    - Prioritizing UI Updates: With Concurrent Mode, React can prioritize urgent tasks like animations and interactions, ensuring that users always experience smooth and responsive UIs.
    - Interruptible Rendering: If there is a higher priority update (e.g., a user interaction), React can interrupt the current render to handle that update and then resume the previous one.
    - Suspense for Data Fetching: In Concurrent Mode, Suspense is used not just for lazy loading components but also for data fetching. It can pause rendering until the necessary data is ready, showing loading states while waiting for the data.

- Benefits of Concurrent Mode:
    - Improved User Experience: By rendering UI updates in smaller chunks, Concurrent Mode allows for smoother transitions and avoids blocking the main thread, leading to a more responsive app.
      
    - Better Handling of Delays: UI updates that would normally be blocked due to expensive operations (like network requests) are handled more gracefully, reducing janky interactions.

## Explain the concept of "Render Props" in React. How is it different from higher-order components (HOCs)?

Render Props is a pattern where a component takes a function as a prop and calls that function with its own state or other data. 

The function returns a JSX element, allowing the parent to define how the component's state is rendered.

Differences from Higher-Order Components (HOCs):
    - Render Props passes a function that returns JSX, allowing more flexible and dynamic control over how data is rendered.
    
    - HOCs are functions that take a component and return a new component with additional props. HOCs are typically used for adding common functionality to multiple components (e.g., adding authentication or data fetching logic).
    
    - Render Props are generally more flexible and can work with components that need to be controlled by the parent.


## Explain the concept of “Error Boundaries” in React. How do they work, and how do they differ from try/catch blocks?

Error Boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the entire app. Error boundaries prevent the whole React component tree from crashing when a JavaScript error occurs.

    - How They Work: Error boundaries implement componentDidCatch(error, info) or the static getDerivedStateFromError() lifecycle methods to handle errors.

    - Fallback UI: You can render a custom fallback UI when an error occurs in the child component.

Difference from try/catch:
    
    - try/catch is used to handle errors in functions or code blocks, while Error Boundaries are specific to handling errors in React component rendering and lifecycle methods. They cannot catch errors in event handlers or asynchronous code.


## Performance ptimization in react?
It can be optimised at mutiple levels:
   - Bundler Level: minify js, css
   - Assets level:
   - CDN / Server level:
   - Rendering comp faster:

## How do we do assest optimization in react?  
Asset optimization in React is essential for improving the performance of your application by reducing load times, file sizes, and bandwidth usage. Here are key strategies:
   - Minimize and Bundle JavaScript:
        - Use Webpack to bundle and minify JavaScript.
        - Implement code splitting and tree shaking to load only the necessary code.
        - Use React.lazy and Suspense to dynamically load components.
   - Optimize CSS:
        - Minify CSS files with tools like cssnano.
        - Use CSS Modules or Styled-components to scope styles locally.
        - Remove unused CSS with PurgeCSS or PurifyCSS.
   - Optimize Images:
        - Compress images with tools like TinyPNG or Imagemin.
        - Use modern formats like WebP and SVG.
        - Implement lazy loading for images and use responsive images (srcset).
   - Font Optimization:
        - Use font subsetting and font-display: swap for faster rendering.
        - Preload critical fonts for immediate access.
   - Use a CDN:
        - Serve assets from a Content Delivery Network (CDN) to reduce latency by delivering content from geographically distributed servers.\
   - Enable Caching:
        - Use Cache-Control headers and Service Workers for efficient client-side caching.
   - Leverage HTTP/2 or HTTP/3:
        - These newer protocols allow faster delivery of assets, especially when there are multiple requests.
   - Remove Unused Code:
        - Use tree shaking for unused JavaScript and PurgeCSS for unused CSS.
   - Continuous Performance Monitoring:
        - Tools like Google Lighthouse, WebPageTest, and React Profiler can help monitor and improve app performance continuously.

## How do we effective do Code splitting, Chuking in react?
Code splitting and chunking are essential techniques for optimizing React applications. They allow large JavaScript bundles to be split into smaller, more manageable parts, which are only loaded when necessary. This results in faster load times and an overall better user experience. This guide explains how to implement effective code splitting and chunking in React.
Code splitting is the process of breaking up large JavaScript bundles into smaller chunks, allowing portions of your application to be loaded on demand rather than all at once. React provides built-in mechanisms, such as `React.lazy()` and `Suspense`, to enable easy code splitting.
### **1. Code Splitting with `React.lazy` and `Suspense**
`React.lazy()` allows you to dynamically import components, and `Suspense` lets you provide a fallback UI (such as a loading spinner) while the component is being loaded.

#### Example:
```jsx
import React, { Suspense } from 'react';

// Dynamically import the component
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App = () => (
  <div>
    <h1>Welcome to React!</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  </div>
);

export default App;
```
### **2. Code Splitting with Webpack**
Webpack can automatically split your code into separate chunks based on entry points or dynamic imports.
#### Webpack Configuration
```js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all', // Automatically split all types of chunks (async and non-async)
    },
  },
};
```
You can also implement route-based code splitting with react-router-dom to load components based on the current route.
#### Example:
```jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
```
### **3. Dynamic Import with import()**
The `import()` function allows you to dynamically load modules only when needed, which is great for non-critical features.
#### Example
```jsx
import React, { Suspense, useState } from 'react';

const App = () => {
  const [showComponent, setShowComponent] = useState(false);

  const loadComponent = () => {
    // Dynamically import a component when needed
    import('./LazyComponent').then((module) => {
      const Component = module.default;
      setShowComponent(<Component />);
    });
  };

  return (
    <div>
      <button onClick={loadComponent}>Load Component</button>
      {showComponent}
    </div>
  );
};

export default App;
```
### **4. Vendor Chunking**
To optimize caching, you can separate third-party libraries (such as React or Lodash) into their own chunk. This allows them to be cached independently of your app code.
#### Webpack Configuration
``js
module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
  },
};
``


## How do you handle Role Based Access Control? or Procted Routes?
1. AuthContext and useAuth:
   - The AuthContext provides user authentication status and user data to the entire app.
   - useAuth is a custom hook that lets you access the authentication state anywhere in the app.
2. AuthProvider:
   - Wraps the app in a context provider to share authentication info with all components.
   - The example uses local storage to persist the user session after page reloads.
3. PrivateRoute Component:
   - This component checks whether the user is authenticated and whether they have the correct role.
   - If the user is not authenticated, it redirects them to the login page.
   - If they don’t have the correct role (authorization), it redirects to the Unauthorized page.
   - If everything is okay, it renders the protected route.
4. Roles:
   - Each PrivateRoute accepts a roles prop, which defines which roles are allowed to access the route.
   - If the user doesn’t have an allowed role, they are redirected to the Unauthorized page.
    
```jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  // Example of fetching user data from local storage or API
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')); // or from API
    setAuth(user);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivateRoute = ({ children, roles, ...rest }) => {
  const { auth } = useAuth();

  // If not authenticated, redirect to login page
  if (!auth) {
    return <Redirect to="/login" />;
  }

  // If the user's role isn't in the allowed roles list, deny access
  if (roles && !roles.includes(auth.role)) {
    return <Redirect to="/unauthorized" />;
  }

  return <Route {...rest} render={() => children} />;
};

const AdminPage = () => <h1>Admin Page</h1>;
const UserPage = () => <h1>User Page</h1>;
const PublicPage = () => <h1>Public Page</h1>;
const LoginPage = () => <h1>Login Page</h1>;
const UnauthorizedPage = () => <h1>Unauthorized Access</h1>;

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/public">
            <PublicPage />
          </Route>
          <PrivateRoute path="/admin" roles={['admin']}>
            <AdminPage />
          </PrivateRoute>
          <PrivateRoute path="/user" roles={['user', 'admin']}>
            <UserPage />
          </PrivateRoute>
          <Route path="/unauthorized">
            <UnauthorizedPage />
          </Route>
          <Redirect to="/public" />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;

```

## How do you handle Sites where Loading icons is strictly restricted? (Shimmer UI)


## How do you make sure styles from one component does not affect other component? or vice versa have some shared styles?
### 1. Scoped CSS (CSS Modules)
CSS Modules provide local scoping of styles by automatically generating unique class names. This ensures that styles from one component do not accidentally affect another.
```css
/* Button.module.css */
.button {
  padding: 10px 20px;
  background-color: blue;
  color: white;
}
```
```jsx
import React from 'react';
import styles from './Button.module.css';  // Import CSS Module styles

const Button = () => {
  return <button className={styles.button}>Click Me</button>;
};

export default Button;
```
### 2. Styled Components (CSS-in-JS)
Styled Components is a popular CSS-in-JS library that allows you to write plain CSS within JavaScript files while automatically scoping styles to the component. It also provides powerful features like dynamic styling and themes.
```jsx
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

const App = () => {
  return <Button>Click Me</Button>;
};

export default App;
```
### 3. Inline Styles
Inline styles in React are applied directly to elements via the style attribute. Although not as powerful as CSS Modules or Styled Components (e.g., no pseudo-classes like :hover), inline styles still provide style isolation since they are directly associated with the component.
```jsx
const Button = () => {
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  return <button style={buttonStyle}>Click Me</button>;
};

export default Button;
```
### 4. Global Styles with Styled Components (Themes)
While CSS Modules and Styled Components handle component-specific styles well, there are scenarios where you need shared global styles or themes. Styled Components provide a great solution for managing global styles via ThemeProvider.
```jsx
const theme = {
  primaryColor: 'blue',
  secondaryColor: 'darkblue',
  padding: '10px 20px',
};
```
```jsx
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>Click Me</Button>
    </ThemeProvider>
  );
};

export default App;
```
```jsx
import styled from 'styled-components';

const Button = styled.button`
  padding: ${({ theme }) => theme.padding};
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;
```
### 5. Tailwind CSS (Utility-First CSS)
Tailwind CSS is a utility-first CSS framework that provides predefined utility classes. These classes can be composed to create components. It allows you to build designs directly in your JSX with minimal custom styles, avoiding the need for unique class names.
```jsx
const Button = () => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
    Click Me
  </button>
);

export default Button;
```
### 6. BEM (Block-Element-Modifier) Methodology
If you still want to use global styles (regular CSS), BEM is a methodology that ensures your class names remain modular and predictable. It’s a naming convention to create clear distinctions between different parts of the UI (blocks, elements, and modifiers).
```css
/* Button.css */
.button {
  padding: 10px 20px;
  background-color: blue;
  color: white;
}

.button--primary {
  background-color: darkblue;
}
```
```jsx
import React from 'react';
import './Button.css';

const Button = ({ primary }) => {
  return <button className={`button ${primary ? 'button--primary' : ''}`}>Click Me</button>;
};

export default Button;
```

## How do you make sure the react application accessibility compliant?
- Use Semantic HTML
   - Use tags like <header>, <main>, <nav>, <article> for meaningful structure.
- Ensure Keyboard Accessibility
   - All interactive elements should be accessible via Tab and keyboard events.
   - Use tabIndex, onKeyDown, and proper focus management.
- Add Alt Text for Images
   - Provide descriptive alt attributes.
   - Use alt="" for decorative images.
- Use ARIA Roles & Attributes When Needed
   - Apply role, aria-label, aria-live, etc., for dynamic/custom UI components.
- Maintain Sufficient Color Contrast
   - Text should have high contrast with background.
   - Don’t rely on color alone to convey information.
- Build Accessible Forms
   - Associate labels with inputs using <label htmlFor="id">.
   - Group related inputs using <fieldset> and <legend>.
- Provide Skip Links
   - Add "Skip to Content" links for easier navigation.
- Test Accessibility
   - Use tools like axe, Lighthouse, or react-axe to catch issues early.
- Avoid Auto-Playing/Flashing Content
   - Give users control over media.
   - Avoid content that flashes rapidly.
- Keep Layouts Predictable
   - Consistent layouts help users with cognitive challenges.

## How do you make sure the security in react app?
### 1. Prevent Cross-Site Scripting (XSS)

XSS attacks occur when an attacker injects malicious scripts into web pages that are viewed by other users.

#### How to prevent XSS in React:
- **React's built-in escaping mechanism**: React escapes content inside JSX curly braces (`{}`), ensuring user input is rendered as text, not executable code.
  
  ```jsx
  const UserInput = ({ input }) => {
    return <div>{input}</div>;  // React will escape `input` automatically
  };
  ```
- **Avoid using dangerouslySetInnerHTML**: Only use it when necessary and sanitize the HTML content first (e.g., using libraries like DOMPurify).
  ```jsx
  Avoid using dangerouslySetInnerHTML: Only use it when necessary and sanitize the HTML content first (e.g., using libraries like DOMPurify).
  ```
### 2. Authentication and Authorization
Proper authentication and authorization are crucial for securing user data and app functionality.
#### How to handle authentication:
- **Use JWT (JSON Web Tokens)**: Store JWT tokens in HTTP-only cookies for better security.
  ```js
   // Example of setting JWT in cookies
   document.cookie = `token=${jwtToken}; HttpOnly; Secure; SameSite=Strict`;
   ```
- **OAuth/OpenID**: For third-party authentication, consider using OAuth (Google, Facebook, etc.).

### 3. Secure API Requests (Backend Security)
APIs are a common target for attackers. Securing API calls is essential.
#### How to secure API requests:
   Use HTTPS: Ensure all traffic between your React app and APIs is encrypted.
   CORS (Cross-Origin Resource Sharing): Set CORS headers on your server to only allow trusted domains to interact with your API.
   Rate Limiting: Protect your APIs from abuse by limiting the number of requests per user.

### 4. Protect Against Cross-Site Request Forgery (CSRF)
CSRF attacks occur when an attacker tricks a user into making unwanted requests to a server with their credentials.
#### How to prevent CSRF:
   Use Anti-CSRF Tokens: Add a unique CSRF token to all sensitive requests and validate them on the server.
   SameSite Cookies: Use the SameSite cookie attribute to restrict cookies from being sent with cross-site requests.
   ```js
   document.cookie = "token=jwtToken; SameSite=Strict; Secure; HttpOnly";
   ```

### 5. Handle User Input Properly
User input is a frequent attack vector for XSS and SQL Injection.
#### How to handle user input:
   Sanitize Input: Always sanitize user input to prevent malicious code from being executed.
   Limit Input Length: Restrict the size of inputs to prevent buffer overflows.
   Use Parameterized Queries: Prevent SQL Injection by using parameterized queries when interacting with the database.

### 6. Secure React Routes (Protected Routes)
You should ensure that only authenticated users can access certain routes.
#### How to implement protected routes:
   Private Route Component: A custom PrivateRoute component can be used to restrict access based on user authentication.
   ```jsx
   const PrivateRoute = ({ component: Component, ...rest }) => {
     const isAuthenticated = checkIfUserIsAuthenticated();
     return (
       <Route
         {...rest}
         render={(props) =>
           isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
         }
       />
     );
   };
   ```
### 7. Secure Client-Side Storage
Storing sensitive information like tokens in localStorage can expose your app to attacks.
#### How to secure client-side storage:
   Use HTTP-only Cookies for sensitive data like authentication tokens.
   Avoid storing sensitive data in localStorage due to the risk of XSS attacks.

### 8. Minimize Attack Surface
Reducing the attack surface is critical for enhancing security.
#### How to minimize the attack surface:
   Remove unused dependencies: Regularly audit and remove unnecessary libraries.
   Implement Content Security Policy (CSP): CSP helps mitigate attacks like XSS by controlling which resources can be loaded.
   Disable debugging in production: Make sure development tools are disabled in production.

### 9. Handle Error Handling and Logging
Proper error handling can prevent sensitive data from being exposed.
#### How to handle errors:
   Do not expose stack traces or sensitive error information in production.
   Secure logging: Use services like Sentry to track errors without exposing sensitive information.

### 10. Regular Security Audits
Regular security audits help identify vulnerabilities and fix them promptly.
#### How to perform audits:
   Use tools like npm audit, Snyk, or Retire.js to check for vulnerabilities in your dependencies.
   Keep dependencies updated: Regularly update dependencies to avoid known security issues.


## What are some of the design patterns used in react o share logic and organize components more effectively?

https://baguilar6174.medium.com/react-design-patterns-6ab55c5ebafb
https://refine.dev/blog/react-design-patterns/

1. Render Props Pattern:
      - A render prop is a technique for sharing code between React components using a function that returns a React element.

2. Container / Presentational Pattern (Smart/Dumb Components):
      - This is about separating logic from UI. The idea is to isolate the data-fetching/state-management logic (container) from the UI layout (presentational).

3. Higher-Order Components (HOC):
      - A function that takes a component and returns a new component with added behavior.
  
4. Hooks Pattern (Modern React):
      - With React hooks, especially useState and useEffect, you can share logic through custom hooks instead of HOCs or render props.


## What are error boundaries and how is that implemented?

## What is an Error Boundary?

An **Error Boundary** is a React component that catches JavaScript errors in the **component tree below it** and displays a **fallback UI** instead of crashing the entire app.

# ✅ It catches:
- Rendering errors
- Lifecycle errors
- Constructor errors of child components

# ❌ It doesn't catch:
- Errors in event handlers
- Asynchronous code (e.g., `setTimeout`)
- Server-side rendering errors
- Errors inside the error boundary itself

---

# 🛠️ How to Implement an Error Boundary

Error boundaries must be class components (as of React 18).

# Basic Example:

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error (to console or error reporting services)
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}
```
# Usage

```jsx
   <ErrorBoundary fallback={<div>Oops! Custom Error UI</div>}>
     <ComponentThatMightCrash />
   </ErrorBoundary>
```
```jsx
   render() {
     if (this.state.hasError) {
       return this.props.fallback || <h2>Something went wrong.</h2>;
     }
     return this.props.children;
   }
```

Here's a **complete example** showing how to use **Web Workers** in a React application. This is helpful for offloading **CPU-intensive tasks** (e.g., large computations) so the UI stays responsive.

---

## 🛠️ Goal: Run a heavy computation in a Web Worker from a React component

---

### ✅ Step 1: Create the Worker File

Create a file called `worker.js` in your `src` folder (or `public` if not using a bundler that supports workers directly).

#### `src/worker.js`:

```js
self.onmessage = function (e) {
  const number = e.data;
  
  // Simulate heavy computation (e.g., a large factorial)
  const result = fibonacci(number);

  self.postMessage(result);
};

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

> ⚠️ This worker runs a recursive Fibonacci computation to simulate a CPU-intensive task.

---

### ✅ Step 2: Create a React Component That Uses the Worker

You’ll import the worker using `new Worker(new URL('./worker.js', import.meta.url))` which works in tools like Vite or Webpack 5+ with `type: "module"` workers.

#### `App.jsx`:

```jsx
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const workerRef = useRef(null);
  const [input, setInput] = useState(35); // Large number to show offloading
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Create the web worker
    workerRef.current = new Worker(new URL('./worker.js', import.meta.url), {
      type: 'module',
    });

    // Handle messages from the worker
    workerRef.current.onmessage = (e) => {
      setResult(e.data);
      setLoading(false);
    };

    return () => {
      // Clean up worker on component unmount
      workerRef.current.terminate();
    };
  }, []);

  const handleCalculate = () => {
    setLoading(true);
    setResult(null);
    workerRef.current.postMessage(input);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Web Worker Demo (Fibonacci)</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(parseInt(e.target.value))}
      />
      <button onClick={handleCalculate}>Calculate</button>

      {loading && <p>Calculating in Web Worker...</p>}
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default App;
```

---

### ✅ Step 3: Ensure Your Build Tool Supports Web Workers

If you’re using **Vite**, **Webpack 5+**, or **CRA with react-app-rewired**, the `new URL(..., import.meta.url)` pattern is supported for importing workers.

Otherwise, you may need to move the worker file to the `/public` folder and load it using:

```js
new Worker('/worker.js'); // no module support
```

But then you’ll need to make sure not to use ES modules inside the worker.

---

### 🧠 Summary

| Feature           | Description                           |
| ----------------- | ------------------------------------- |
| `worker.js`       | Contains background logic (e.g. calc) |
| `Worker` in React | Creates, posts, and listens to worker |
| `import.meta.url` | Helps bundle worker in modern builds  |
| `terminate()`     | Cleans up worker on unmount           |

---









