
# 30 React Fundamentals Every Frontend Engineer Should Know

This repository covers the 30 fundamental concepts of React every frontend engineer should be familiar with. Below are questions and answers to essential React concepts with examples and explanations.

## Questions and Answers

1. **How does the virtual DOM work in React, and why is it important?**
   - The Virtual DOM is a lightweight representation of the real DOM. React uses the Virtual DOM to optimize UI rendering by only updating the parts of the real DOM that have changed. This makes React applications faster because it reduces costly DOM manipulations.
   - Example: When a state changes, React creates a Virtual DOM, compares it to the previous one, and updates only the differences in the real DOM (reconciliation).

2. **What are React Hooks, and how do they differ from class lifecycle methods?**
   - React Hooks are functions that allow you to use state and other React features in functional components. They simplify managing state, side effects, and component lifecycles without needing class components.
   - Hooks like `useEffect` replace lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

3. **Explain the concept of Higher-Order Components (HOCs) and provide use cases.**
   - HOCs are functions that take a component and return a new component with enhanced behavior. They are used to reuse component logic across multiple components.
   - Example: Adding authentication or logging functionality to several components.

4. **What is Context API, and how does it help in managing global state?**
   - Context API is React’s way of managing state globally without passing props down the component tree. It is useful for avoiding prop drilling and managing global state like themes, authentication, or user settings.

5. **How does React's reconciliation algorithm work?**
   - React’s reconciliation algorithm efficiently updates the DOM by comparing the Virtual DOM with the actual DOM. When React detects changes, it updates only the necessary DOM nodes, improving performance.

6. **Describe the concept of "lifting state up" in React and provide an example.**
   - "Lifting state up" means moving shared state to the closest common ancestor component so that multiple components can share the state.
   - Example: When two child components need access to the same data, that state should be lifted up to the parent.

7. **What is the purpose of the useReducer hook, and how does it compare to useState?**
   - `useReducer` is used for managing more complex state logic compared to `useState`. It works similarly to a Redux reducer, taking a reducer function and an initial state and returning the current state and a dispatch function.

8. **How can you optimize the performance of a React application?**
   - Key performance optimizations include:
     - Using React.memo to prevent unnecessary re-renders.
     - Code splitting with `React.lazy` and `Suspense`.
     - Optimizing component rendering with `shouldComponentUpdate` or `React.PureComponent`.

9. **Explain the role of keys in React lists and why they are important.**
   - Keys help React identify which items in a list have changed, been added, or removed. They provide a stable identity for list items, helping React optimize rendering.

10. **What are React Portals, and when should they be used?**
    - React Portals allow you to render children components into a DOM node outside of the parent component. They are often used for modals or tooltips.

11. **Describe the benefits and limitations of server-side rendering (SSR) with Next.js.**
    - **Benefits**: Improved SEO, faster initial load times, better performance on slower devices.
    - **Limitations**: Increased complexity and slower development builds.

12. **How do you implement code splitting in a React application?**
    - Code splitting can be implemented using `React.lazy` and `Suspense`, allowing you to load components lazily when they are needed, reducing the initial load time.

13. **What are custom hooks, and how can they help in reusing logic across components?**
    - Custom hooks are functions that allow you to reuse stateful logic across multiple components. They are useful for abstracting complex logic, making your code more modular and reusable.

14. **Explain the concept of controlled and uncontrolled components in form handling.**
    - **Controlled components**: Form inputs where the state is managed by React using `useState` or `useReducer`. Changes to input are handled by updating the state.
    - **Uncontrolled components**: Form inputs where the state is managed by the DOM using `refs` to access the current value.

15. **How can you manage side effects in a React application?**
    - Side effects like data fetching or DOM manipulation are managed using the `useEffect` hook. It allows you to specify functions that run after the component renders or updates.

16. **Discuss the trade-offs between using Redux and the Context API for state management.**
    - **Context API**: Suitable for small applications or light state sharing. It is simple and avoids boilerplate.
    - **Redux**: Suitable for large applications with complex state logic. Redux offers better debugging tools and centralized state management but requires more setup.

17. **What are fragments in React, and when should they be used?**
    - Fragments let you group multiple elements without adding extra nodes to the DOM. They are used when you need to return multiple sibling elements without wrapping them in a parent element.

18. **How does React handle events differently from vanilla JavaScript?**
    - React uses synthetic events, a cross-browser wrapper around native events. It normalizes event handling across browsers and improves performance by using event delegation.

19. **Describe the use case and implementation of suspense and lazy loading in React.**
    - Suspense and lazy loading are used for code splitting and loading components only when needed.
    - Example: `React.lazy` can dynamically import components and load them when needed.

20. **How can you use React.memo to optimize component rendering?**
    - `React.memo` prevents unnecessary re-renders of functional components by memoizing the output. If the props don't change, the component will not re-render.

21. **What are the common pitfalls of using useEffect, and how can they be avoided?**
    - Common pitfalls include missing dependencies and unintended re-renders. Avoid these by providing all necessary dependencies in the dependency array and using clean-up functions when needed.

22. **How do you handle errors in React components, and what are error boundaries?**
    - Error boundaries are components that catch JavaScript errors in their child components, logging them and displaying a fallback UI.
    - Example: `componentDidCatch` lifecycle method is used to handle errors.

23. **Explain the difference between optimistic and pessimistic updates in React.**
    - **Optimistic updates**: Assume the update will succeed and immediately update the UI.
    - **Pessimistic updates**: Wait for a response from the server before updating the UI.

24. **What is PropTypes, and how does it contribute to type checking in React?**
    - `PropTypes` is a built-in type-checking library in React that validates the props passed to a component, ensuring they are the correct type and shape.

25. **How can you implement dark mode in a React application?**
    - Dark mode can be implemented using state to toggle themes and applying the corresponding CSS styles for light and dark modes.

26. **Describe the role and benefits of using a CSS-in-JS library with React.**
    - CSS-in-JS libraries allow you to style components using JavaScript. They provide scoped styles, dynamic theming, and easier maintenance of component styles.

27. **What are the differences between useRef and createRef?**
    - `useRef` is used in functional components to persist a mutable object between renders, while `createRef` is used in class components to hold references.

28. **How can you handle data fetching in a React component?**
    - Data fetching is handled with `useEffect` to trigger API calls after component mount, using tools like Axios or the Fetch API.

29. **What are the best practices for structuring a React project?**
    - Best practices include organizing files by feature, using folder structures like `/components`, `/services`, and `/hooks`, and ensuring modularity with reusable components.

30. **How do you manage complex animations in React, and which libraries can be used?**
    - Complex animations can be managed using libraries like `Framer Motion`, `React Spring`, or `GSAP`. These libraries provide APIs to create fluid, performant animations.





=============================================

# 120+ React Interview Questions and Answers to Get Hired in 2024

This document contains comprehensive React interview questions, structured into different levels - Basic, Intermediate, and Expert - along with over 52 additional questions covering various important topics in React. Each question is provided with detailed explanations and examples to help you prepare thoroughly for your React interviews.

## **Level 1: Basic Questions**

1. **What is ReactJS and How does it Work?**
   - ReactJS is a JavaScript library used for building user interfaces, primarily for single-page applications. React works by creating a virtual DOM, which is a lightweight copy of the actual DOM. When a state changes, React updates the virtual DOM, compares it to the real DOM (reconciliation), and only updates the changed parts, leading to high performance.
   ```js
   function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
   }
   ```

2. **What is the difference between Shadow DOM and Virtual DOM? Explain the reconciliation process.**
   - **Shadow DOM** is used in Web Components to encapsulate styles and markup, preventing them from affecting the rest of the document. **Virtual DOM** is a concept used in React, where a virtual representation of the DOM is used to optimize rendering by updating only the necessary parts.
   - **Reconciliation**: React compares the virtual DOM with the actual DOM and only updates the real DOM with the changes, making the update process faster.

3. **What is the difference between an Element and a Component?**
   - An **Element** describes what you want to see on the screen and is the smallest building block of React applications. It is immutable.
   - A **Component** is a function or class that can return elements and manage its own state and lifecycle. Components are reusable and can take props to render dynamic content.

4. **What is state and props in ReactJS?**
   - **State** is an object that holds the dynamic data of a component. It is mutable and can change over time based on user interaction.
   - **Props** are read-only data passed from a parent component to a child component. Props are used to pass data and event handlers to child components.

5. **What are Pure Components and React.memo()?**
   - **Pure Components**: Components that perform shallow comparisons between current and previous props or state and only re-render if there are changes.
   - **React.memo()**: A higher-order component that memoizes the result of a functional component, preventing it from re-rendering if its props do not change.

6. **What are synthetic events in React?**
   - Synthetic events in React are wrappers around the browser's native events, providing a consistent API across different browsers. These events work similarly to native events but have cross-browser compatibility.

7. **What are the different phases of the component lifecycle?**
   - **Mounting**: When the component is created and inserted into the DOM. Methods: `constructor()`, `componentDidMount()`.
   - **Updating**: When the component is re-rendered due to changes in props or state. Methods: `componentDidUpdate()`.
   - **Unmounting**: When the component is removed from the DOM. Methods: `componentWillUnmount()`.

8. **What are Higher-Order Components (HOCs)?**
   - Higher-Order Components (HOCs) are functions that take a component and return a new component with added functionality. HOCs are used to reuse component logic across multiple components.
   ```js
   function withLogging(WrappedComponent) {
     return function(props) {
       console.log('Component rendered');
       return <WrappedComponent {...props} />;
     }
   }
   ```

9. **What is context and useContext Hook?**
   - **Context** is a way to share values across components without passing props manually at each level.
   - **useContext Hook** allows you to consume a context value in a functional component.
   ```js
   const ThemeContext = React.createContext('light');
   function App() {
     const theme = useContext(ThemeContext);
     return <div className={theme}>Hello World</div>;
   }
   ```

10. **What are stateless and stateful components?**
   - **Stateless components** (also called functional components) do not manage state internally. They rely on props to render content.
   - **Stateful components** (also called class components or functional components with hooks) manage their own state and can update it over time.

## **Level 2: Intermediate Questions**

11. **Why should we not update the state directly?**
   - Directly updating the state bypasses React's state management, leading to unpredictable UI behavior. Instead, `setState` or hooks like `useState` should be used to ensure proper rendering and state management.

12. **What is the purpose of a callback function as an argument of setState()?**
   - The callback function in `setState()` is executed after the state has been updated, allowing you to perform actions that depend on the updated state.
   ```js
   this.setState({ count: this.state.count + 1 }, () => {
     console.log('State updated:', this.state.count);
   });
   ```

13. **What is the difference between HTML and React event handling?**
   - In HTML, events are named in lowercase (`onclick`), while in React they are camelCase (`onClick`). Also, React events use a synthetic event system, which is consistent across all browsers.

14. **How to bind methods or event handlers in JSX callbacks?**
   - Event handlers can be bound in JSX using `.bind()` or arrow functions.
   ```js
   <button onClick={this.handleClick.bind(this)}>Click Me</button>
   ```
   or
   ```js
   <button onClick={() => this.handleClick()}>Click Me</button>
   ```

15. **What is the use of refs, React.createRef(), and useRef() hook?**
   - **Refs** are used to access DOM elements or component instances directly. In class components, `createRef()` is used, and in functional components, the `useRef()` hook is used.

16. **What are forward refs?**
   - **Forward refs** allow a parent component to pass a ref to a child component, giving the parent direct access to the child component's DOM or component instance.
   ```js
   const Input = React.forwardRef((props, ref) => <input ref={ref} {...props} />);
   ```

17. **What is React Fiber?**
   - **React Fiber** is the new reconciliation algorithm in React that allows for incremental rendering. It improves rendering performance, especially for complex UIs.

18. **What are controlled and uncontrolled components?**
   - **Controlled components** manage their state via React (e.g., input values controlled by the component’s state).
   - **Uncontrolled components** rely on the DOM to manage their state (e.g., `ref` is used to access form values).

19. **How to set a state with a dynamic key name?**
   ```js
   this.setState({ [key]: value });
   ```

20. **How to apply validation on props in React?**
   - You can validate props using `PropTypes`.
   ```js
   MyComponent.propTypes = {
     name: PropTypes.string.isRequired
   };
   ```

## **Level 3: Expert Questions**

31. **How Server Side Rendering (SSR) in React Works?**
   - SSR allows React components to be rendered on the server, generating HTML before sending it to the client. This improves performance and SEO.
   - Example: Using **Next.js** for SSR.

32. **What are the different ways to optimize React App?**
   - Use `React.memo()` to avoid unnecessary re-renders.
   - Implement code-splitting using `React.lazy()` and `Suspense`.
   - Avoid anonymous functions in render.
   - Use `useMemo` and `useCallback` hooks for performance optimization.

33. **How to make React app secure, and what are protected routes in React?**
   - Use HTTPS, validate user inputs, avoid storing sensitive data in the client-side, and use secure authentication methods like JWT.
   - Protected routes in React ensure that only authenticated users can access certain routes.

34. **What are the React coding best practices?**
   - Organize your project folder structure logically.
   - Use functional components with hooks.
   - Avoid inline styles for maintainability.
   - Write reusable and modular components.

... (continued for Expert level)


## **Additional 52 Questions**

1. **What is "key" prop and what is the benefit of using it in arrays of elements?**
   - The `key` prop is a special attribute used to identify which items in a list have changed. It helps React optimize rendering by only updating changed items.
   ```js
   {items.map(item => <li key={item.id}>{item.name}</li>)}
   ```

2. **What is the purpose of callback function as an argument of setState()?**
   - It ensures that the state is updated before any further actions are taken.
   ```js
   this.setState({ count: this.state.count + 1 }, () => {
       console.log("State updated to:", this.state.count);
   });
   ```

3. **What is the purpose of using super constructor with props argument?**
   - In class-based components, `super(props)` is required when extending `React.Component`. It ensures that the parent class constructor (`React.Component`) is called with the `props` object, allowing the component to access `this.props`.

4. **Which is the preferred option within callback refs and findDOMNode()?**
   - **Callback refs** are preferred over `findDOMNode()` as they provide a more declarative way to access the DOM elements and are not deprecated.

5. **What is the difference between createElement and cloneElement?**
   - `React.createElement` creates a new element from scratch, while `React.cloneElement` clones an existing element and allows you to modify its props.

6. **Why do you get "Router may have only one child element" warning?**
   - In React Router, `<Router>` components (like `<BrowserRouter>`, `<HashRouter>`) expect exactly one child element. Wrapping multiple children in a `<div>` or a React fragment can solve this.

7. **What is the difference between HTML and React event handling?**
   - In React, event handlers are camelCase (e.g., `onClick` vs. `onclick` in HTML). React also uses synthetic events, which are cross-browser wrappers around the browser's native events.

8. **What is the difference between Shadow DOM and Virtual DOM?**
   - **Shadow DOM** is used for encapsulating the DOM and styles within Web Components, whereas **Virtual DOM** is an in-memory representation of the actual DOM, used by React to optimize UI rendering.

9. **How to pass parameters to `history.push()` in React Router v4?**
   - Parameters can be passed via the state object or as URL parameters.
   ```js
   history.push({
       pathname: '/new-path',
       state: { param1: value1 }
   });
   ```

10. **How do you programmatically navigate using React Router v4?**
   - Use the `history.push()` or `history.replace()` methods to navigate programmatically.
   ```js
   this.props.history.push('/new-path');
   ```

11. **When to use a Class Component over a Function Component?**
   - Class components are used when you need lifecycle methods or state prior to React 16.8 (before hooks). With hooks available, functional components are now preferred in most cases.

12. **What is the purpose of push and replace methods of history?**
   - `push` adds a new entry to the history stack (allows backward navigation), while `replace` replaces the current entry in the history stack (no backward navigation).

13. **What is the difference between Element and Component?**
   - An **Element** is a simple object describing what you want to see on the screen, while a **Component** is a class or function that can accept props and state, returning elements.

14. **How to pass a parameter to an event handler or callback?**
   - You can pass parameters using an arrow function or `bind()` method.
   ```js
   <button onClick={() => this.handleClick(param)}>Click Me</button>
   ```

15. **How to bind methods or event handlers in JSX callbacks?**
   - You can use `bind()` in the constructor or arrow functions in JSX.
   ```js
   this.handleClick = this.handleClick.bind(this);
   ```

16. **What are the different phases of component lifecycle?**
   - **Mounting**, **Updating**, and **Unmounting**. Methods like `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()` correspond to these phases.

17. **How React Router is different from history library?**
   - React Router is built on top of the history library and provides higher-level routing components like `<Route>`, `<Link>`, and `<Switch>`, while the history library only manages session history.

18. **How to create props proxy for HOC component?**
   - By wrapping the passed component in another component, you can modify or pass props in the HOC before rendering the original component.
   ```js
   function withExtraProp(WrappedComponent) {
     return function(props) {
       return <WrappedComponent extraProp="extra" {...props} />;
     };
   }
   ```

19. **What is the difference between state and props?**
   - **State** is local and mutable, managed within a component, while **Props** are passed from a parent component and are immutable.

20. **How to get query parameters in React Router v4?**
   - You can use `this.props.location.search` to get the query string, then parse it using a utility like `URLSearchParams`.

21. **How to implement default or NotFound page?**
   - You can use the `<Route>` component with `path="*"`. Place this route at the end of all routes.
   ```js
   <Route path="*" component={NotFound} />
   ```

22. **What are the `<Router>` components of React Router v4?**
   - **BrowserRouter**, **HashRouter**, **MemoryRouter**, **StaticRouter**, and **NativeRouter** are different types of `<Router>` components.

23. **Why should we not update the state directly?**
   - Directly updating the state does not trigger re-rendering and can lead to unexpected behavior. Use `setState()` instead.

24. **What are the lifecycle methods of React?**
   - **Mounting**: `constructor`, `componentDidMount()`.
   - **Updating**: `componentDidUpdate()`.
   - **Unmounting**: `componentWillUnmount()`.

25. **What are inline conditional expressions?**
   - You can use the ternary operator or logical `&&` for inline conditionals.
   ```js
   {isLoggedIn ? <LogoutButton /> : <LoginButton />}
   ```

26. **What are Higher-Order Components?**
   - HOCs are functions that take a component and return a new component with additional functionality.

27. **What is the main goal of React Fiber?**
   - React Fiber allows React to break down rendering work into smaller units and prioritize updates, enabling smoother animations and handling of complex UIs.

28. **What are uncontrolled components?**
   - Uncontrolled components rely on the DOM to handle form data, with refs used to access the values.

29. **What are controlled components?**
   - Controlled components manage their state via React, making React the single source of truth for form data.

30. **What are synthetic events in React?**
   - Synthetic events are React’s cross-browser wrapper around the browser’s native events, providing a consistent interface.

31. **What is Lifting State Up in React?**
   - Lifting state up means moving shared state to the closest common ancestor of the components that need it, enabling them to share the same data.


32. **What is the use of refs in React?**
   - Refs provide a way to access DOM nodes or React elements directly in your components. They can be used to focus an input field, trigger animations, or read values from an uncontrolled component.
   ```js
   class MyComponent extends React.Component {
     constructor(props) {
       super(props);
       this.myRef = React.createRef();
     }
     componentDidMount() {
       this.myRef.current.focus(); // Focus on an input field when the component mounts
     }
     render() {
       return <input ref={this.myRef} />;
     }
   }
   ```

33. **What is the use of react-dom package?**
   - The `react-dom` package provides DOM-specific methods that allow you to interact with the DOM in a React application. Commonly used methods include `render()`, `hydrate()`, and `unmountComponentAtNode()`.
   ```js
   import ReactDOM from 'react-dom';
   ReactDOM.render(<App />, document.getElementById('root'));
   ```

...

52. **How to handle data fetching in React?**
   - Data fetching in React can be handled using `useEffect` to perform asynchronous operations like API calls. Libraries like `axios` or `fetch` can be used to make HTTP requests.
   ```js
   useEffect(() => {
     fetchData();
   }, []);
   ```






=============================================

============================================ React Fundamentals=======================================


# 30 React Fundamentals Every Frontend Engineer Should Know

This repository covers the 30 fundamental concepts of React every frontend engineer should be familiar with. Below are questions and answers to essential React concepts with examples and explanations.

## Questions and Answers

1. **How does the virtual DOM work in React, and why is it important?**
   - The Virtual DOM is a lightweight representation of the real DOM. React uses the Virtual DOM to optimize UI rendering by only updating the parts of the real DOM that have changed. This makes React applications faster because it reduces costly DOM manipulations.
   - Example: When a state changes, React creates a Virtual DOM, compares it to the previous one, and updates only the differences in the real DOM (reconciliation).

2. **What are React Hooks, and how do they differ from class lifecycle methods?**
   - React Hooks are functions that allow you to use state and other React features in functional components. They simplify managing state, side effects, and component lifecycles without needing class components.
   - Hooks like `useEffect` replace lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

3. **Explain the concept of Higher-Order Components (HOCs) and provide use cases.**
   - HOCs are functions that take a component and return a new component with enhanced behavior. They are used to reuse component logic across multiple components.
   - Example: Adding authentication or logging functionality to several components.

4. **What is Context API, and how does it help in managing global state?**
   - Context API is React’s way of managing state globally without passing props down the component tree. It is useful for avoiding prop drilling and managing global state like themes, authentication, or user settings.

5. **How does React's reconciliation algorithm work?**
   - React’s reconciliation algorithm efficiently updates the DOM by comparing the Virtual DOM with the actual DOM. When React detects changes, it updates only the necessary DOM nodes, improving performance.

6. **Describe the concept of "lifting state up" in React and provide an example.**
   - "Lifting state up" means moving shared state to the closest common ancestor component so that multiple components can share the state.
   - Example: When two child components need access to the same data, that state should be lifted up to the parent.

7. **What is the purpose of the useReducer hook, and how does it compare to useState?**
   - `useReducer` is used for managing more complex state logic compared to `useState`. It works similarly to a Redux reducer, taking a reducer function and an initial state and returning the current state and a dispatch function.

8. **How can you optimize the performance of a React application?**
   - Key performance optimizations include:
     - Using React.memo to prevent unnecessary re-renders.
     - Code splitting with `React.lazy` and `Suspense`.
     - Optimizing component rendering with `shouldComponentUpdate` or `React.PureComponent`.

9. **Explain the role of keys in React lists and why they are important.**
   - Keys help React identify which items in a list have changed, been added, or removed. They provide a stable identity for list items, helping React optimize rendering.

10. **What are React Portals, and when should they be used?**
    - React Portals allow you to render children components into a DOM node outside of the parent component. They are often used for modals or tooltips.

11. **Describe the benefits and limitations of server-side rendering (SSR) with Next.js.**
    - **Benefits**: Improved SEO, faster initial load times, better performance on slower devices.
    - **Limitations**: Increased complexity and slower development builds.

12. **How do you implement code splitting in a React application?**
    - Code splitting can be implemented using `React.lazy` and `Suspense`, allowing you to load components lazily when they are needed, reducing the initial load time.

13. **What are custom hooks, and how can they help in reusing logic across components?**
    - Custom hooks are functions that allow you to reuse stateful logic across multiple components. They are useful for abstracting complex logic, making your code more modular and reusable.

14. **Explain the concept of controlled and uncontrolled components in form handling.**
    - **Controlled components**: Form inputs where the state is managed by React using `useState` or `useReducer`. Changes to input are handled by updating the state.
    - **Uncontrolled components**: Form inputs where the state is managed by the DOM using `refs` to access the current value.

15. **How can you manage side effects in a React application?**
    - Side effects like data fetching or DOM manipulation are managed using the `useEffect` hook. It allows you to specify functions that run after the component renders or updates.

16. **Discuss the trade-offs between using Redux and the Context API for state management.**
    - **Context API**: Suitable for small applications or light state sharing. It is simple and avoids boilerplate.
    - **Redux**: Suitable for large applications with complex state logic. Redux offers better debugging tools and centralized state management but requires more setup.

17. **What are fragments in React, and when should they be used?**
    - Fragments let you group multiple elements without adding extra nodes to the DOM. They are used when you need to return multiple sibling elements without wrapping them in a parent element.

18. **How does React handle events differently from vanilla JavaScript?**
    - React uses synthetic events, a cross-browser wrapper around native events. It normalizes event handling across browsers and improves performance by using event delegation.

19. **Describe the use case and implementation of suspense and lazy loading in React.**
    - Suspense and lazy loading are used for code splitting and loading components only when needed.
    - Example: `React.lazy` can dynamically import components and load them when needed.

20. **How can you use React.memo to optimize component rendering?**
    - `React.memo` prevents unnecessary re-renders of functional components by memoizing the output. If the props don't change, the component will not re-render.

21. **What are the common pitfalls of using useEffect, and how can they be avoided?**
    - Common pitfalls include missing dependencies and unintended re-renders. Avoid these by providing all necessary dependencies in the dependency array and using clean-up functions when needed.

22. **How do you handle errors in React components, and what are error boundaries?**
    - Error boundaries are components that catch JavaScript errors in their child components, logging them and displaying a fallback UI.
    - Example: `componentDidCatch` lifecycle method is used to handle errors.

23. **Explain the difference between optimistic and pessimistic updates in React.**
    - **Optimistic updates**: Assume the update will succeed and immediately update the UI.
    - **Pessimistic updates**: Wait for a response from the server before updating the UI.

24. **What is PropTypes, and how does it contribute to type checking in React?**
    - `PropTypes` is a built-in type-checking library in React that validates the props passed to a component, ensuring they are the correct type and shape.

25. **How can you implement dark mode in a React application?**
    - Dark mode can be implemented using state to toggle themes and applying the corresponding CSS styles for light and dark modes.

26. **Describe the role and benefits of using a CSS-in-JS library with React.**
    - CSS-in-JS libraries allow you to style components using JavaScript. They provide scoped styles, dynamic theming, and easier maintenance of component styles.

27. **What are the differences between useRef and createRef?**
    - `useRef` is used in functional components to persist a mutable object between renders, while `createRef` is used in class components to hold references.

28. **How can you handle data fetching in a React component?**
    - Data fetching is handled with `useEffect` to trigger API calls after component mount, using tools like Axios or the Fetch API.

29. **What are the best practices for structuring a React project?**
    - Best practices include organizing files by feature, using folder structures like `/components`, `/services`, and `/hooks`, and ensuring modularity with reusable components.

30. **How do you manage complex animations in React, and which libraries can be used?**
    - Complex animations can be managed using libraries like `Framer Motion`, `React Spring`, or `GSAP`. These libraries provide APIs to create fluid, performant animations.

======================================================================================================
Top 40 React-based hashtag#interview questions that can help you ace your career


# Top 40 React Interview Questions with Answers and Examples

This repository contains the top 40 React interview questions with detailed explanations and examples to help you ace your next interview.

## Questions and Answers

1. **What is React?**
   - React is a JavaScript library used to build user interfaces, especially for single-page applications. It allows developers to create reusable UI components.
   - Example: React components return JSX which renders UI elements.
   ```js
   function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
   }
   ```

2. **What is useMemo?**
   - `useMemo` is a React Hook that memorizes the result of a function and only recalculates it when one of its dependencies changes. This can help improve performance by preventing unnecessary recalculations.
   ```js
   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
   ```

3. **What are the features of React?**
   - **JSX**: A syntax extension for writing HTML-like elements in JavaScript.
   - **Components**: Reusable building blocks for UI.
   - **Virtual DOM**: Efficient re-rendering by comparing virtual and actual DOM.
   - **One-way data binding**: Ensures data flows in a single direction.
   - **Performance**: Optimized for high-performance rendering.

4. **What is JSX?**
   - JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM.
   ```js
   const element = <h1>Hello, world!</h1>;
   ```

5. **What is DOM?**
   - DOM (Document Object Model) is an interface that represents the structure of a webpage as nodes and objects.

6. **What is Virtual DOM?**
   - Virtual DOM is a lightweight representation of the actual DOM. React uses it to improve performance by only updating the necessary parts of the DOM.

7. **What is the component life cycle of React class components?**
   - The lifecycle of a React component is split into Mounting, Updating, and Unmounting phases. Methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` correspond to these phases.

8. **What are fragments in React?**
   - Fragments allow you to return multiple elements from a component without adding extra nodes to the DOM.
   ```js
   return (
     <React.Fragment>
       <h1>Hello</h1>
       <p>World</p>
     </React.Fragment>
   );
   ```

9. **What are props in React?**
   - Props are inputs passed to components. They are used to pass data from parent to child components.

10. **What are synthetic events in React?**
    - Synthetic events are React's cross-browser wrapper around the browser's native event system.

11. **What is the difference between Package.json and Package.lock.json?**
    - `package.json` defines project dependencies, while `package-lock.json` records the exact version of installed dependencies.

12. **What are the differences between client-side and server-side rendering?**
    - **Client-side rendering**: Happens in the browser and is faster for users after the initial load. It's better for rich client interactions.
    - **Server-side rendering**: Renders pages on the server and sends fully formed HTML to the browser, which improves performance and SEO.

13. **What is state in React?**
    - State is an object that determines how a component renders and behaves. Unlike props, state is local to the component and can change over time.

14. **What are props?**
    - Props (short for properties) are read-only inputs passed to a component from its parent.

15. **What are the differences between State and Props in React?**
    - **Props** are passed from parent to child components and are immutable.
    - **State** is local to the component and can be changed with `setState`.

16. **What is props drilling?**
    - Props drilling refers to passing props through multiple levels of components just to reach a deeply nested component.

17. **What are the disadvantages of props drilling, and how can we avoid props drilling?**
    - **Disadvantages**: It can lead to complex, unmanageable code.
    - **Solution**: Use the React Context API or state management libraries like Redux.

18. **What are Pure components in React?**
    - Pure components are components that only re-render when their props or state change.

19. **What are refs in React?**
    - Refs are used to access DOM elements directly and bypass React’s re-rendering process.

20. **What is meant by forward ref?**
    - Forward refs allow passing refs through a component to a child component.

21. **What are Error boundaries?**
    - Error boundaries catch JavaScript errors anywhere in their child component tree and display a fallback UI instead of crashing the whole application.

22. **What are Higher-order components in React?**
    - A higher-order component (HOC) is a function that takes a component and returns a new component. HOCs are used to reuse component logic.

23. **What are the differences between controlled and uncontrolled components?**
    - **Controlled components**: Components where form data is handled by the component’s state.
    - **Uncontrolled components**: Form data is handled by the DOM itself.

24. **What is useCallback?**
    - `useCallback` is a hook that returns a memoized version of a callback function. It helps avoid recreating the same function during re-renders.

25. **What are the differences between useMemo and useCallback?**
    - `useMemo` memoizes a computed value, whereas `useCallback` memoizes a function.

26. **What are keys in React?**
    - Keys are used in React to identify which items have changed, been added, or removed, helping optimize rendering.

27. **What is Lazy loading in React?**
    - Lazy loading allows components to be loaded on demand, reducing initial load time.

28. **What is suspense in React?**
    - Suspense is a component that allows for lazy loading of components by delaying the rendering of a component until some condition is met.

29. **What are custom hooks?**
    - Custom hooks allow you to reuse logic across multiple components.

30. **What is the useReducer hook?**
    - `useReducer` is a hook used for complex state logic in components. It returns the current state and a dispatch method.

31. **What are Portals in React?**
    - Portals allow rendering a component’s children into a DOM node outside of the parent component’s DOM hierarchy.

32. **What is context in React?**
    - The React Context API allows you to share state and data across components without passing props manually at every level.

33. **Practical question: Give an example of context API usage.**
    ```js
    const ThemeContext = React.createContext('light');
    function App() {
      return (
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
      );
    }
    ```

34. **What is the purpose of the callback function as an argument of setState()?**
    - The callback function is executed after the state has been updated, ensuring that you have access to the updated state.

35. **Practical question: Create a custom hook for increment/decrement counter.**
    ```js
    function useCounter(initialValue = 0) {
      const [count, setCount] = useState(initialValue);
      const increment = () => setCount(count + 1);
      const decrement = () => setCount(count - 1);
      return { count, increment, decrement };
    }
    ```

36. **Which lifecycle hooks in class components are replaced with useEffect in functional components?**
    - `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` are replaced by `useEffect` in functional components.

37. **What is Strict mode in React?**
    - StrictMode is a tool for highlighting potential problems in an application. It does not render any visible UI but activates additional checks and warnings.

38. **What are the different ways to pass data from a child component to a parent component in React?**
    - You can pass a callback function as a prop to the child and invoke it to send data to the parent.

39. **Practical question: How to send data from child to parent using callback functions?**
    ```js
    function Parent() {
      const handleData = (data) => console.log(data);
      return <Child sendData={handleData} />;
    }
    function Child({ sendData }) {
      return <button onClick={() => sendData('Hello Parent!')}>Send Data</button>;
    }
    ```

40. **Practical question: How to send data from a child component to a parent using useRef?**
    - While refs are generally used for accessing DOM elements, you can pass refs from parent to child using `forwardRef`, and update the parent from the child.

## How to Contribute
Feel free to fork this repository and submit pull requests to improve the questions and examples!

## License
This project is licensed under the MIT License.

