# 🌐 JavaScript – Asynchronous Programming

## ✅ Concepts Covered

| Concept     | Description                          | Syntax Example |
|-------------|--------------------------------------|----------------|
| Callback    | Function passed as argument          | `setTimeout(fn, 1000)` |
| Promise     | Object representing future value     | `new Promise((res, rej) => {...})` |
| Async/Await | Syntactic sugar over Promises        | `async function() { await ... }` |

---

## 🔍 Comparison Table

| Feature         | Callback        | Promise         | Async/Await     |
|-----------------|------------------|------------------|------------------|
| Readability     | Low (nested)     | Medium           | High             |
| Error Handling  | Manual           | `.catch()`       | `try/catch`      |
| Chaining        | Difficult        | Easy with `.then()` | Very clean       |
| Execution Flow  | Callback hell    | Structured       | Linear-like      |

---

## 🧠 Interview Tip
- Be ready to explain event loop + microtask queue
- Practice converting callback code to async/await
