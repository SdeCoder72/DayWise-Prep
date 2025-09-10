## Class vs Functional Components in React

| Feature               | Class Component                                  | Functional Component                              |
|-----------------------|--------------------------------------------------|---------------------------------------------------|
| Syntax                | ES6 class extending `React.Component`            | Plain JS function or arrow function               |
| State Management      | `this.state`, `this.setState()`                  | `useState()` hook                                 |
| Lifecycle Methods     | `componentDidMount`, `componentDidUpdate`, etc. | `useEffect()` hook                                |
| `this` Keyword        | Required for accessing props/state               | Not required                                      |
| Readability           | Verbose, more boilerplate                        | Concise and cleaner                               |
| Performance           | Slightly heavier due to class overhead          | Lighter and faster with hooks                     |
| Use Case              | Legacy code, complex lifecycle logic             | Modern apps, reusable UI blocks                   |
