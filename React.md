# React Interview Questions and Answers

**1. What is React?**
   
React is an open-source front-end JavaScript library most popular for single-page web applications. It helps in building interactive and complex UIs for websites or mobile apps. React.js was released for use in 2013 and has since become one of the most trusted and widely used technologies. It has built one of the largest developer communities around itself.

**2. List some of React.js’ features.**

Important features of React.js include:

**Virtual DOM:** 
React uses a virtual DOM instead of a real DOM to optimize rendering.

**Server-side Rendering:** 
React can render HTML files on the server, improving performance.

**Unidirectional Data Flow:** 
Data flows in one direction, making the application easier to understand and debug.

**JSX:** 
JavaScript XML, a syntax extension for JavaScript, allows writing HTML structures within JavaScript code.

**Component-Based Architecture:** 
UI is divided into reusable components.

**3. What are the main advantages of React.js?**

The main advantages of React.js are:

**Performance**: 
React enhances application performance by using a virtual DOM.

**Flexibility**: 
It can be used on both client-side and server-side.

**Readability**: 
JSX improves the readability of code.

**Integration**: 
React can be easily integrated with frameworks like Angular and Meteor.

**Testing**: 
Writing UI test cases is easier with React.

**4. What is JSX?**

JSX is a syntax extension for JavaScript in React.js. With JSX, it is easy to define how the user interface should look. It allows you to write HTML structures in the same file that contains JavaScript code. 
For example:
```
const element = <h1>Hello, world!</h1>;
```
**5. Describe an event in React.js.**

In React.js, events are actions triggered by user interactions or system-generated actions. For example, clicking a button, pressing a key, or loading a page. In React, event handling is slightly different from plain HTML:

-> Events are named using camelCase instead of lowercase.

-> You pass a function as the event handler instead of a string.

**Example:**
```
<button onClick={handleClick}>Click me</button>
```
**6. How do Lists work in React.js?**

Lists in React.js are created similarly to how they are in regular JavaScript. They are useful for displaying data in an orderly manner, such as menus. To traverse lists, the map() function is used.
**For example:**
```
const numbers = [2, 4, 6, 8, 10];
const multiplyNums = numbers.map(number => number * 5);
console.log(multiplyNums); // Output: [10, 20, 30, 40, 50]
```
**7. Why are keys used in React.js Lists?**

Keys are used in React.js lists to help identify which items have changed, are added, or are removed. Keys make it easier for React to update the UI efficiently by determining which items need to be re-rendered.

**8. Is HTML used in React?**

No, React uses JSX (JavaScript XML) instead of regular HTML. JSX converts HTML tags into React elements.

**9. What is the release date of React?**

React was released in March 2013.

**10. Can you tell two downsides of React?**

Two downsides of React are:

**Integration with MVC Frameworks:** 
It can be difficult to integrate React with MVC frameworks like Rails.

**Learning Curve:**
Developers need to learn how to integrate user interfaces into MVC frameworks.

**11. Can web browsers read JSX directly?**

No, web browsers cannot read JSX directly. Browsers can only read regular JavaScript objects. JSX needs to be transformed into regular JavaScript objects using tools like Babel.

**12. What is an event in React?**

An event is an action triggered by a user or system, such as a key press or a mouse click. React events are named using camelCase, and with JSX, you pass a function as the event handler. For example:
```
<button onClick={handleClick}>Click me</button>
```
**13. What is a state in React?**

State is a built-in React object used to store data or information about the component. The state can change over time, and whenever it changes, the component re-renders. State changes in response to user actions or system-generated events.

**14. What is a higher-order component in React?**

A higher-order component (HOC) is a function that takes a component and returns a new component. HOCs are used to add functionality to existing components in a reusable way. They help keep components simple and enable reusability.
For example:
```
const withLogger = WrappedComponent => {
  return class extends React.Component {
    componentDidMount() {
      console.log('Component mounted');
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
```
**15. Explain the ‘Store’ feature.**

The store is a feature of Redux, a state management library for React, that allows the application to save the entire state in one place. This enables you to get regular updates from the store directly and manage the state more efficiently.

**16. What is the Virtual DOM, and how does it work in React?**

The Virtual DOM is a lightweight, in-memory representation of the real DOM. When a component's state or props change, React creates a new Virtual DOM tree, calculates the differences between the new and old trees, and efficiently updates the real DOM to match the new tree.

**17. What are props in React?**

Props (short for properties) are read-only attributes passed from a parent component to a child component. They allow data to flow from one component to another.
For example:
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
**18. What is the difference between state and props?**

**State:** State is a built-in object that holds data about the component. It is mutable and managed within the component.

**Props:** Props are read-only attributes passed from a parent component to a child component. They are immutable and used to pass data and event handlers down the component tree.

**19. What are React lifecycle methods?**

Lifecycle methods are special methods in React components that are called at different stages of a component's life. Some of the important lifecycle methods are:

**-> componentDidMount():** Called after the component is mounted (inserted into the DOM).

**-> componentDidUpdate(prevProps, prevState):** Called after the component is updated.

**-> componentWillUnmount():** Called before the component is unmounted (removed from the DOM).

**20. What is Redux, and why would you use it with React?**

Redux is a state management library for JavaScript applications. It helps manage the state of an application predictably. React uses Redux to manage complex state logic, share state across components, and make state changes easier to debug.

**21. What is the context API in React?**

The Context API is a feature in React that allows components to share data without passing props down through multiple levels of the component tree. It is useful for managing global state, themes, user information, and more.

**For example:**
```
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button className={theme}>Button</button>;
}
```
**22. What are React hooks?**

Hooks are functions that let you use state and other React features in functional components. Some commonly used hooks are:

useState(): Manages state in a functional component.
useEffect(): Performs side effects in functional components.
useContext(): Consumes a context value.
useReducer(): Manages state using a reducer function.

**23. How does the useEffect hook work?**

The useEffect hook allows you to perform side effects in functional components. It runs after the component renders and can return a cleanup function to run before the component unmounts or before the effect runs again. For example:
```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    return () => {
      console.log('Cleanup');
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
**24. What is the difference between controlled and uncontrolled components in React?**

**Controlled Components:** In controlled components, form data is handled by the React component's state. The value of the input is controlled by the state.

**Uncontrolled Components:** In uncontrolled components, form data is handled by the DOM itself. Refs are used to access the form values.

**Example of a controlled component:**
```
class ControlledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    );
  }
}
```
**Example of an Uncontrolled component:**

```
class UncontrolledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.inputRef.current.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.inputRef} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
```
**25. What is a React Router?**

React Router is a standard library for routing in React applications. It enables navigation between different views or pages in a React application, allows changing the browser URL, and keeps the UI in sync with the URL. For example:
```
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
```
**26. What is code-splitting in React?**

Code-splitting is a technique used to split the code into smaller bundles that can be loaded on demand. It helps improve the performance of React applications by reducing the initial load time. React supports code-splitting via dynamic import() and React.lazy().
For example:
```
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
}
```
**27. What is the significance of key in React?**

The key attribute is used in React to identify which items in a list are changed, added, or removed. It helps React optimize rendering by determining which elements need to be re-rendered. Keys should be unique among siblings.

**28. How can you optimize performance in a React application?**

Some ways to optimize performance in a React application include:

Using the Production Build: Ensure that the production build is used in production.
Code-Splitting: Split code into smaller bundles to load them on demand.
Memoization: Use React.memo() to prevent unnecessary re-renders.
useCallback and useMemo: Optimize functions and values that change frequently.
Lazy Loading: Load components lazily to reduce the initial load time.
Avoid Inline Functions: Define functions outside render methods to avoid re-creation on each render.

**29. What are synthetic events in React?**

Synthetic events are React's cross-browser wrapper around the browser's native event system. They provide a consistent interface for handling events across different browsers. Synthetic events are used to handle events in a platform-agnostic way.

**30. How do you handle forms in React?**

Forms in React can be handled using controlled components, where the form data is controlled by the component's state, or uncontrolled components, where the form data is controlled by the DOM. For example, handling forms using controlled components:
```
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
```

**31. What are refs in React?**

Refs (short for references) provide a way to access DOM nodes or React elements created in the render method. They are commonly used to interact with DOM elements directly.

**Example:**
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus();
  }

  render() {
    return <input type="text" ref={this.myRef} />;
  }
}
```
**32. What is the difference between React.createElement and JSX?**

React.createElement is a method used to create React elements without using JSX. JSX is a syntax extension that makes it easier to write React elements, but it gets compiled to React.createElement calls.

**Example:**
```
const element = <h1>Hello, world!</h1>; // JSX
const element = React.createElement('h1', null, 'Hello, world!'); // React.createElement
```

**33. How do you handle conditional rendering in React?**
    
Conditional rendering in React can be handled using JavaScript conditional operators like if, else, ternary operators, or logical && operator.

**Example:**
```
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
    </div>
  );
}
```

**34. What are React fragments?**

React fragments allow you to group multiple elements without adding extra nodes to the DOM. They are useful for returning multiple elements from a component's render method.

**Example:**

```
function FragmentExample() {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>Description</p>
    </React.Fragment>
  );
}
```

**35. What is React's useReducer hook?**

useReducer is a hook that is used for managing state in a component using a reducer function. It is an alternative to useState for more complex state logic.

**Example:**
```
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

**36. What is the difference between class components and functional components?**

**Class Components:** These are ES6 classes that extend React. Component and can have state and lifecycle methods.

**Functional Components:** These are plain JavaScript functions that take props as an argument and return React elements. They can use hooks to manage state and lifecycle methods.
```
// Class Component
class MyComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Functional Component
function MyComponent(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
**37. How do you use the useContext hook in React?**
useContext is a hook that lets you subscribe to a context within a functional component.

**Example:**
```
const MyContext = React.createContext();

function MyComponent() {
  const value = React.useContext(MyContext);
  return <div>{value}</div>;
}

function App() {
  return (
    <MyContext.Provider value="Hello, World!">
      <MyComponent />
    </MyContext.Provider>
  );
}
```
**38. What are controlled and uncontrolled components?**

Controlled Components: The form data is handled by the state within a React component.
Uncontrolled Components: The form data is handled by the DOM itself.

**Example:**
```
// Controlled Component
class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Uncontrolled Component
class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.inputRef.current.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.inputRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
```
**39. How do you fetch data in React?**
    
Data fetching in React is typically done using the fetch API or libraries like Axios in lifecycle methods or hooks like useEffect.

**Example:**
```
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```

**40. What is the purpose of React's StrictMode?**

StrictMode is a tool for highlighting potential problems in an application. It helps identify unsafe lifecycles, legacy API usage, and other warnings in the application.

**Example:**
```
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello, World!</h1>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```
**41. How can you optimize performance for large lists in React?**

For rendering large lists efficiently, you can use libraries like react-window or react-virtualized, which implement windowing techniques to only render visible items in a list.

**Example using react-window:**
```
import React from 'react';
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

function App() {
  return (
    <List
      height={150}
      itemCount={1000}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  );
}
```
**42. What is the difference between useEffect and useLayoutEffect?**

**useEffect:**
Runs after the render is committed to the screen. Suitable for side effects that do not block the browser's paint.

**useLayoutEffect:**
Runs synchronously after all DOM mutations. Suitable for reading layout from the DOM and synchronously re-rendering.

**Example:**
```
import React, { useEffect, useLayoutEffect, useRef } from 'react';

function LayoutEffectExample() {
  const ref = useRef();

  useEffect(() => {
    console.log('useEffect', ref.current.getBoundingClientRect());
  });

  useLayoutEffect(() => {
    console.log('useLayoutEffect', ref.current.getBoundingClientRect());
  });

  return <div ref={ref}>Hello, World!</div>;
}
```
**43. How do you create context in React?**

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

**Example:**
```
const MyContext = React.createContext();

function App() {
  return (
    <MyContext.Provider value="Hello, World!">
      <Toolbar />
    </MyContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const value = React.useContext(MyContext);
  return <button>{value}</button>;
}
```

**44. What are error boundaries in React?**

Error boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the whole component tree.

**Example:**
```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}
```
**45. What is a Higher-Order Component (HOC)?**

A Higher-Order Component (HOC) is an advanced technique for reusing component logic. It is a function that takes a component and returns a new component.

**Example:**
```
function withLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log('Component did mount');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

class MyComponent extends React.Component {
  render() {
    return <div>Hello, World!</div>;
  }
}

const MyComponentWithLogging = withLogging(MyComponent);
```
**46. What is prop drilling, and how can it be avoided?**

Prop drilling refers to the process of passing data from a parent component to a deeply nested child component through multiple intermediate components. It can be avoided using Context API or state management libraries like Redux.

**Example using Context API:**
```
const MyContext = React.createContext();

function App() {
  return (
    <MyContext.Provider value="Hello, World!">
      <Level1 />
    </MyContext.Provider>
  );
}

function Level1() {
  return <Level2 />;
}

function Level2() {
  return <Level3 />;
}

function Level3() {
  const value = React.useContext(MyContext);
  return <div>{value}</div>;
}
```
**47. What is the use of useImperativeHandle hook?**

useImperativeHandle is a React hook that customizes the instance value that is exposed when using ref in parent components. It is typically used with forwardRef.

**Example:**
```
import React, { useImperativeHandle, forwardRef, useRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} />;
});

function Parent() {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}
```
**48. What are lazy loading and Suspense in React?**

Lazy loading is a technique used to defer loading of non-essential resources at the initial load time. React.lazy and Suspense are used to lazy load components.

**Example:**
```
import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```
**49. How do you optimize a React application's performance?**

Optimizing a React application's performance can be achieved through various techniques:

**->** Code splitting with React.lazy and Suspense.

**->** Memoization using React.memo and useMemo.

**->** Avoiding unnecessary renders with useCallback.

**->** Using production build.

**->** Implementing shouldComponentUpdate or React.PureComponent.

**50. How do you use useRef hook in React?**

The useRef hook is used to persist values between renders or directly access a DOM element.

**Example:**
```
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}
```
**51. Why do React Hooks make use of refs?**

Earlier, refs were only limited to class components but now it can also be accessible in function components through the useRef Hook in React.

**The refs are used for:**

- Managing focus, media playback, or text selection.
- Integrating with DOM libraries by third-party.
- Triggering the imperative animations.

  **52. 18. What is the use of useEffect React Hooks?**
  
The useEffect React Hook is used for performing the side effects in functional components. With the help of useEffect, you will inform React that your component requires something to be done after rendering the component or after a state change. The function you have passed(can be referred to as “effect”) will be remembered by React and call afterwards the performance of DOM updates is over. Using this, we can perform various calculations such as data fetching, setting up document title, manipulating DOM directly, etc, that don’t target the output value. The useEffect hook will run by default after the first render and also after each update of the component. React will guarantee that the DOM will be updated by the time when the effect has run by it.

The useEffect React Hook will accept 2 arguments: useEffect(callback,[dependencies]);

Where the first argument callback represents the function having the logic of side-effect and it will be immediately executed after changes were being pushed to DOM. The second argument dependencies represent an optional array of dependencies. The useEffect() will execute the callback only if there is a change in dependencies in between renderings.

```
import { useEffect } from 'react';
function WelcomeGreetings({ name }) {
 const msg = `Hi, ${name}!`;     // Calculates output
 useEffect(() => {
   document.title = `Welcome to you ${name}`;    // Side-effect!
 }, [name]);
 return <div>{msg}</div>;         // Calculates output
}
```
