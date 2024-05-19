## React Interview Question

**1.What is React?**


It is an open-source front-end JavaScript library most popular for single-page web applications. It is helpful when interactive and complex UIs are built for websites or mobile apps. React.js was released for use in 2015 and since then it has become one of the most trusted and used technologies of recent time. It has built one of the largest developer communities around itself.

**2.
List some of React.js’ features.**

Important features of React.js include:

Instead of a real DOM, there is Virtual DOM
It completely renders the HTML files on the server into client HTML pages, in other words, server-side rendering
In React.js, the data can be passed to the other parts of an application only in one direction. In other words, there is a unidirectional flow of data.

**3.
What are the main advantages of React.js?**


The main advantages of React.js are:

It enhances the performance of the application
It can be used from the client-side as well as the server-side
The readability of code is higher in React.js because of JSX
It offers easy integration with frameworks such as Angular, Meteor, etc.
It is easy to write UI test cases with React.js
If you can include some practical experience demonstrating the advantages of React.js in this React.js interview question, you are likely to impress the recruiter.

**4.
What is JSX?**


JSX is the syntax extension for Javascript in React.js. With the help of JSX, it is easy to define how the user interface should look. Additionally, with JSX, the file containing the Javascript code can be used to write the HTML structures as well.

**5.
Describe an event in React.js?**

When a user presses a key, clicks the mouse, or performs any action on the machine or when the machine itself triggers an action, these actions are registered as events in React.js.

In React.js, we use camelCase to name events, instead of the lowercase in HTML
In React.js, because of JSX, a function is passed as an event handler, instead of the string in HTML

**6.
How do Lists work in React.js?**


Lists in React.js are created similar to how they are created in regular Javascript. With lists, data can be displayed in an orderly manner and is useful in displaying menus on websites. For traversing lists, the map() function is used. For example,

An array of numbers is taken by the map() function and their value is multiplied by 5
var numbers = [2,4,6,8,10]
const multiplyNums = numbers.map((number => {
return (number*5);
});
console.log (multiplyNums);
Output: The output in Javascript will be logged in the console. The output in the above case is [10, 20, 30, 40, 50]

**7.
Why are keys used in React.js Lists?**


Keys are used in React.js Lists because:

Key helps in identifying what objects have been altered, moved, or deleted from lists
With the help of keys, it is easier to determine which objects must be re-rendered instead of all components being re-rendered all the time.
React.js interview questions that ask about the use of a certain function or component in React.js programming are common.

**8.
Is HTML used in React?**

No, it uses an HTML-in JavaScript syntax called JSX (JavaScript and XML) that converts HTML tags to React elements.

**9.
What is the release date of React?**

March 2013

**10.
Can you tell two downsides of React?**

It is difficult to integrate with an MVC framework like Rails. Also, users need to have the knowledge about integrating user interface into MVC framework.
