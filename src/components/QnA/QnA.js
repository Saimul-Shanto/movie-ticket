import React from 'react';
import './QnA.css';

const QnA = () => {
    return (
        <div className='qna'>
            <h3>How react works?</h3>
            <p>React works by allowing developers to build user interfaces using components, which are self-contained 
                pieces of code representing specific parts of the UI. Components can be functional or class-based and 
                are written using JSX, a syntax extension that looks like XML or HTML. When a component's state 
                changes, React efficiently updates a virtual DOM, a lightweight in-memory representation of the actual
                 DOM. The library then performs a process called reconciliation, comparing the new virtual DOM with the
                  previous one and updating only the changed parts in the actual DOM. This approach minimizes DOM 
                  manipulation, optimizing performance. React follows one-way data binding, where data flows from parent 
                  to child components, and it provides features like state, props, lifecycle methods (for class components), 
                  and hooks (for functional components) to manage UI logic and state effectively. Overall, React simplifies the 
                  process of building interactive and dynamic user interfaces in a declarative and efficient manner.</p>
            <h3>How useState Works?</h3>
            <p>useState is a React Hook that enables functional components to manage state, bringing stateful behavior
                 to components that are not classes. It works by returning an array with two elements: the current
                  state value and a function to update that value. When using useState, you provide an initial value 
                  as an argument to the hook. The first element of the returned array (state) holds the current value
                   of the state, and the second element (setState) is a function that allows you to update the state.
            </p>
        </div>
    );
};

export default QnA;